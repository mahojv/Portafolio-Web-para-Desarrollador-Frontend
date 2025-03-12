
const projectBox   = document.querySelector("#project_box")


const projectsArray = [

    {

        "nombre": "Portafolio",
        "descripcion": "Portafolio web para presentacion a nuevos clientes",
        "fechaCreacion": "02/03/2025",
        "foto": "../images/proy-4.png"
    
    
    },
    {

        "nombre": "curriculum cv - automatizacion",
        "descripcion": "pagina web de ingeniero mecatronico especializado en automatizacion industrial",
        "fechaCreacion": "15/02/2025",
        "foto": "../images/proy-3.png" //direccion de imagen
    
    
    },
    {

        "nombre": "Indexacion de productos",
        "descripcion": "Pingreso de productos a DB",
        "fechaCreacion": "02/03/2025",
        "foto": "../images/proy-1.png"
    
    
    },
    {

        "nombre": "formulario de contacto",
        "descripcion": "contacto para informacion",
        "fechaCreacion": "02/03/2025",
        "foto": "../images/proy-2.png"
    
    
    },

]





projectsDeploy (projectsArray, projectBox )










//FUNCIONES

function projectsDeploy (project, element){
    
    element.innerHTML = ""

    for (let i = 0; i < project.length; i++) {
        const item = project[i];
        const template = `
        <div class="border  border-white rounded-2xl shadow-xl gap-2.5 w-80 h-fit overflow-hidden">
                <figure class="  rounded-t-2xl aspect-square ">
                    <img class="object-cover w-full aspect-auto " src=${item.foto} alt="">
                </figure>
                <div class="flex flex-col  py-4 border-t-1 text-gray-400 gap-2 px-4 ">
                    <h2 class="font-semibold text-xl text-white">${item.nombre}</h2>

                    <span >Descripcion: ${item.descripcion} </span>
                    <span>Fecha de creación: ${item.fechaCreacion} </span>
                </div>

            </div>
        `
        console.log(i)
        element.innerHTML += template
        
    }
}



