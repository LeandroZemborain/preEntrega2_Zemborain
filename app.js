/*Stock consesionaria de autos*/


/*constructor autos*/
class Autos {
    constructor(id, marca, modelo, año, motor, color, precio) {
        this.id = Number(id)
        this.marca = marca
        this.modelo = modelo
        this.año = Number(año)
        this.motor = motor
        this.color = color
        this.precio = precio
    }
}


/* array autos*/
const autos = []

autos.push(new Autos(01, "Fiat", "Punto", 2015, "1.6cv", "Rojo", "2.5M"))
autos.push(new Autos(02, "Chevrolet", "Onix", 2019, "1.4cv", "Azul", "3.5M"))
autos.push(new Autos(03, "Ford", "Fiesta", 2020, "1.6cv", "Blanco", "3M"))
autos.push(new Autos(04, "Renault", "Sandero", 2021, "1.8cv", "Gris", "3.5M"))
autos.push(new Autos(05, "Toyota", "Ethios", 2022, "1.5cv", "Negro", "2.8M"))



/*mostrar lista*/
function mostrar() {
    if (autos.length == 0) {
        alert("Lista vacía")
    } else {
        console.log("Listado de autos en stock: \n\n");
        autos.forEach(element => {
            console.log(
                "- ID: " + element.id + "\n" +
                "- Marca: " + element.marca + "\n" +
                "- Modelo: " + element.modelo + "\n" +
                "- Año: " + element.año + "\n" +
                "- Motor: " + element.motor + "\n" +
                "- Color: " + element.color + "\n" +
                "- Precio: $" + element.precio + "\n\n");
        });
    }
}



////*filtrar*////
function filtrar() {
    if (autos.length == 0) {
        alert("Lista vacía")
    } else {
        let filtro = Number(prompt(
            "- Elija una opción: \n \n \
        1) Filtrar por marca. \n \
        2) Filtrar por año. \n \
        3) Filtrar por precio. \n \
        0) Volver."
        ));
        switch (filtro) {
            case 1:
                console.log("Listado por marcas: \n\n")
                const filtroMarca = autos.map((element) => element.marca)
                for (const marca in filtroMarca) {

                    console.log("- " + filtroMarca[marca] + "\n")
                }
                break;
            case 2:
                console.log("Listado por año: \n\n")
                const filtroAnio = autos.map((element) => element.año)
                for (const anio in filtroAnio) {
                    console.log("- " + filtroAnio[anio] + "\n")
                }
                break;
            case 3:
                console.log("Listado por precio: \n\n")
                const filtroPrecio = autos.map((element) => element.precio)
                for (const precio in filtroPrecio) {

                    console.log("- $" + filtroPrecio[precio] + "\n")
                }
                break;
            case 0:
                break;
            default:
                console.log("\n Ingrese una opcón. \n")
                break;
        }
    }
}


/*agregar auto*/

function agregar() {

    let nuevoAuto = 0

    while (nuevoAuto < 1) {
        let ingreso = new Autos(prompt("Ingresa el id"),
            (prompt("Ingresa la marca")),
            (prompt("Ingresa el modelo")),
            (prompt("Ingresa el año")),
            (prompt("Ingresa el motor")),
            (prompt("Ingresa el color")),
            (prompt("Ingresa el precio")))

        const byPass = autos.map((element) => element.id)
        
        if(byPass.includes(ingreso.id)){
            alert("Error: Id existente.")
        }else if(isNaN(ingreso.id)||isNaN(ingreso.año)){
            alert("Debe ingresar números en las categorías id y año.")
        }else{
            autos.push(ingreso)
            mostrar()
        }

        nuevoAuto++

    }

}

/*eliminar auto*/
function eliminar() {
    if (autos.length == 0) {
        alert("Lista vacía")
    } else {
        let filtroId = []
        const eliminarAuto = Number(prompt("Ingrese id del auto a eliminar"))
        filtroId = autos.map((element) => element.id)

        if (filtroId.includes(eliminarAuto)) {
            let indice = autos.map(auto => auto.id).indexOf(eliminarAuto)
            autos.splice(indice, 1)
            console.log("Ha eliminado " + eliminarAuto)

        } else {
            alert("El Id ingresado es inválido")
        }

        mostrar()
    }
}




/*bienvenidos*/
alert("Bienvenido a: \n\nConsesionaria AUTO YA")
alert("Presione F12 para abrir consola y refresque (F5)")

/*menu*/
do {
    menu = Number(prompt(
        "- Elija una opción: \n \n \
            1) Mostrar listado. \n \
            2) Filtrar por propiedades. \n \
            3) Agregar unidad. \n \
            4) Eliminar unidad. \n \
            0) Salir."
    ))

    switch (menu) {
        case 1:
            mostrar()
            break;
        case 2:
            filtrar()
            break;
        case 3:
            agregar()
            break;
        case 4:
            eliminar()
            break;
        case 0:
            alert("Hasta pronto!")
            break;
        default:
            alert("\n Debe elegir una opción válida. \n")
            break;
    }
} while (menu != 0)

