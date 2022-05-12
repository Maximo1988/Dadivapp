"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_bcrypt import Bcrypt

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from datetime import timedelta

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

bcrypt = Bcrypt(app)

app.config["JWT_SECRET_KEY"] = "4geeks"  # Change this!
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

@app.route('/api/user', methods=['POST'])
def new_user():
    if request.json is None:
        raise APIException("Se debe de enviar informacion en el body del request", status_code=400)

    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    email = request.json.get("email", None)
    address = request.json.get("address", None)
    password = request.json.get("password", None)
    phone = request.json.get("phone", None)
    document = request.json.get("document", None)
    country = request.json.get("country", None)
    role = request.json.get("role", None)
    paypal_link = request.json.get("paypal_link", None)

    if first_name is None:
        raise APIException("Falta ingresar el nombre", status_code=400)
    if last_name is None:
        raise APIException("Falta ingresar el apellido", status_code=400)
    if email is None:
        raise APIException("Falta ingresar el email", status_code=400)
    if address is None:
        raise APIException("Falta ingresar la dirección", status_code=400)
    if password is None:
        raise APIException("Falta ingresar la contraseña", status_code=400)
    if phone is None:
        raise APIException("Falta ingresar el teléfono", status_code=400)
    if document is None:
        raise APIException("Falta ingresar el numero del documento", status_code=400)
    if country is None:
        raise APIException("Falta ingresar el país", status_code=400)
    if role is None:
        raise APIException("Falta ingresar el rol", status_code=400)
    if paypal_link is None:
        raise APIException("Falta ingresar el link de paypal", status_code=400)
    user2=User.query.filter_by(email=email.lower()).first()
    if user2 != None:
        raise APIException("El email ya existe")
    users=User.query.filter_by(paypal_link=paypal_link).first()
    if users != None:
        raise APIException("El link de paypal ya existe")
    users1=User.query.filter_by(phone=phone).first()
    if users1 != None:
        raise APIException("El telefono ya existe, intenta agregar el codigo internacional")


    pw_hash = bcrypt.generate_password_hash(password).decode("utf-8")
    

    new_users= User(first_name=first_name, last_name=last_name, email=email.lower(), address=address, password=pw_hash,
                    phone=phone, document=document, country=country, role=role, paypal_link=paypal_link, is_active=True)
    db.session.add(new_users)
    db.session.commit()
    return jsonify(new_users.serialize()), 200

@app.route('/api/login',methods=['POST'])
def login():
    if request.json is None:
        raise APIException("Tienes que enviar informacion en el body",status_code=400)
    email= request.json.get("email",None)
    password= request.json.get("password",None)
    if email is None:
        raise APIException("Tienes que enviar el email de la persona",status_code=400)
    if password is None:
        raise APIException("Tienes que enviar la contraseña del correo",status_code=400)
    user=User.query.filter_by(email=email).first()
    if user is None:
        raise APIException("Este usuario no existe",status_code=400)
    pw_hash= user.password
    is_valid_user= bcrypt.check_password_hash(pw_hash, password) # returns True
    if is_valid_user is False:
        raise APIException("El usuario o la contraseña no son correctas",status_code=400)
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token, user=user.serialize())


# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
