"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Projects, Donations
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#traer datos de un usuario

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    current_user = get_jwt_identity()
    user=User.query.filter_by(email=current_user).first()
    if user is None :
        raise APIException("El usuario no existe")
    return jsonify(user.serialize()),200


#actualizar un usuario
@api.route('/user', methods=['PUT'])
@jwt_required()
def update_user ():
    body= request.get_json()
    if  body is None :
        raise APIException("tienes que enviar informacion en el body",status_code=400)
    current_email = get_jwt_identity()    
    user=User.query.filter_by(email=current_email).first()
    if user is None:
        raise APIException("El usuario no existe",status_code=400)
    if 'role'  in body:
        raise APIException("El rol no se puede actualizar eliminalo del body ")
    if 'first_name' in body :
        user.first_name=body['first_name']
    if 'last_name' in body :
        user.last_name=body['last_name'] 
    if 'address' in body:
        user.addres=body['address'] 
    if 'phone' in body:
        user.phone=body['phone']  
    if 'document' in body:
        user.document=body['document']
    if 'paypal_link' in body :
        user.paypal_link=body['paypal_link']
    if 'email' in body :
        user.email=body['email']

    db.session.commit()
    return jsonify(user.serialize()),200

#eliminar un usuario
@api.route('/user', methods=['DELETE'])
@jwt_required()
def delete_user():
    body= request.get_json()
    if body is None:
        raise APIException("Tines que enviar informacion en el body",status_code=400)
    email = get_jwt_identity()
    user=User.query.filter_by(email=email).first()
    if user is None:
        raise APIException("El usuario no se encontró",status_code=400)
    user.is_active=False
    db.session.commit()
    return jsonify(user.serialize()),200

# crear un nuevo proyecto
@api.route('/projects', methods=['POST'])
@jwt_required()
def post_project():
    body=request.get_json()
    if body is None:
        raise APIException("Tienes que ingresar información del proyecto", status_code=400)
    if 'name' not in body:
        raise APIException("Tienes que ingresar el nombre del proyecto")
    if 'date_finish' not in body:
        raise APIException("La fecha de finalización no se ha indicado")
    
    if 'description' not in body:
        raise APIException("Tienes que ingresar la descripción del proyecto")
    if 'donative_amount' not in body:
        raise APIException("Falta ingresar un monto a donar")

    email = get_jwt_identity()
    user=User.query.filter_by(email=email).first()
    if user is None:
        raise APIException("El usuario beneficiario no existe")
    if user.role == 1:
        raise APIException("No es beneficiario")

    add_project=Projects(name=body['name'], date_finish=body['date_finish'], id_beneficiary=user.id, description=body['description'], donative_amount=body['donative_amount'], is_active=True)
    db.session.add(add_project)
    db.session.commit()
    return jsonify(add_project.serialize()),200
    
# eliminar un proyecto
@api.route('/projects/', methods=['DELETE'])
@jwt_required()
def delete_project():
    body= request.get_json()
    email = get_jwt_identity()
    user=User.query.filter_by(email=email).first()
    if body is None:
        raise APIException("Tienes que agregar el proyecto a eliminar en el body", status_code=400)
    if 'id' not in body:
        raise APIException("Tienes que agregar el ID del proyecto que deseas eliminar", status_code=400)
    delete_projects= Projects.query.get(body['id'])
    if delete_projects is None:
        raise APIException("El proyecto que quieres eliminar no ha sido encontrado", status_code=400)
    id_usuario=user.id
    if id_usuario != delete_projects.id_beneficiary:
        raise APIException("Este proyecto no corresponde a este usuario", status_code=400)
    
    delete_projects.is_active=False
    db.session.commit()
    return jsonify(delete_projects.serialize()),200

# actualizar un proyecto
@api.route('/projects/<int:project_id>', methods=['PUT'])
@jwt_required()
def put_project(project_id):
    put_project = Projects.query.get(project_id)
    email = get_jwt_identity() 
    user=User.query.filter_by(email=email).first()
    body= request.get_json()
    if put_project.id_beneficiary != user.id :
        raise APIException("Este proyecto no te pertenece")
    if body is None:
        raise APIException("Proyecto no existe en el body")
    if "name" in body:
        put_project.name = body["name"]
    if "date_finish" in body:
        put_project.date_finish = body["date_finish"]
    if "id_beneficiary" in body:
        put_project.id_beneficiary = body["id_beneficiary"]
    if "description" in body:
        put_project.description = body["description"]
    if "donative_amount" in body:
        put_project.donative_amount = body["donative_amount"]
    db.session.commit()
    return jsonify(put_project.serialize()), 200


@api.route('/proyectos_all', methods=['GET'])
@jwt_required()
def get_proyectos():
    email = get_jwt_identity()
    user=User.query.filter_by(email=email).first()
    if user is None: 
        raise APIException("No existe el usuario")
    if user.role == 2:
        raise APIException("No es donador")
    projects=Projects.query.all()
    projects_serialize=list(map(lambda project : project.serialize(), projects))
    return jsonify(projects_serialize), 200

@api.route('/donaciones', methods=['GET'])
@jwt_required()
def get_donaciones():
    email = get_jwt_identity()
    user=User.query.filter_by(email=email).first()
    if user is None: 
        raise APIException("No existe el usuario")
    donations=Donations.query.filter_by(id_user=user.id)
    donations_serialize=list(map(lambda donation : donation.serialize(), donations))
    return jsonify(donations_serialize), 200

@api.route('/donaciones', methods=['POST'])
@jwt_required()
def post_donations():
    email = get_jwt_identity()
    user=User.query.filter_by(email=email).first()
    if user is None: 
        raise APIException("No existe el usuario")
    if user.role == 2:
        raise APIException("No es donador")
    body=request.get_json()
    if "id_projects" not in body:
        raise APIException("Debes elegir un proyecto")
    if "amount_donated" not in body:
        raise APIException("Debes colocar un monto")

    add_donation=Donations(id_projects=body['id_projects'], amount_donated=body['amount_donated'], id_user=user.id)
    db.session.add(add_donation)
    db.session.commit()
    return jsonify(add_donation.serialize()), 200