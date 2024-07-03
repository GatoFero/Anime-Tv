$(document).ready(function(){
    const secuenciaPortadas = ['./assets/muestras/2e7bda4ba44aa751944234541f49b790.jpe',
    './assets/muestras/5e7f533c3b4f46244ca228af62e83dfa.jpe','./assets/muestras/757bae5a21039bac6ebace5de9affcd8.jpe','./assets/muestras/d458b9695157881b8b257226a2f68bb3.jpe',
    './assets/muestras/f7dfe109de592c6dd9a78dc75ec1965b.jpe','./assets/muestras/f446d7a2a155c6120742978fb528fb82.jpe'];

    const secuenciaResumenes = [
        {
            titulo: 'Tuskimichi: Moonlit Fantasy',
            resumen: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo a fuga vero veniam temporibus culpa repudiandae in assumenda accusantium fugit.',
        },
        {
            titulo: 'Solo Leveling',
            resumen: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae placeat debitis cupiditate voluptates. Praesentium ipsum dolorum itaque delectus illum minus quidem nostrum quas, nesciunt, rem, consequuntur omnis laboriosam at quia.'
        },
        {
            titulo: 'One Piece',
            resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat voluptatem possimus id aperiam omnis aspernatur corrupti exercitationem cupiditate.'
        },
        {
            titulo: 'Mushuku Tensei',
            resumen: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse hic eum excepturi quos, reprehenderit exercitationem debitis officia dolorem harum neque veniam.'
        },
        {
            titulo: 'Mashle',
            resumen: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae placeat debitis cupiditate voluptates. Praesentium ipsum dolorum itaque delectus illum minus quidem nostrum quas, nesciunt, rem, consequuntur omnis laboriosam at quia.'
        },
        {
            titulo: 'Frieren',
            resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat voluptatem possimus id aperiam omnis aspernatur corrupti exercitationem cupiditate.'
        }
    ];

    let contadorPortada = 0;

    function mostrarSiguienteImagen() {
        $('#contenedorPortada').html(`<img src="${secuenciaPortadas[contadorPortada]}" alt="">`);
        $('#contenedorResumen').html(`<h1>${secuenciaResumenes[contadorPortada].titulo}</h1><h2>Capitulos 13</h2><p>${secuenciaResumenes[contadorPortada].resumen}</p><a href="" class="presentacion-ver"><i class="fa-solid fa-play"></i>Ver Ahora</a>`)
        contadorPortada = (contadorPortada + 1) % secuenciaPortadas.length;
    }
    mostrarSiguienteImagen();
    let intervalo = setInterval(mostrarSiguienteImagen, 3500);
})
var puerta = false;
function menuMobile(){
    puerta? (puerta = false, $('.opciones-mobile').css('transform', 'translateX(100%)'), $('.nav-mobile').css('opacity', '1')) : (puerta = true, $('.opciones-mobile').css('transform', 'translateX(0%)'), $('.nav-mobile').css('opacity', '0'));
}