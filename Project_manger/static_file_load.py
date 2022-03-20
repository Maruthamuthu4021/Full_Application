from flask import Blueprint, send_from_directory

static = Blueprint('static', __name__)


@static.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('static/js', path)


@static.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('static/css', path)


@static.route('/images/<path:path>')
def send_image(path):
    return send_from_directory('static/images', path)

