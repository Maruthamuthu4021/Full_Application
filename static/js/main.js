$(document).ready(() => {
    Handlebars.registerHelper('json', (context) => {
        return JSON.stringify(context);
    });
      $(".home_page").empty().html(Handlebars.templates.home_page());
    })