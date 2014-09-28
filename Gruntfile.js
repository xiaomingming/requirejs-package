/*global module*/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        csscomb: {
            options: {
                config: './dev/styles/less/csscomb.json'
            },
            files: {
                expand: true,
                cwd: './dev/styles/',
                src: ['**/*.css'],
                dest: './dev/styles/',
                ext: '.css'
            }
        },
        requirejs: {
            build: {
                options: {
                    appDir: './dev',
                    baseUrl: 'js',
                    dir: './build',
                    /*optimize: 'uglify2',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,*/
                    // useSourceUrl: true,
                    optimizeCss: 'standard',
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
    grunt.loadNpmTasks('grunt-contrib-jshint'); //js检查
    grunt.loadNpmTasks('grunt-contrib-imagemin'); //图像压缩
    grunt.loadNpmTasks('grunt-contrib-requirejs'); //requirejs优化


    // 注册任务
    grunt.registerTask('default', ['csscomb', 'requirejs', 'imagemin']);
};