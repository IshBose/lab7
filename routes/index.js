var projects = require('../projects.json');


/*
 * GET home page.
 */

exports.view = function(request, response){
  	response.render('index', projects);
	data['viewAlt'] = false;
	response.render('index',data);
	  
};

exports.viewAlt = function(request,response){
	data['viewAlt'] = true;
	response.render('index',data);
}