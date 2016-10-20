$(document).ready(function() {
    var sample = 'digraph g { antonio -> barbara [style=dashed]; Banco -> Casa [color=red]; Banco -> barbara}';

    var options = {
      format: 'svg'
      // format: 'png-image-element'
    }

    var image = Viz(sample, options);
    var main = document.getElementById('main');

    main.innerHTML = image;        // SVG
    main.appendChild(image);    // PNG
});  
