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

@api.route('/user', methods=['POST'])
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