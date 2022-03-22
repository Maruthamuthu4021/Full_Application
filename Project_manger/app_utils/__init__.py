from flask import Blueprint, jsonify, request

from . import utils

player_api = Blueprint('player_api', __name__)


@player_api.route("/insert", methods=['POST'])
def player_run_insert():
    details=request.get_json()
    utils.bat_insert(details['player_name'],details['run_consume'],details['ball_consume'])
    print(details)
    return jsonify({'status':details})
