$(document).ready(function() {
    var sample = 'digraph g { a -> b [style=dashed]; B<-C [color=red] }';

    var options = {
      format: 'svg'
      // format: 'png-image-element'
    }

    var image = Viz(sample, options);
    var main = document.getElementById('main');

    main.innerHTML = image;        // SVG
    main.appendChild(image);    // PNG
});  
