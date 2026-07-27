import { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";


const skills = {

  frontend:[
    "Angular",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SCSS",
    "Tailwind CSS",
    "RxJS",
    "NgRx",
    "Angular Material",
    "Responsive Design"
  ],


  backend:[
    "ASP.NET Core",
    "Web API",
    "REST API",
    "JWT Authentication",
    "RBAC",
    "Entity Framework",
    "Python API Integration"
  ],


  database:[
    "SQL Server",
    "PostgreSQL",
    "MySQL",
    "T-SQL"
  ],


  tools:[
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "Jenkins",
    "CI/CD",
    "Postman",
    "VS Code",
    "Visual Studio",
    "Agile Scrum"
  ]

};



const categories=[
{
 id:"frontend",
 name:"Frontend",
 icon:Code2
},
{
 id:"backend",
 name:"Backend",
 icon:Server
},
{
 id:"database",
 name:"Database",
 icon:Database
},
{
 id:"tools",
 name:"Tools",
 icon:Wrench
}

];



export const SkillsSection=()=>{


const [active,setActive]=useState("frontend");


return (

<section 
id="skills"
className="py-24 px-4 relative"
>


<div className="container mx-auto max-w-6xl">


<div className="text-center mb-14">


<div className="inline-flex items-center gap-2 
px-4 py-2 rounded-full 
bg-primary/10 text-primary mb-5">

<Sparkles size={16}/>

<span>
Technical Expertise
</span>

</div>



<h2 className="text-4xl md:text-5xl font-bold">

My <span className="text-primary">
Skills
</span>

</h2>


<p className="text-muted-foreground mt-5 max-w-2xl mx-auto">

Technologies and tools I use to build scalable,
high-performance enterprise applications.

</p>


</div>





{/* CATEGORY BUTTONS */}

<div className="flex flex-wrap justify-center gap-4 mb-12">


{
categories.map((cat)=>{

const Icon=cat.icon;


return (

<button
key={cat.id}
onClick={()=>setActive(cat.id)}

className={cn(
"flex items-center gap-2 px-6 py-3 rounded-full transition-all",
active===cat.id
?
"bg-primary text-primary-foreground shadow-lg"
:
"bg-white/5 border border-white/10 hover:border-primary"
)}

>

<Icon size={18}/>

{cat.name}

</button>

)

})
}


</div>





{/* SKILLS CARD */}

<div className="
backdrop-blur-xl 
bg-white/5 
border border-white/10
rounded-3xl
p-8
">


<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">


{
skills[active].map((skill)=>(


<div

key={skill}

className="
group
p-5
rounded-2xl
bg-background/40
border border-white/10
hover:border-primary
hover:-translate-y-1
transition-all
"


>


<div className="flex items-center gap-3">


<div className="
h-10 w-10 
rounded-xl
bg-primary/10
flex items-center justify-center
">


<Code2 
className="text-primary"
size={20}
/>


</div>


<div>

<h3 className="font-semibold">
{skill}
</h3>

<p className="text-xs text-muted-foreground">
Experience
</p>


</div>


</div>


</div>


))

}



</div>


</div>




</div>


</section>


)

}