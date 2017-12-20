function armarItemSlider (selectorContainer,src) {
  // <div class="swiper-slide"><img src="../images/01-video-cerramientos-movil.jpg" alt="img"></div>
    var html = "";
    html += '<div class="swiper-slide"><img src="' + src + '" alt="img"></div>';

    $(selectorContainer).html( $(selectorContainer).html() + html);
}

function armarSlider () {
  for (var i = 0; i < itemsSlider.length; i++) {
    armarItemSlider('.swiper-wrapper',itemsSlider[i]);
  };
}

function armarItemMenu (selectorContainer, texto, href) {
    // <div>
    // <a href = "index.html">
    // </a>
    // <p>HOME</p>
    // </div>
    var html = "";
    html += '<div>';
    html += '<a href = "' + href + '">';
    html += '<p>' + texto + '</p>';
    html += '<a>';
    html += '</div>';

    $(selectorContainer).html( $(selectorContainer).html() + html);
}

function armarMenu () {
  for (var i = 0; i < itemsMenues.length; i++) {
    armarItemMenu('.menu-items',itemsMenues[i][0],itemsMenues[i][1]);
  };
}

function crearImagen (selectorContainer, src, caption) {
  //<div class="imagen imagen-100">
  //<img src="../images/a2-cerramintos.jpg" alt="nuestras imagenes"/>
  //<p>01</p>
  //</div>

    var html = "";
    html += '<div class="imagen imagen-100 ' + (caption > verMas ? ' oculto' : '') +'">';
    html += '<img src="' + src + '" alt="nuestras imagenes"/>';
    html += '<p>'  + (parseInt(caption) < 10 ? '0': '') + (caption != undefined ? caption : '') + '</p>';
    html += '</div>';

    $(selectorContainer).html( $(selectorContainer).html() + html);
}

function crearImagenes () {
  for (var i = 0; i < imagenes.length; i++) {
    crearImagen('.seccion-imagenes',imagenes[i],i+1);
  };
}

