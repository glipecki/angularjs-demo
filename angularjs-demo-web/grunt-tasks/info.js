module.exports = function(grunt) {
  grunt.registerTask('info', 'Prints project info', function(arg) {
    grunt.log.writeln('');
    grunt.log.writeln("              _____");
    grunt.log.writeln("           .-'     '-.");
    grunt.log.writeln("         .'           `.");
    grunt.log.writeln("        /   O      O    \\");
    grunt.log.writeln("       :                 :");
    grunt.log.writeln("       |                 |");
    grunt.log.writeln("       :   \\        /    :");
    grunt.log.writeln("        \\   `.____.'    /");
    grunt.log.writeln("         `.           .'");
    grunt.log.writeln("           `-._____.-'");
    grunt.log.writeln('');
    grunt.log.writeln('');
    grunt.log.writeln('AngularJS Demo Application');
    grunt.log.writeln('');
    grunt.log.writeln('Available tasks:');
    grunt.log.writeln('- info - Screen you are reading now. Default task.');
  });
};
