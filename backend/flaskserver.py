
from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from functools import wraps
import pickle
import numpy as np
# FILENAME = 'model.bin'


def randomize_classification():
    return np.random.randint(0, 2)


# with open(FILENAME, 'rb') as f:
#     model = pickle.load(f)

rooms_dict = {
    'Entire home/apt': 0,
    'Private room': 1,
    'Shared room': 2
}

neighbourhood_group_dict = {
    'Brooklyn': 0,
    'Manhattan': 1,
    'Queens': 2,
    'Staten Island': 3,
    'Bronx': 4
}

# these keys need to be in the same order of the features in each sample
keys = ['min_nights', 'price', 'adresslat', 'adresslong', 'neighbourhood_group', 'room_type']

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'reactloginreg'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/reactloginreg'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)


CORS(app)

@app.route('/users/register', methods=["POST"])
def register():
    users = mongo.db.users
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    user_id = users.insert({
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'password': password,
        'created': created
    })

    new_user = users.find_one({'_id': user_id})

    result = {'email': new_user['email'] + ' registered'}

    return jsonify({'result' : result})

@app.route('/users/login', methods=['POST'])
def login():
    users = mongo.db.users
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'email': email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'first_name': response['first_name'],
                'last_name': response['last_name'],
                'email': response['email']
            })
            result = jsonify({'token':access_token})
        else:
            result = jsonify({"error":"Invalid username and password"})
    else:
        result = jsonify({"result":"No results found"})
    return result

@app.route("/calculator" , methods=["POST"])
def prediction():
    data_dict = request.json

    X = []
    for key in keys:
        value = data_dict[key]

        if key == 'room_type':
            value = rooms_dict[value]

        if key == 'neighbourhood_group':
            value == neighbourhood_group_dict[value]

        X.append(value)

    classification = randomize_classification()  # remove this line once line below is uncommented
    # prediction = model.predict(X)

    return jsonify(classification)

if __name__ == '__main__':
    app.run(debug=True)



