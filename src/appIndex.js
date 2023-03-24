
  
  function crearPagIndex() {
    let h1 = document.createElement("h1");
    let divLibrospopulares = document.createElement("div");
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3')
    let linklibrospop = document.createElement('a')
    let imagenLinkPop = document.createElement('img');
    let imagenLinkNuevos = document.createElement('img');
    let imagenLinkExtra = document.createElement('img');

  
    h1.innerHTML = '¡Bienvenidos al club de lectura!'
    h2.innerHTML = 'En esta página podrás encontrar información acerca de los libros más populares del momento al igual que los nuevos lanzamientos'
    h3.innerHTML = 'Libros populares';
    linklibrospop.href = 'libros-populares.html'
    linklibrospop.innerHTML = '¡Ir a libros populares!'
    imagenLinkPop.src = 'https://www.elejandria.com/covers/Don_Quijote_de_la_Mancha-Cervantes_Miguel-lg.png'
    let divImagenPop = document.createElement('div')
  
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
    document.body.appendChild(linklibrospop)
    document.body.appendChild(divLibrospopulares)
    document.body.appendChild(divImagenPop)
    divLibrospopulares.appendChild(h1)
    divLibrospopulares.appendChild(h2)
    divLibrospopulares.appendChild(h3)
    divLibrospopulares.appendChild(linklibrospop)
    divImagenPop.appendChild(imagenLinkPop)
  
    let lanzamientos = document.createElement('h2');
    let lanzamientoslink = document.createElement('a');
    let lanzamientosDiv = document.createElement('div')
    let lanzamientosImagen = document.createElement('img')
    let divImagenLanzamientos = document.createElement('div')

    lanzamientosImagen.src = 'https://assets.penguinrandomhouse.com/wp-content/uploads/2022/09/13161254/Site_CS-2023-General_1200x628.jpg'
    
  lanzamientosImagen.style.width = '400px'
  lanzamientosImagen.style.height = '200px'

    document.body.appendChild(lanzamientosDiv);
    document.body.appendChild(divImagenLanzamientos)
    lanzamientosDiv.appendChild(lanzamientos)
    lanzamientosDiv.appendChild(lanzamientoslink);
    divImagenLanzamientos.appendChild(lanzamientosImagen)
  
  
  
    lanzamientos.innerHTML = 'Nuevos Lanzamientos';
    lanzamientoslink.href = 'nuevos-lanzamientos.html'
    lanzamientoslink.innerHTML = '¡Ir a nuevos lanzamientos!'
  
    let extra = document.createElement('h2')
    let extralink = document.createElement('a');
    let divextra = document.createElement('div');
    let extraImagen = document.createElement('img')
    let divExtraImagen = document.createElement('div')
    extra.innerHTML = 'Extra'
    extralink.href = 'extra.html'
    extralink.innerHTML = '¡Ir a extra!'
    extraImagen.src= 'https://previews.123rf.com/images/roxanabalint/roxanabalint1309/roxanabalint130900100/22150521-grunge-extra-sello-de-goma-en-blanco-ilustraci%C3%B3n-vectorial.jpg'
    extraImagen.style.width = '400px';
    extraImagen.style.height = '200px';
    document.body.appendChild(divextra);
    document.body.appendChild(divExtraImagen)
    divextra.appendChild(extra)
    divextra.appendChild(extralink)
    divExtraImagen.appendChild(extraImagen)

  };
  crearPagIndex()