from flask_app import app


@app.route('/dashboard')
def dashboard():
    return 'Test'