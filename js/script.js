
let nombreUsuario = prompt("Ingresa tu nombre")
function bienvenida(nombre){
    alert("Bienvenido/a " + nombreUsuario)
    console.log(nombre)
}
bienvenida()



function login() {
    let contraseña = "Tienda";
    let ingresar = false;
    for(let i = 5; i > 0; i--){
        let contraseñaUsuario = prompt("Ingresa tu contraseña para poder seguir navegando. Te quedan "+ i +" intentos.")
        if(contraseñaUsuario === contraseña){
            alert("ingreso exitoso. Podes seguir navegando");
            ingresar = true;
            break;
        }else{
            alert("Contraseña incorrecta. "+ (i-1) +" intentos restantes")
        }
    }
    return ingresar;
}

if (login()) {
    let prendas = prompt(
        "¿Que prenda estas buscando?: \nA - Remeras \nB - Pantalones \nC - Buzos/camperas \nD - Zapatillas");
    switch (prendas){
        case "A":
            alert("Seleccionaste remeras");
            break;
        case "B":
            alert("Seleccionaste pantalones");
            break;
        case "C":
            alert("Seleccionaste buzos/camperas");
            break;
        case "D":
            alert("Seleccionaste zapatillas");
            break;
        case "Remeras":
            alert("Seleccionaste remeras");
            break;
        case "Pantalones":
            alert("Seleccionaste pantalones");
            break;
        case "Buzos/camperas":
            alert("Seleccionaste buzos/camperas");
            break;
        case "Zapatillas":
            alert("Seleccionaste zapatillas");
            break;
        default:
            alert("Seleccionaste una opcion incorrecta");
            break;
    }
}
