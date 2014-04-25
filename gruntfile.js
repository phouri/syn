/**
 * Created by pinha_000 on 4/22/14.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './client/modules/**/*.js',
                dest: './client/build/js/<%= pkg.name %>.min.js'
            }
        },
        compass: {
            dist: {
                options: {
                    config: './client/config.rb'
                },
                sassDir: './client/sass',
                cssDir: './client/build/css'
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass', 'autoprefixer']
            },
            js: {
                files: './client/modules/**/*.js',
                tasks: ['uglify']
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'client/build/css/app.css': 'client/build/css/app.css'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');


    // Default task(s).
    grunt.registerTask('default', ['uglify', 'compass', 'autoprefixer', 'watch']);

};