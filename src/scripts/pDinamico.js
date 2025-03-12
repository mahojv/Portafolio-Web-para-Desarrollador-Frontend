console.clear()
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

const skillsArray = [
    {

        "nombre": "HTML 5",
        "alt": "HTML 5",        
        src: "./src/images/html5.png" //direccion de imagen
    
    },
    {

        "nombre": "css 3",
        "alt": "css 3",        
        src: "./src/images/css3.png" //direccion de imagen
    
    },
    {

        "nombre": "javascript",
        "alt": "javascript",        
        src: "./src/images/JS.png" //direccion de imagen
    
    },
    {

        "nombre": "react",
        "alt": "react",        
        src: "./src/images/react.png" //direccion de imagen
    
    },
    {

        "nombre": "Tailwind",
        "alt": "Tailwind",        
        src: "./src/images/tailwind.png" //direccion de imagen
    
    },
    {

        "nombre": "Vue.js",
        "alt": "Vue.js",        
        src: "./src/images/Vuejs.png" //direccion de imagen
    
    }, 
]


const addSkillsArray = [
    {

        "nombre": "GitHub",
        "alt": "GitHub",        
        src: "./src/images/Github.png" //direccion de imagen
    
    },
    {

        "nombre": "NodeJS",
        "alt": "NodeJS",        
        src: "./src/images/nodejs.png" //direccion de imagen
    
    },
    {

        "nombre": "Bootstrap",
        "alt": "Bootstrap",        
        src: "./src/images/bootstrap.png" //direccion de imagen
    
    },
    {

        "nombre": "Angular",
        "alt": "Angular",        
        src: "./src/images/angularjs.png" //direccion de imagen
    
    }
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