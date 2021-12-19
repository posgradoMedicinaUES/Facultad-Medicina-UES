let cerrar = document.querySelectorAll(".close");
let abrir = document.querySelectorAll(".button");
let modal1 = document.querySelectorAll(".modal");
let modalC = document.querySelectorAll(".modal__container");


/*
for (var i = 0; i < abrir.length; i++) {
    boton(abrir[i]);
}

function boton(abrir) {
    abrir.addEventListener("click", (e) =>{
        e.preventDefault();
        for(var i = 0; i < modalC.length; i++){
            modalC[i].style.opacity = "1";
            modalC[i].style.visibility = "visible";
            for(var i = 0; i < modal.length; i++){
                modal[i].classList.toggle("modal__close");
            }
             
        }    
    })
}

*/
abrir.forEach((btn)=>{
btn.onclick = (e) =>{
    e.preventDefault();
    let modal = btn.getAttribute("data-modal");
    let modalContainer = document.getElementById(modal);
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    for(var i = 0; i < modal1.length; i++){
        modal1[i].classList.toggle("modal__close");
    }
}
})


cerrar.forEach((btn)=>{
    btn.addEventListener("click", () =>{   
        for(var i = 0; i < modal1.length; i++){
            modal1[i].classList.toggle("modal__close");
        }
        setTimeout(() =>{
            for(var i = 0; i < modalC.length; i++){
                modalC[i].style.opacity = "0";
                modalC[i].style.visibility = "hidden";
            }
        },600)
    })
})





