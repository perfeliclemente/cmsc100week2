var teacher = require('./../controllers/teacher');
var student = require('./../controllers/student');

module.exports = function(router){
	router.route('/students')
		.get(student.find)
		.post(student.insert);

	router.route('/students/:id')
		.get(student.findOne)
		.put(student.update)
		.delete(student.remove);

	return router;

};