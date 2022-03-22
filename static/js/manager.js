const manager={}
manager.build_info = []

manager.init = (callBack) => {
    manager.load_builds((_) => {
        manager.build_info = _
        callBack()
    })
}

manager.get_json_and_callback = function(url, callBack = () => {}) {
    $.getJSON(url, function(data, _){ callBack(data) })
}
manager.load_builds = function(callBack = () => {}) {
    manager.get_json_and_callback('/players', callBack)
}

manager.insert=(properties)=>{

  $.ajax({
        url: '/player/insert',
        type: 'POST',
        data: JSON.stringify(properties),
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        success: (response) => {
            console.log('updated',response)
        }
    });
}