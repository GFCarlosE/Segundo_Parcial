
$(document).ready(function () {

  var estados = [
    {
      nombre: "Aguascalientes",
      kilometros: 128.1,
      tiempoEstimado: "1 h 45 min",
      total: (128.1 * 150),
      img1: "imgCotizacion/1/1.jpg",
      img2: "imgCotizacion/1/2.jpg",
      im3: "imgCotizacion/1/3.jpg"
    },
    {
      nombre: "Baja California",
      kilometros: (1732),
      tiempoEstimado: "1 día y 3 horas",
      total: (1732 * 150),
      img1: "imgCotizacion/2/1.jpg",
      img2: "imgCotizacion/2/2.jpg",
      im3: "imgCotizacion/2/3.jpg"
    }
    ,
    {
      nombre: "Baja California Sur",
      kilometros: (1853),
      tiempoEstimado: "1 día y 4.5 horas",
      total: (1853 * 150),
      img1: "imgCotizacion/3/1.jpg",
      img2: "imgCotizacion/3/2.jpg",
      im3: "imgCotizacion/3/3.jpg"
    }
    ,
    {
      nombre: "Campeche",
      kilometros: (1497.1),
      tiempoEstimado: "18 h 44 min",
      total: (1497.1 * 150),
      img1: "imgCotizacion/4/1.jpg",
      img2: "imgCotizacion/4/2.png",
      im3: "imgCotizacion/4/3.jpg"
    }
    ,
    {
      nombre: "Chiapas",
      kilometros: (1191.8),
      tiempoEstimado: "14 h 38 min",
      total: (1191.8 * 150),
      img1: "imgCotizacion/5/1.jpg",
      img2: "imgCotizacion/5/2.jpg",
      im3: "imgCotizacion/5/3.jpg"
    }
    ,
    {
      nombre: "Chihuahua",
      kilometros: (1070.3),
      tiempoEstimado: "13 h 38 min",
      total: (1070.3 * 150),
      img1: "imgCotizacion/6/1.jpg",
      img2: "imgCotizacion/6/2.jpg",
      im3: "imgCotizacion/6/3.jpg"
    },
    {
      nombre: "Coahuila de Zaragoza",
      kilometros: (844),
      tiempoEstimado: " 13 h 38 min",
      total: (844 * 150),
      img1: "imgCotizacion/7/1.jpg",
      img2: "imgCotizacion/7/2.jpg",
      im3: "imgCotizacion/7/3.png"
    },
    {
      nombre: "Colima",
      kilometros: (413),
      tiempoEstimado: "5 h 8 min",
      total: (413 * 150),
      img1: "imgCotizacion/8/1.jpg",
      img2: "imgCotizacion/8/2.jpg",
      im3: "imgCotizacion/8/3.jpg"
    },
    {
      nombre: "Durango",
      kilometros: (526.7),
      tiempoEstimado: "7 h 10 min",
      total: (526.7 * 150),
      img1: "imgCotizacion/9/1.jpg",
      img2: "imgCotizacion/9/2.jpg",
      im3: "imgCotizacion/9/3.jpg"
    }
    ,
    {
      nombre: "Guerrero",
      kilometros: (727.1),
      tiempoEstimado: "7 h 10 min",
      total: (727.1 * 150),
      img1: "imgCotizacion/10/1.jpg",
      img2: "imgCotizacion/10/2.jpg",
      im3: "imgCotizacion/10/3.jpg"
    }
    ,
    {
      nombre: "Hidalgo",
      kilometros: (385.8),
      tiempoEstimado: "4 h 38 min",
      total: (385.8 * 150),
      img1: "imgCotizacion/11/1.jpeg",
      img2: "imgCotizacion/11/2.jpg",
      im3: "imgCotizacion/11/3.jpg"
    }
    ,
    {
      nombre: "Jalisco",
      kilometros: (219.9),
      tiempoEstimado: "2 h 42 min",
      total: (219.9 * 150),
      img1: "imgCotizacion/12/1.jpeg",
      img2: "imgCotizacion/12/2.jpg",
      im3: "imgCotizacion/12/3.jpg"
    },
    {
      nombre: "México",
      kilometros: (384.6),
      tiempoEstimado: "5 h 55 min",
      total: (384.6 * 150),
      img1: "imgCotizacion/13/1.jpeg",
      img2: "imgCotizacion/13/2.jpg",
      im3: "imgCotizacion/13/3.jpg"
    }
    ,
    {
      nombre: "Michoacán de Ocampo",
      kilometros: (261.3),
      tiempoEstimado: "3 h 29 min",
      total: (261.3 * 150),
      img1: "imgCotizacion/14/1.jpeg",
      img2: "imgCotizacion/14/2.jpg",
      im3: "imgCotizacion/14/3.jpg"
    }
    ,
    {
      nombre: "Morelos",
      kilometros: (509.3),
      tiempoEstimado: "6 h 42 min",
      total: (509.3 * 150),
      img1: "imgCotizacion/15/1.jpeg",
      img2: "imgCotizacion/15/2.jpg",
      im3: "imgCotizacion/15/3.jpg"
    }
    ,
    {
      nombre: "Nayarit",
      kilometros: (457.5),
      tiempoEstimado: "5 h 57 min",
      total: (457.5 * 150),
      img1: "imgCotizacion/16/1.jpg",
      img2: "imgCotizacion/16/2.jpg",
      im3: "imgCotizacion/16/3.png"
    }
    ,
    {
      nombre: "Nuevo León",
      kilometros: (742.6),
      tiempoEstimado: "9 h 40 min",
      total: (742.6 * 150),
      img1: "imgCotizacion/17/1.jpg",
      img2: "imgCotizacion/17/2.jpg",
      im3: "imgCotizacion/17/3.jpg"
    },
    {
      nombre: "Oaxaca",
      kilometros: (825.9),
      tiempoEstimado: "10 h 14 min",
      total: (825.9 * 150),
      img1: "imgCotizacion/18/1.jpg",
      img2: "imgCotizacion/18/2.jpg",
      im3: "imgCotizacion/18/3.jpg"
    },
    {
      nombre: "Puebla",
      kilometros: (498.7),
      tiempoEstimado: "6 h 9 min",
      total: (498.7 * 150),
      img1: "imgCotizacion/19/1.jpg",
      img2: "imgCotizacion/19/2.jpg",
      im3: "imgCotizacion/19/3.jpg"
    }
    ,
    {
      nombre: "Querétaro",
      kilometros: (171.4),
      tiempoEstimado: "2 h 12 min",
      total: (171.4 * 150),
      img1: "imgCotizacion/20/1.jpg",
      img2: "imgCotizacion/20/2.jpg",
      im3: "imgCotizacion/20/3.jpg"
    },
    {
      nombre: "Quintana Roo",
      kilometros: (1782.7),
      tiempoEstimado: "21 h 48 min",
      total: (1782.7 * 150),
      img1: "imgCotizacion/21/1.jpg",
      img2: "imgCotizacion/21/2.jpg",
      im3: "imgCotizacion/21/3.jpg"
    },
    {
      nombre: "San Luis Potosí",
      kilometros: (179.7),
      tiempoEstimado: "2 h 35 min",
      total: (179.7 * 150),
      img1: "imgCotizacion/22/1.jpg",
      img2: "imgCotizacion/22/2.jpg",
      im3: "imgCotizacion/22/3.jpg"
    }
    ,
    {
      nombre: "Sinaloa",
      kilometros: (1060.5),
      tiempoEstimado: "13 h 28 min",
      total: (1060.5 * 150),
      img1: "imgCotizacion/23/1.jpg",
      img2: "imgCotizacion/23/2.jpg",
      im3: "imgCotizacion/23/3.jpg"
    }
    ,
    {
      nombre: "Sonora",
      kilometros: (1664.0),
      tiempoEstimado: "20 h 15 min",
      total: (1664.0 * 150),
      img1: "imgCotizacion/24/1.jpg",
      img2: "imgCotizacion/24/2.jpg",
      im3: "imgCotizacion/24/3.jpg"
    }
    ,
    {
      nombre: "Tabasco",
      kilometros: (1161.4),
      tiempoEstimado: "14 h 4 min",
      total: (1161.4 * 150),
      img1: "imgCotizacion/25/1.jpg",
      img2: "imgCotizacion/25/2.jpg",
      im3: "imgCotizacion/25/3.jpg"
    },
    {
      nombre: "Tamaulipas",
      kilometros: (600.5),
      tiempoEstimado: "8 h 17 min",
      total: (600.5 * 150),
      img1: "imgCotizacion/26/1.jpg",
      img2: "imgCotizacion/26/2.jpg",
      im3: "imgCotizacion/26/3.jpg"
    },
    {
      nombre: "Tlaxcala",
      kilometros: (476.5),
      tiempoEstimado: "5 h 47 min",
      total: (476.5 * 150),
      img1: "imgCotizacion/27/1.jpg",
      img2: "imgCotizacion/27/2.jpg",
      im3: "imgCotizacion/27/3.jpg"
    },
    {
      nombre: "Veracruz ",
      kilometros: (736.9),
      tiempoEstimado: "9 h 8 min",
      total: (736.9 * 150),
      img1: "imgCotizacion/28/1.jpg",
      img2: "imgCotizacion/28/2.jpg",
      im3: "imgCotizacion/28/3.jpg"
    },
    {
      nombre: "Yucatán",
      kilometros: (1741.2),
      tiempoEstimado: "21 h 47 min",
      total: (1741.2 * 150),
      img1: "imgCotizacion/29/1.jpg",
      img2: "imgCotizacion/29/2.jpg",
      im3: "imgCotizacion/29/3.jpg"
    },
    {
      nombre: "Zacatecas",
      kilometros: (244.0),
      tiempoEstimado: "3 h 29 min",
      total: (244.0 * 150),
      img1: "imgCotizacion/30/1.jpg",
      img2: "imgCotizacion/30/2.jpg",
      im3: "imgCotizacion/30/3.jpg"
    },
    {
      nombre: "Guanajuato",
      kilometros: (75.1),
      tiempoEstimado: "1 h 31 min",
      total: (75.1 * 150),
      img1: "imgCotizacion/31/1.jpg",
      img2: "imgCotizacion/31/2.jpg",
      im3: "imgCotizacion/31/3.jpg"
    }
  ]
  
  //ESTADOS
  let indexEstado;
  $("#estadosElec form").submit(function () {
    let form_estados = $("#form_estados").val();
    localStorage.setItem("form_estados",form_estados);
   
    //
    let form_dias =$("#form_dias").val();
    localStorage.setItem("form_dias",form_dias);
   
    //
    let form_olders =$("#form_olders").val();
    localStorage.setItem("form_olders",form_olders);
   
    //
    let form_Ninos = $("#form_Ninos").val();
    localStorage.setItem("form_Ninos",form_Ninos);
 
  
  });
  var form_estados = localStorage.getItem("form_estados");
  var form_dias = localStorage.getItem("form_dias");
  var form_Ninos = localStorage.getItem("form_Ninos");
  var form_olders = localStorage.getItem("form_olders");

  let formindex = parseInt(form_estados);
  let indexdias=parseInt(form_dias);
  let indexAdultos=parseInt(form_olders);
  let indexninos=parseInt(form_Ninos);
  let costoninos=((indexninos*50)*indexdias);
  let costoAdul=((indexAdultos*100)*indexdias);
  let grantotal=(estados[formindex].total+costoAdul+costoninos);


  if (form_estados != null && form_estados != "unfined") {
    let about_esqueleto = $("#esqueleto");
    about_esqueleto.append(`
    <main>
      <section>
        <article>
          <div class="col-5">
            <img src=${estados[formindex].im3} class="d-block w-100"/>
          </div>
        </article>

        <article id="cab">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <h5>Destino turístico</h5>
              <img class="imgEstado"src="imgCotizacion/finCotizacion/image 19.png" alt="..." />
              <h3>${estados[formindex].nombre}</h3>
            </div>
            <div class="col-12 col-md-6 col-lg-4"></div>
            <div class="col-12 col-md-6 col-lg-4">
              <img src="imgCotizacion/finCotizacion/image 20.png" alt="..." />
              <h5>Lugar de origen</h5>
              <h6>Leon</h6>
            </div>
          </div>
        </article>

        <div id="resumen">
          <article>
            <div id="row1" class="row">
              <div id="r1" class="col-lg-3">
                <h5>Adultos</h5>
                <h4>${indexAdultos}</h4>
              </div>
              <div id="r2" class="col-lg-3">
                <h5>Niños</h5>
                <h4>${indexninos}</h4>
              </div>
              <div class="col-lg-3">
                <h5>Kilometros</h5>
                <h4>${estados[formindex].kilometros}</h4>
              </div>
            </div>
          </article>

          <article>
            <div class="row">
              <div id="r1" class="col-3">
                <h5>Precio</h5>
                <h4>$100c/u</h4>
              </div>
              <div id="r2" class="col-3">
                <h5>Precio</h5>
                <h4>$50c/u</h4>
              </div>
              <div class="col-3">
                <h5>Precio</h5>
                <h4>$150c/u</h4>
              </div>
            </div>
          </article>

          <article>
            <div class="row">
              <div id="r1" class="col-3">
                <h5>Días</h5>
                <h4>${indexdias}</h4>
              </div>
              <div id="r2" class="col-3">
                <h5>Días</h5>
                <h4>${indexdias}</h4>
              </div>
              <div class="col-3"></div>
            </div>
          </article>

          <article>
            <div id="row2" class="row">
              <div id="r1" class="col-3">
                <h5>Total</h5>
                <h4>MXM$${costoAdul}</h4>
              </div>
              <div id="r2" class="col-3">
                <h5>Total</h5>
                <h4>MXM$${costoninos}</h4>
              </div>
              <div class="col-3">
                <h5>Total</h5>
                <h4>MXM$${estados[formindex].total}</h4>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section>
        <article id="cab1">
          <div class="row">
            <div class="col-6">
              <h3>Cupón Biline</h3>
              <img src="imgCotizacion/finCotizacion/image 15.png" alt="..." />
              <h6>
                Por usar nuestros servicios recive un 10% de descuento en tus
                primeros 5 viajes, con solo presentar el código QR en las
                casetas.
              </h6>
            </div>
            <div class="col-0 col-md-1 col-lg-3"></div>
            <div class="col-3">
              <img id="qr" src="imgCotizacion/finCotizacion/qr.png" alt="..." />
              <img id="download" src="imgCotizacion/finCotizacion/bx_bxs-download.png" alt="..." />
            </div>
          </div>
        </article>

        <article id="cab2">
          <div class="row">
            <div class="col-5">
              <img src="imgCotizacion/finCotizacion/image 16.png" alt="..." />
              <h2>Total</h2>
            </div>
            <div class="col-0 col-md-1 col-lg-3"></div>
            <div class="col-4">
              <h2>MXM$${grantotal}</h2>
            </div>
          </div>
        </article>
      </section>
    </main>`
    );
     
  }

})