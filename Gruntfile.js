'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		less: {
		  development: {
		    files: {
		      "dist/grid.css": "grid.less"
		    }
		  }
		},
		watch: {
		  dist: {
		    files: ['grid.less'],
		    tasks: ['less']
		  }
		},
		jshint: {
			all: ['Gruntfile.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less']);
};	
