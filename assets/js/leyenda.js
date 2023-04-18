$(document).ready(function() {
    $("#sobre-nosotros").on("click", function(e) {
      e.preventDefault(); // Prevenir comportamiento predeterminado del enlace
      
      // Construir la tarjeta con Bootstrap
      var contenido = `
      <div id="carouselExampleDark" class="carousel carousel-white slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <button class="close-carousel-btn" id="close-carousel-btn">X</button>
        <div class="carousel-inner" id="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000" id="carousel-item">
            <div class="carousel-caption" id="carousel-caption">
              <h5>Nimbrodel Pub Restaurant</h5>
              <p>
                “Nimrodel Significa “dama de la cueva blanca”. Fue una elfa
                silvana que vivió durante la Tercera Edad del Sol en el bosque
                de Lothlórien. En honor a su nombre, se acuña Nimrodel al río
                que nace en las Montañas Nubladas”.
              </p>
            </div>
            
            <img src="./assets/images/IMG2.jpg" class="" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000" id="carousel-item">
            <div class="carousel-caption" id="carousel-caption">
              <h5>Nimbrodel Pub Restaurant</h5>
              <p>
                “Nimrodel Pub Restaurant es un oasis de calma y diversión,
                lleno de rincones acogedores en donde se resalta la belleza de
                su decoración élfica. Es un lugar ideal para visitar solo o
                acompañado, disfrutar una tarde con amigos, terminar el día
                después del trabajo o almorzar con tu familia. Puedes probar
                nuestras tradicionales tablas, en todas sus variedades y que
                nos han otorgado reconocimiento dentro de la cultura
                gastronómica. También puedes disfrutar nuestras cervezas de
                fabricación propia, con sabores que te llevarán a un mágico
                mundo.”
              </p>
            </div>
            <!-- <img src="./assets/images/IMG2.jpg" class="" alt="..."> -->
          </div>
          <div class="carousel-item" id="carousel-item">
            <!-- <div class="carousel-caption" id="carousel-caption">
              <h5>Nimbrodel Pub Restaurant</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> -->
            <img src="./assets/images/IMG1.jpg" class="" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        
      `;
      
      // Insertar el contenido en el div dinámico
      $("#contenido-dinamico").html(contenido);
    });
    
    // Agregar evento clic al botón de cerrar la tarjeta
    $(document).on("click", "#close-carousel-btn", function() {
      console.log("Clic en botón X");
      $("#carouselExampleDark").carousel("pause");// Detener el carousel
      $("#contenido-dinamico").empty(); // Eliminar el contenido de la tarjeta
    });
  });


 
  
  