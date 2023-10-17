
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next"); 
    const des_conTarjetas = document.querySelectorAll(".des_conTarjetas");
    const des_butPrev = document.querySelector(".des_butPrev");
    const des_butNext = document.querySelector(".des_butNext");
    const ProximoSlide = document.querySelectorAll(".lo_image");
    const botonesFiltro = document.querySelectorAll(".filter");
    const imagenes = document.querySelectorAll(".imagen");



    
  
    let currentIndex = 0;
    let currentDes = 0;
    let currentLo = 0;
  
    function showSlide(n) {
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.transform = `translateX(-${n * 100}%)`; /* Añadido para mover las diapositivas */
        }
      }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    showSlide(currentIndex);
    setInterval(nextSlide, 5000);
  
// /////////////////////////////////////////////////////////////////

    function showSlideDes(j){
      for (let i = 0; i < des_conTarjetas.length; i++) {
        des_conTarjetas[i].style.transform = `translateX(-${j * 100}%)`; /* Añadido para mover las diapositivas */
      }
    }
    
    function butPrevSlide() {
      currentDes = (currentDes + 1) % des_conTarjetas.length;
      showSlideDes(currentDes);
    }
  
    function butNextSlide() {
      currentDes = (currentDes - 1 + des_conTarjetas.length) % des_conTarjetas.length;
      showSlideDes(currentDes);
    }
  



    des_butPrev.addEventListener("click", butPrevSlide);
    des_butNext.addEventListener("click", butNextSlide);


    showSlideDes(currentDes);

    /////////////////////////////////////////////////////////////////////

    function showSlideLo(k){
      for (let i = 0; i < ProximoSlide.length; i++) {
        ProximoSlide[i].style.transform = `translateX(-${k * 100}%)`; /* Añadido para mover las diapositivas */
      }
    }
    
    function nextSlideLo() {
      currentLo = (currentLo - 1 + ProximoSlide.length) % ProximoSlide.length;
      showSlideLo(currentLo);
    }
  

    setInterval(nextSlideLo, 5000);

    ///////////////////////////////////////////////////////////////////////////////////////


    // botonesFiltro.forEach(function(boton) {
    //   boton.addEventListener("click", function() {
    //     const categoria = boton.getAttribute("data-categoria");
  
    //     // Muestra todas las imágenes si se selecciona la categoría "todos"

    //       // Oculta todas las imágenes
    //       imagenes.forEach(function(imagen) {
    //         imagen.style.display = "none";
    //       });
    //       console.log("jackson")
  
    //       // Muestra las imágenes de la categoría seleccionada
    //       const imagenesCategoria = document.querySelectorAll("." + categoria);
    //       console.log(imagenesCategoria);
    //       imagenesCategoria.forEach(function(imagen) {
    //         imagen.style.display = "block";
    //       });
        
    //   });
    // });
    

    
    
    (() => {
      const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
      };
      
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


/////////// carrito ///////////////////////////////////




/////////////////////////////////////////////////////////////////


  const botonesAgregar = document.querySelectorAll(".agregar");
  const listaCarrito = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total");
  
  let total = 0;

  // Agrega un controlador de eventos a cada botón "Agregar"
  botonesAgregar.forEach(function(boton) {
    boton.addEventListener("click", function() {
      const producto = boton.parentElement;
      const nombreProducto = producto.querySelector("h3").textContent;
      const precioProducto = parseFloat(producto.querySelector("p").textContent.replace("Precio: $", ""));
  

      
      // Crea un elemento de lista para el carrito
      const elementoLista = document.createElement("li");
      elementoLista.innerHTML = `<div class="listado">
       ${nombreProducto} - ${precioProducto}
      <button class="eliminar">Eliminar</button></div>
      `;

      listaCarrito.appendChild(elementoLista);
      total += precioProducto;
      totalSpan.textContent = total.toFixed(2);

     
      
      // Agrega un controlador de eventos al botón "Eliminar"
      const botonesEliminar = elementoLista.querySelectorAll(".eliminar");
      botonesEliminar.forEach(function(botonEliminar) {
        botonEliminar.addEventListener("click", function() {
          listaCarrito.removeChild(elementoLista);
          total -= precioProducto;
          totalSpan.textContent = total.toFixed(2);
          
        });
      });
    });
    });
  

