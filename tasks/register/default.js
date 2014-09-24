module.exports = function (grunt) {
	grunt.registerTask('default', [
		'bower:dev',
		'compileAssets',
		'linkAssets',
		'watch'
	]);
};
