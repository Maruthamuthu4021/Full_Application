from flask import Blueprint, jsonify, request, Flask, render_template

from Project_manger.static_file_load import static

app = Flask(__name__)
app.register_blueprint(static)


@app.route("/")
def home():
    return app.send_static_file("home.html")


if __name__ == '__main__':
    app.run(host='localhost', port=4021)
