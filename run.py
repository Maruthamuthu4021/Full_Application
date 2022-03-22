from flask import Flask, jsonify

from Project_manger.app_utils import utils, player_api
from Project_manger.app_utils.static_file_load import static

app = Flask(__name__)
app.register_blueprint(static)


@app.route("/")
def home():
    return app.send_static_file("home.html")


@app.route("/players")
def get_batsman_info():
    print((utils.get_bat_info()))
    return jsonify(utils.get_bat_info())


if __name__ == '__main__':
    app.register_blueprint(player_api, url_prefix="/player")
    app.run(host='localhost', port=4021)
