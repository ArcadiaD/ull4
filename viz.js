$(document).ready(function() {
    var sample = 'digraph g { antonio -> bebe [style=dashed]; Bar -> Car [color=red]; bebe <- Car [style=dashed] }';

    var options = {
      format: 'svg'
      // format: 'png-image-element'
    }

    var image = Viz(sample, options);
    var main = document.getElementById('main');

    main.innerHTML = image;        // SVG
    main.appendChild(image);    // PNG
});  
