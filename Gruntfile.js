module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            build: {
                options: {
                    appDir: './dev',
                    baseUrl: 'js',
                    dir: './build',
                    optimizeCss: 'standard.keepComments.keepLines',
                    paths: {
                        'jquery': 'libs/jquery-1.8.2',
                        'a': 'utils/a',
                        'b': 'utils/b',
                        'c': 'utils/c',
                        'd': 'utils/d',
                        'e': 'utils/e',
                        'de': 'app/de'
                    },
                    shim: {

                    },
                    modules: [{
                        name: 'de'
                    }]
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './dev/js/**/*.js',
                dest: './build/js/all.min.js'
            }
        },
        less: {
            dist: {
                options: {
                    paths: './dev/styles/',
                    sourceMap: true,
                    sourceMapFilename: 'lala.map'
                },
                files: [{
                    expand: true,
                    cwd: './dev/styles/app/',
                    src: ['*.less'],
                    dest: './dev/styles/app/',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: './dev/styles/less/',
                    src: ['*.less'],
                    dest: './dev/styles/css/',
                    ext: '.css'
                }]
            }
        },
        csscomb: {
            options: {
                config: './dev/styles/less/csscomb.json'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: './dev/styles/css/',
                    src: ['*.css'],
                    dest: './dev/styles/css/',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            build: {
                expand: true,
                cwd: './dev/styles/app/',
                src: '*.css',
                dest: './dev/styles/app/',
                ext: '.min.css'
            }
        },
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 4
                },
                files: [{
                    expand: true,
                    cwd: './dev/images/',
                    src: ['**/*.{jpg,png,gif}'],
                    dest: './build/images/'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-csscomb'); // css属性指定
    grunt.loadNpmTasks('grunt-contrib-concat'); //文件合并
    grunt.loadNpmTasks('grunt-contrib-jshint'); //js检查
    grunt.loadNpmTasks('grunt-contrib-less'); // scss
    grunt.loadNpmTasks('grunt-contrib-uglify'); //文件混淆
    grunt.loadNpmTasks('grunt-contrib-cssmin'); //css压缩
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); //html压缩
    grunt.loadNpmTasks('grunt-contrib-imagemin'); //图像压缩
    grunt.loadNpmTasks('grunt-contrib-requirejs'); //requirejs优化


    // 注册任务
    grunt.registerTask('default', ['requirejs', 'uglify', 'less', 'csscomb', 'cssmin', 'imagemin']);
};