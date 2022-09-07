from flask_app import app
from flask_app.models.user import User
from flask import render_template, request, jsonify, session
from flask_bcrypt import Bcrypt


BCRYPT = Bcrypt(app)


@app.route('/')
def r_login_and_registration():
    return render_template('login_registration.html')


@app.route('/create/user', methods=['POST'])
def f_create_user():
    pw_hash = BCRYPT.generate_password_hash(request.form.get('password'))
    data = {
        'f_name' : request.form.get('f_name'),
        'l_name' : request.form.get('l_name'),
        'email' : request.form.get('email'),
        'password' : pw_hash
    }

    session['user_id'] = User.create_user(data)
    return jsonify(message='Form succesffuly recieved.')
