from flask_app.config.mysqlconnection import connectToMySQL


class User:
    def __init__(self, data:dict) -> None:
        self.f_name = data['f_name']
        self.l_name = data['l_name']
        self.email = data['email']
        self.password = data['password']
        # self.created_at = data['created_at']
        # self.updated_at = data['updated_at']

    @classmethod
    def create_user(cls, data:dict) -> object:
        # query = "INSERT INTO "
        pass