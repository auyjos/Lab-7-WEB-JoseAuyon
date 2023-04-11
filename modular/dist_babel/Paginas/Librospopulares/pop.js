import '../Librospopulares/stylespop.sass';

crearPag();

function crearPag() {
  let h1 = document.createElement("h1");
  let divLibrospopulares = document.createElement("div");
  let p = document.createElement('p');
  let linkHome = document.createElement('a');

  linkHome.href = '/modular/dist/index.html';
  linkHome.innerHTML = 'Home';
  linkHome.style.fontSize = 'large';

  document.body.appendChild(linkHome);

  h1.innerHTML = 'Libros populares';
  p.innerHTML = 'Estos son los libros más populares del momento';

  document.body.appendChild(divLibrospopulares);
  divLibrospopulares.appendChild(h1);
  divLibrospopulares.appendChild(p);

  let divListaLibros = document.createElement('div');

  let donquijote = document.createElement('p');
  let quijoteimagen = document.createElement('img');

  let historiadosciudades = document.createElement('p');
  let historiaImagen = document.createElement('img');

  let senorAnillos = document.createElement('p');
  let senorImagen = document.createElement('img');

  donquijote.innerHTML = 'Don Quijote de la Mancha - Miguel Cervantes';
  quijoteimagen.src = 'https://www.elejandria.com/covers/Don_Quijote_de_la_Mancha-Cervantes_Miguel-lg.png';

  historiadosciudades.innerHTML = ' Historia de dos ciudades - Charles Dickens';
  historiaImagen.src = 'https://covers.alibrate.com/b/59872e9ccba2bce50c1cca51/2b944296-585b-4f69-9b6d-720a6a1dc6af/share';

  senorAnillos.innerHTML = 'El señor de los anillos - J.R.R Tolkien';
  senorImagen.src = "https://www.piedrasanta.com/web/image/product.product/72055/image_1024/%5B2505379%5D%20COMUNIDAD%20DEL%20ANILLO%2C%20LA%201%20EL%20SE%C3%91OR%20DE%20LOS%20ANILLOS%20%7C%20BOOKET?unique=a6e3955";

  document.body.appendChild(divListaLibros);
  document.body.appendChild(donquijote);
  document.body.appendChild(quijoteimagen);
  document.body.appendChild(senorAnillos);
  document.body.appendChild(senorImagen);
  document.body.appendChild(historiadosciudades);
  document.body.appendChild(historiaImagen);

  const imagenSpinning = [{ transform: "rotate(0) scale(1)" }, { transform: "rotate(360deg) scale(0)" }];

  const imagenTiming = {
    duration: 2000,
    iterations: 1
  };

  senorImagen.addEventListener("click", () => {
    senorImagen.animate(imagenSpinning, imagenTiming);
  });
  quijoteimagen.addEventListener("click", () => {
    quijoteimagen.animate(imagenSpinning, imagenTiming);
  });
  historiaImagen.addEventListener("click", () => {
    historiaImagen.animate(imagenSpinning, imagenTiming);
  });

  divListaLibros.appendChild(donquijote);
  divListaLibros.appendChild(quijoteimagen);
  divListaLibros.appendChild(senorAnillos);
  divListaLibros.appendChild(senorImagen);
  divListaLibros.appendChild(historiadosciudades);
  divListaLibros.appendChild(historiaImagen);
};