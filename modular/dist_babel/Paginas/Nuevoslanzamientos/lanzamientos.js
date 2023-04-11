
import '../Nuevoslanzamientos/styleshistoria.sass';
import '../Nuevoslanzamientos/stylesnuevos.css';

function animaciones() {
    let flecha = document.getElementById("flecha-giratoria");

    const flechaSpinning = [{ transform: "rotate(0) scale(1)" }, { transform: "rotate(360deg) scale(0)" }];

    const flechaTiming = {
        duration: 2000,
        iterations: 1
    };

    flecha.addEventListener("click", () => {
        flecha.animate(flechaSpinning, flechaTiming);
    });

    document.body.appendChild(flecha);
}
animaciones();