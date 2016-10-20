$(document).ready(function() {
        
        
        var sample = 'A->C: Uno \n B->C: Dos';

        var diagram = Diagram.parse(sample);

        diagram.drawSVG('diagram', {
            theme: 'hand'    // o 'simple'
        });

        
        
    });
