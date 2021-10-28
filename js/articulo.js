$(document).ready(function(){
    if(window.location.href.indexOf("index")>-1){
        var art = [
                   {
                        titulo:"Aguas Calientes",
                        resumen:"Aguascalientes es un estado en el centro-norte de México. Es conocido por sus viñedos y aguas termales, como los Baños Termales de Ojocaliente, cerca de la capital del estado, Aguascalientes.",
                        liga:"https://www.lugaresturisticosenmexico.com/turismo-en-aguascalientes/"

                    },

                    {

                        titulo:"Baja California",

                        resumen:"Baja California es un estado Mexicano en la Península de Baja California que limita con el estado de California de Estados Unidos. El paisaje se extiende por montañas y playas en el océano Pacífico y el golfo de California.",

                        liga:"https://www.lugaresturisticosenmexico.com/turismo-en-baja-california/"

                    }

        ];

    /*Pasar la información a index */

    art.forEach((item) => {

        var arts = `<article class="arts">

                        <h2>${item.titulo}</h2>

                        <p>${item.resumen}</p>

                        <a href="${item.liga}" class="button-more">Visitar la página</a>

                    </article>`;

                    console.log(arts);

        $("#artic").append(arts);

      });

    }

});