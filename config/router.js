var teacher = require('./../controllers/teacher');

module.exports = function(router){
	router.route('/teachers')
		.get(teacher.view)
		.post(teacher.add)
		.put(teacher.update)
		.delete(teacher.del)
	return router;

};