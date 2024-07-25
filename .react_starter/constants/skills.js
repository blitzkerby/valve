const skills = [
    {   skills: "HTML-CSS"  ,
        level : "advanced"  ,
        color : "#2662EA"   , 
    }, 
    {   skill : "JavaScript", 
        level : "intermediate",
        color : "#F74B4B"   , 
    },
    {   skills: "Web Desing",
        level : "advanced"  ,
        color : "#00B3E6"   ,
    },
    {   skills: "Git and GitHub",
        level : "advanced"  ,
        color : "#333333"   ,
    }
    // Add more skills as needed
]

const skillsJSON = JSON.stringify(skills, null, 2)

const fs = require('fs')

fs.writeFile("./skills.json", skillsJSON, (err) => {
    if (err) 
    {
        console.error("Error writing to file: ", err)
    } 
    else 
    {
        console.log("Skills data saved to skills.json")
    }
})