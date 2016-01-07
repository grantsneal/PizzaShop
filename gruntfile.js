module.exports = function(grunt){
  grunt.initConfig({
    jshint:{
      sll: ["./public/js/**/*.js"],
      options:{
        unused: true
      }
    }
  });

  // common grunt task library
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerInitTask("default", ["jshint"]);

}