import configparser


def read_config(path):
    config = configparser.ConfigParser()
    config.read(path)
    return config


def parse_config_arr(config):
    ini_list = []
    for section in config.sections():
        ini_dict = {}
        ini_dict['name']=section
        for (key, val) in config.items(section):
            ini_dict[key] = val
        ini_list.append(ini_dict)

    return ini_list


def write_config(config, path):
    with open(path, 'w') as config_file:
        config.write(config_file, space_around_delimiters=False)

