from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
import datetime

db = SQLAlchemy()

class Role(db.Model):
    __tablename__='Role'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'<Role {self.id}, name={self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }

class User(db.Model):
    __tablename__='User'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_name= db.Column(db.String(80),nullable=False )
    last_name= db.Column(db.String(80),nullable=False )
    address= db.Column(db.String(80),nullable=False)
    password= db.Column(db.String(64), unique=False, nullable=False)
    phone= db.Column(db.String(20), unique=True, nullable=False)
    document= db.Column(db.String(80), nullable=False)
    country= db.Column(db.String(30), nullable=False)
    role= db.Column(db.Integer,db.ForeignKey('Role.id'), nullable=False)
    role_relation= relationship(Role, primaryjoin=role==Role.id)
    paypal_link= db.Column(db.String(120),unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    
    def __repr__(self):
        return f'<User {self.id}, email={self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "address": self.address,
            "country":self.country,
            "document":self.document,
            "role": self.role,
            "paypal_link": self.paypal_link,
            "is_active": self.is_active
            # do not serialize the password, its a security breach
        }


class Projects(db.Model):
    __tablename__='Projects'
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(120), nullable=False)
    date_start= db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow() )
    date_finish= db.Column(db.DateTime(timezone=True), nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    id_beneficiary= db.Column(db.Integer,db.ForeignKey('User.id'), nullable=False)
    id_beneficiary_relation= relationship(User,primaryjoin=id_beneficiary==User.id)
    description= db.Column(db.String(300), nullable=False)
    donative_amount= db.Column(db.String(30), nullable=False)

    def __repr__(self):
        return f'<Projects {self.id} name {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "date_start": self.date_start,
            "date_finish": self.date_finish,
            "id_beneficiary": self.id_beneficiary,
            "donative_amount": self.donative_amount

            # do not serialize the password, its a security breach
        }
class Donations(db.Model):
    __tablename__='Donations'
    id = db.Column(db.Integer, primary_key=True)
    id_projects= db.Column(db.Integer,db.ForeignKey('Projects.id'),nullable=False )
    projects_relations= relationship(Projects, primaryjoin=id_projects==Projects.id)
    id_user= db.Column(db.Integer,db.ForeignKey('User.id'),nullable=False)
    user_relations= relationship(User,primaryjoin=id_user==User.id)
    amount_donated= db.Column(db.Integer,  nullable=False)
    date_start= db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow() )
    
    def __repr__(self):
        return f'<Donations {self.id} name {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_projects": self.id_projects,
            "id_user": self.id_user,
            "amount_donated": self.amount_donated,
            "date_start": self.date_start,
           

            # do not serialize the password, its a security breach
        }        