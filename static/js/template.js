(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['empty'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "RAINA";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
     var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };
    return "<div class=\"tables-row\"><table class=\"score-table\"><caption>Batting</caption><tr><th>Batsman</th><th>Runs</th><th>Balls</th></tr><tr><td>Raina</td><td>57</td><td>44</td></tr><tr><td>Dhoni</td><td>57</td><td>40</td></tr></table><table class=\"score-table\"><caption>Score Board</caption><tr><th>Runs</th><th>Wicket</th></tr><tr><td>250</td><td>4</td></tr></table><table class=\"score-table\"><caption>Bowling</caption><tr><th>Bowler</th><th>Score</th><th>over</th></tr><tr><td>Starc</td><td>20</td><td>4.4</td></tr></table></div>";
},"useData":true});
templates['home_page'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "RAINA";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
     var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };
    return "<div id=\"app-prodect\"><div class=\"sports\"><h1>Football</h1><p>I am not a perfectionist, but I like to feel that things are done well. More important than that, I feel an endless need to learn, to improve, to evolve, not only to please the coach and the fans, but also to feel satisfied with myself. It is my conviction that here are no limits to learning, and that it can never stop, no matter what our age. ― Cristiano Ronaldo</p><button onclick=\"app.football()\" >CLICK</button></div><div class=\"sports\"><h1>Cricket</h1><p>Fit the difficulty to the skill level. All players are challenged but able to experience success.</p><button onclick=\"app.cricket()\">CLICK</button></div><div class=\"sports\"><h1>Athletic</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem eveniet non? Officiis molestiae illum doloribus in quae iusto similique. Eius tenetur consequuntur, dolor fugiat quaerat aut esse asperiores ea.</p><button onclick=\"app.athletic()\">CLICK</button></div></div>";
},"useData":true});
templates['input_scorecard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"input-scorecord\"><div id=\"tables-row\"><table><caption>Batting</caption><tr><th>Batsman</th><th>Runs</th><th colspan=\"2\">Balls</th></tr><tr><td><input type=\"text\" name=\"player-name\" id=\"player_name\" ></td><td><input type=\"text\" name=\"player-run\" id=\"player_run\" size=\"4\"></td><td><input type=\"text\" name=\"playe-ball\" id=\"player_ball\" size=\"4\"></td><td><button class=\"click-button\" onclick=\"cric.insert()\">CLICK</button></td></tr></table><table><caption>Score Board</caption><tr><th>Team name</th><th>Runs</th><th colspan=\"2\">Wicket</th></tr><tr><td><input type=\"text\" nam=\"team-name\" id=\"team_name\"></td><td><input type=\"text\" name=\"team_run\" id=\"team_run\" size=\"4\"></td><td><input type=\"text\" size=\"4\"></td><td><button class=\"click-button\">CLICK</button></td></tr></table><table><caption>Bowling</caption><tr><th>Bowler</th><th>Score</th><th colspan=\"2\">over</th></tr><tr><td><input type=\"text\"></td><td><input type=\"text\" name=\"\" id=\"\" size=\"4\"></td><td><input type=\"text\" size=\"4\"></td><td><button class=\"click-button\">CLICK</button></td></tr></table></div><div class=\"full-score\"><button class=\"final-button\">CLICK</button></div></div>";
},"useData":true});
templates['show_scorecard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined
        };
    console.log("data " ,depth0)
    return "                     <tr> <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":59,"column":58},"end":{"line":59,"column":65}}}) : helper)))
    + " </td> <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"runs") || (depth0 != null ? lookupProperty(depth0,"runs") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":59,"column":58},"end":{"line":59,"column":65}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"balls") || (depth0 != null ? lookupProperty(depth0,"balls") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":59,"column":58},"end":{"line":59,"column":65}}}) : helper)))
    + "</td> </tr>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };
    console.log("data 1==>" ,depth0)
    return "<div id=\"show-scorecord\"><div id=\"show-tables-row\"><table><caption>Batting</caption><tr><th>Batsman</th><th>Runs</th><th>Balls</th></tr>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":8},"end":{"line":65,"column":17}}})) != null ?stack1 : "")
    +"</table><table><caption>Score Board</caption><tr><th>Team name</th><th>Runs</th><th >Wicket</th></tr><tr></tr></table><table><caption>Bowling</caption><tr><th>Bowler</th><th>Score</th><th>over</th></tr><tr></tr></table></div><div class=\"show-full-score\"><button class=\"show-refresh-button\">CLICK</button></div></div>";
},"useData":true});
})();