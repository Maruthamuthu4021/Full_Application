var app={}
app.football=()=>{

console.log("FOOTBALL")
}
app.cricket=()=>{
$(".show-full-socrecard").empty().html(Handlebars.templates.show_scorecard());
 $(".socrecard").empty().html(Handlebars.templates.input_scorecard());

}
app.athletic=()=>{
console.log("app.athletic()")
}
