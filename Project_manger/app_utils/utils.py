from .init_utils import read_config, write_config, parse_config_arr
from ..app_utils.constants import conf_dir


def bat_insert(player_name, runs, balls):
    config = read_config(conf_dir + 'batsman_info.ini')
    for item in config.sections():
        if item == player_name:
            print('already here')
            config.set(player_name, 'runs', runs)
            config.set(player_name, 'balls', balls)
            write_config(config, conf_dir + 'batsman_info.ini')
            return player_name + " added done"
    config.add_section(player_name)
    config.set(player_name, 'runs', runs)
    config.set(player_name, 'balls', balls)
    write_config(config, conf_dir + 'batsman_info.ini')
    return player_name + " added done"


def get_bat_info():
    config = read_config(conf_dir + 'batsman_info.ini')
    print('parse_config_arr ',config.sections())
    return parse_config_arr(config)
