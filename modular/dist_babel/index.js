
import { crearPagIndex } from '../src/appIndex.js';
import { crearPag } from '../src/Paginas/Librospopulares/pop.js';
import '../src/Paginas/Librospopulares/stylespop.sass';
import '../src/Paginas/Nuevoslanzamientos/styleshistoria.sass';
import '../src/Paginas/Nuevoslanzamientos/stylesnuevos.css';
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap';

// Scripts - App
import '../src/Paginas/Librospopulares/pop.js';
import '../src/Paginas/Nuevoslanzamientos/lanzamientos.js';
import '../src/appIndex.js';
import '../src/extra.js';
import '../src/Paginas/Nuevoslanzamientos/historia.js';

import '../src/index.css';
window.onload = function () {
  crearPagIndex();
};