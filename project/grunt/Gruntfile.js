module.exports = function(grunt){

    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    // Project configuration.
    grunt.initConfig({
        concat: {
        options: {
            separator: '\n',
            sourceMap: true,
            banner:"/*CSS test banner on "+currentdate+"*/\n"
        },
        css: {
            src: [
                '../css/**/*.css'
            ],
            dest: '../../htdocs/css/app.css',
        },
        },
        watch: {
            css: {
              files: ['../css/**/*.css'],
              tasks: ['concat'],
              options: {
                spawn: false,
              },
            },
          },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat','watch']);



};

