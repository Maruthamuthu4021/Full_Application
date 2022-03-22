cric={}


cric.insert=()=>{
details={}
details['player_name']=$("#player_name").val()
details['run_consume']=$("#player_run").val();
details['ball_consume']=$("#player_ball").val();
console.log("insert",details)
manager.insert(details)
manager.init(() => {
dic={}
dic['properties']=manager.build_info
console.log("Dictionary => ",dic)
$(".show-full-socrecard").empty().html(Handlebars.templates.show_scorecard(dic));
});
}