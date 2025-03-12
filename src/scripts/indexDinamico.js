console.clear()
const skillsBox    = document.querySelector("#skills_Box")
const addSkillsBox = document.querySelector("#addSkill_box")

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


skillsDeploy ( skillsArray, skillsBox )
addSkillsDeploy( addSkillsArray, addSkillsBox )


function skillsDeploy ( Skill, element ){

   element.innerHTML = ""

    for (let i = 0; i < Skill.length; i++) {
        const item = Skill[i];
        const template = `
        <div class="icon__skill w-[60px] h-[80px] md:w-[100px] md:h-[133.33px] "><img class="fit_img" src=${item.src} alt=${item.alt}></div>
        `

        console.log(i)
        element.innerHTML += template
        
    }
}

function addSkillsDeploy ( addSkill, element ){

   element.innerHTML = ""
 
     for (let i = 0; i < addSkill.length; i++) {
         const item = addSkill[i];
         const template = `
         <div class="icon__addskill w-[60px] h-[80px] md:w-[100px] md:h-[133.33px]"><img class="fit_img" src= ${item.src} alt=${item.alt}>
         </div>
         `
 
         console.log(i)
         element.innerHTML += template
         
     }
 }
