/* 3.141592 */
       /* ----------------------Capitulo 2------------------------- */

//Window
    const btnWindow = document.querySelector(".btnWindow");
                                    
    //Le damos clic al boton
    btnWindow.addEventListener("click", function(evento){
        //Tomamos el div 
        const temaWindow = document.querySelector(".escondidoWindow") ;
        //Le cambiamos la clase a mostrarla dentro del clic
        temaWindow.classList.toggle("mostrar")
    }
    )



//Eventos
    const btnEventos = document.querySelector(".btnEventos");
                                    
    //Le damos clic al boton
    btnEventos.addEventListener("click", function(evento){
        //Tomamos el div 
        const temaEventos = document.querySelector(".escondidoEventos") ;
        //Le cambiamos la clase a mostrarla dentro del clic
        temaEventos.classList.toggle("mostrar")
    }
    )


//Temporizador
    const btnTemp = document.querySelector(".btnTemp");
                                    
    //Le damos clic al boton
    btnTemp.addEventListener("click", function(evento){
        //Tomamos el div 
        const temaTemp = document.querySelector(".escondidoTemp") ;
        //Le cambiamos la clase a mostrarla dentro del clic
        temaTemp.classList.toggle("mostrar")
    }
    )


    //Manejo de errores
    const btnError = document.querySelector(".btnError");
                                    
    //Le damos clic al boton
    btnError.addEventListener("click", function(evento){
        //Tomamos el div 
        const temaError = document.querySelector(".escondidoError") ;
        //Le cambiamos la clase a mostrarla dentro del clic
        temaError.classList.toggle("mostrar")
    }
    )


    //Switch
    const btnSwitch = document.querySelector(".btnSwitch");
                                    
    //Le damos clic al boton
    btnSwitch.addEventListener("click", function(evento){
        //Tomamos el div 
        const temaSwitch = document.querySelector(".escondidoSwitch") ;
        //Le cambiamos la clase a mostrarla dentro del clic
        temaSwitch.classList.toggle("mostrar")
    }
    )


    //Callback
    const btnCallback = document.querySelector(".btnCallback");
                                    
    //Le damos clic al boton
    btnCallback.addEventListener("click", function(evento){
        //Tomamos el div 
        const temaCallback = document.querySelector(".escondidoCallback") ;
        //Le cambiamos la clase a mostrarla dentro del clic
        temaCallback.classList.toggle("mostrar")
    }
    )

        //Promesas
        const btnPromesas = document.querySelector(".btnPromesas");
                                    
        //Le damos clic al boton
        btnPromesas.addEventListener("click", function(evento){
            //Tomamos el div 
            const temaPromesas = document.querySelector(".escondidoPromesas") ;
            //Le cambiamos la clase a mostrarla dentro del clic
            temaPromesas.classList.toggle("mostrar")
        }
        )

        //Modal
        const btnModal = document.querySelector(".btnModal");
                                    
        //Le damos clic al boton
        btnModal.addEventListener("click", function(evento){
            //Tomamos el div 
            const temaModal = document.querySelector(".escondidoModal");
            //Le cambiamos la clase a mostrarla dentro del clic
            temaModal.classList.toggle("mostrar")
        }
        )

        /* Modal */
        const boton = document.querySelector(".modal")

        boton.addEventListener("click", function(evento){
            const modalDiv = document.querySelector(".modalDiv");
            modalDiv.classList.toggle("mostrarModal")

        })

        /* boton cerrar modal */
        const botonCerrarModal = document.querySelector(".btnCerrarModal")

        botonCerrarModal.addEventListener("click", function(evento){
            const modalDiv = document.querySelector(".modalDiv");
            modalDiv.classList.toggle("mostrarModal")
        })



    