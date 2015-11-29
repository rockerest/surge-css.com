module.exports = function( grunt ){
    'use strict';

    grunt.registerTask( 'setup', 'Get ready for a build', function(){
        grunt.task.run( [
            'copy',
            'rename'
        ] );
    } );
};
