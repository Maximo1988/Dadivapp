"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#create a donation

@api.route('/user', methods=['GET'])
def get_user():
    body=request.get_json()
    if body is None:
        raise APIException("Tienes que enviar información en el body",status_code=400)
    if body['email'] is None:
        raise APIException("Tienes que enviar el correo ")
    user=User.query.filter_by(email=body['email']).first()
    if user is None :
        raise APIException("El usuario no existe")
    return jsonify(user.serialize()),200


#actualizar un usuario
@api.route('/user', methods=['PUT'])
def update_user ():
    body= request.get_json()
    if  body is None :
        raise APIException("tienes que enviar informacion en el body",status_code=400)
    if 'current_email' not in body :
        raise APIException("tienes que enviar un correo del usuario que deseas actualizar actualizar",status_code=400)    
    user=User.query.filter_by(email=body['current_email']).first()
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

    db.session.commit()
    return jsonify(user.serialize()),200

#eliminar un usuario
@api.route('/user', methods=['DELETE'])
def delete_user():
    body= request.get_json()
    if body is None:
        raise APIException("Tines que enviar informacion en el body",status_code=400)
    if 'email' not in body:
        raise APIException("Tienes que enviar el correo del usuario que deseas eliminar",status_code=400)
    user=User.query.filter_by(email=body['email']).first()
    if user is None:
        raise APIException("El usuario no se encontró",status_code=400)
    user.is_active=False
    db.session.commit()
    return jsonify(user.serialize()),200
