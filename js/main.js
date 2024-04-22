function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play(); // Reproducir sonido
}

// Nos traemos todos los elementos con la clase 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla'); // Obtener lista de elementos con la clase 'tecla'

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    // Obtener elemento de la lista
    const tecla = listaDeTeclas[contador];

    // Obtener el nombre del instrumento
    const instrumento = tecla.classList[1];

    // Como el nombre del instrumento ya esta, solo necesitamos el #sonido_ + instrumento para que funcione el template string
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    // Asignar función al evento click
    tecla.onclick = function() {
        playSonido(idAudio);
    };

}