// Llamamos elementos de HTML 
const valorTicket= 200;
const form= document.getElementById("formulario");
const inputs= document.querySelectorAll("#formulario input");
const nombre= document.querySelector("#nombre");
const apellido= document.querySelector("#apellido");
const mail= document.querySelector("#mail");
const cantidadTickets= document.querySelector("#cantidadTickets");
const categoria= document.querySelector("#categoriaSelect");
const totalPago= document.querySelector("#totalPago");
const btnBorrar= document.querySelector("#btnBorrar");
const resumen= document.querySelector("#btnResumen");


// Funcion para volver el formulario a 0
function borrar(){
    nombre.value="";
    apellido.value="";
    mail.value="";
    cantidadTickets.value="";
    categoria.value="";
    totalPago.textContent="";
}

// Funcion para calcular descuento 
function calcularDescuento(){
    switch (categoria.value) {
        case "0":
            return (valorTicket - (valorTicket * 0));
            
        case "1":  
            return(valorTicket - (valorTicket * 0.80));

        case "2":  
            return(valorTicket - (valorTicket * 0.50));

        case "3":  
            return(valorTicket - (valorTicket * 0.15));
 
        default:
            return false;
    }
}

// Funcion para calcular el total
function calcularTotal(){
    let total= 0;
    total= calcularDescuento() * parseInt( cantidadTickets.value);
    return total;
    
}

function mostrarTotal(){
    totalPago.textContent= calcularTotal();
}

function validaFalla(input,msje) {
    const formControl= input.parentElement;
    const aviso= formControl.querySelector("p");
    aviso.innerText= msje;
    formControl.className= "formulario_control.falla-input_activo";
}

function validaOk(input,msje){
    const formControl= input.parentElement;
    const aviso= formControl.querySelector("p");
    aviso.innerText= msje;
    formControl.className="formulario_control.ok";
}

function validaCategoriaFalla(select,msje){
    const formControl= select.parentElement;
    const categ= formControl.querySelector("p");
    categ.innerText=msje;
    formControl.className= "formulario_control.falla-input_activo";
    
}

function validaCategoriaOk(select,msje){
    const formControl= select.parentElement;
    const aviso= formControl.querySelector("p");
    aviso.innerText= msje;
    formControl.className="formulario_control.ok";
}

function validaError(button,msje){
    const formControl= button.parentElement;
    const error= formControl.querySelector("p");
    error.innerText=msje;
    formControl.className= "formulario_control.falla-input_activo";
    
}


// Evento, cuando hago click en el boton me llama a una funcion
 btnBorrar.addEventListener("click",borrar); 
 inputs.forEach((input)=>{
    input.addEventListener("keyup",validarCampos);
    input.addEventListener("blur",validarCampos);
 });

 resumen.addEventListener("click", (e)=>{
    e.preventDefault();
   /* if(campos.nombre==false||campos.apellido==false||campos.mail==false||campos.cantidadTickets==false||campos.categoria==false){
        validaError(resumen,"Por favor completar formulario correctamente.");
    } else{
        mostrarTotal();
    }*/
    mostrarTotal();
}) // cierre boton resumen


// Validacion
const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
}

const campos={
    nombre:false,
    apellido:false,
    mail:false,
    cantidadTickets:false,
    categoria:false,
}

//Creamos funcion validar campos
 function validarCampos() {
   //capturar los valores ingresados por el usuario
    const nombreValor= nombre.value;
    const apellidoValor= apellido.value;
    const mailValor= mail.value;
    const cantidadValor= cantidadTickets.value;
    const categoriaValor= categoria.value;
   
    // Validando campo nombre
    if (!nombreValor) {
    console.log("nombre vacio");
    validaFalla(nombre,"campo vacio");
    campos.nombre= false
} else {
    validaOk(nombre,"");
    campos.nombre= true
}// cierre nombre valor


 // Validando campo apellido
 if (!apellidoValor) {
    console.log("apellido vacio");
    validaFalla(apellido,"campo vacio");
    campos.apellido= false
} else {
    validaOk(apellido,"");
    campos.apellido= true
}// cierre nombre valor


// Validando campo mail
if (!mailValor) {
    console.log("mail vacio");
    validaFalla(mail,"campo vacio");
    campos.mail= false
 } else if(!validaEmail(mailValor)){
    validaFalla(mail,"El mail no es valido");
    campos.mail= false
} else {
    validaOk(mail,"");
    campos.mail= true
}// cierre mail valor 

// Validando campo cantidad ticket
if (!cantidadValor) {
    console.log("cantidad vacio");
    validaFalla(cantidadTickets,"campo vacio");
    campos.cantidadTickets= false
} else {
    validaOk(cantidadTickets,"");
    campos.cantidadTickets= true
}// cierre cantidad valor

// Validando campo categoria
if (categoriaValor==="") {
    console.log("categoria vacio");
    validaCategoriaFalla(categoria,"Seleccione una categoria");
    campos.categoria= false
} else {
    validaCategoriaOk(categoria,"");
    campos.categoria= true
}// cierre categoria valor





    
};// cierre de validar campo















