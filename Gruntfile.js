'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		less: {
		  development: {
		    files: {
		      "dist/grid.css": "grid.less"
		    }
		  }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['less']);
};	
