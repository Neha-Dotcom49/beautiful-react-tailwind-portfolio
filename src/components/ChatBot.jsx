import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

const ChatBot = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I am Neha's AI assistant. How can I help you?"
    }
  ]);

  const [input, setInput] = useState("");


  const sendMessage = () => {

    if (!input.trim()) return;


    const userMessage = {
      sender: "user",
      text: input
    };


    setMessages(prev => [
      ...prev,
      userMessage
    ]);


    let botReply = "Sorry, I don't understand. Try asking about skills, projects, or contact.";


 const msg = input.toLowerCase();


if (msg.includes("about neha") || msg.includes("tell me about neha")) {

  botReply =
    "Neha Patil is a Full Stack Developer with 3+ years of experience specializing in Angular, React, TypeScript, ASP.NET Core, SQL, and enterprise application development.";

}

else if (msg.includes("frontend") || msg.includes("angular")) {

  botReply =
    "Neha has strong frontend expertise in Angular, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Angular Material, RxJS, Reactive Forms, Lazy Loading, Routing, and NgRx.";

}

else if (msg.includes("backend") || msg.includes(".net") || msg.includes("api")) {

  botReply =
    "Neha has backend experience with C#, ASP.NET Core Web API, .NET 6/8, REST APIs, JWT authentication, RBAC, and database integration.";

}

else if (msg.includes("database") || msg.includes("sql")) {

  botReply =
    "Neha has worked with SQL Server, PostgreSQL, and MySQL including queries, joins, stored procedures, and database integration.";

}

else if (msg.includes("digi") || msg.includes("pharma")) {

  botReply =
    "DigiCX is a pharma domain platform where Neha worked on HCP onboarding, compliance workflows, contract management, approval processes, SAP integration, and dashboards.";

}

else if (msg.includes("notice")) {

  botReply =
    "Notice Management System handles notice creation, document upload, assignments, remarks, escalations, notifications, and status tracking.";

}

else if (msg.includes("intranet")) {

  botReply =
    "Neha worked on Intranet Portal development focusing on enterprise workflows, user management, and internal business processes.";

}

else if (msg.includes("rfq")) {

  botReply =
    "RFQ Management System streamlined quotation workflows involving Engineering, Costing, SCM, and approval processes with better tracking and transparency.";

}

else if (msg.includes("ppm")) {

  botReply =
    "PPM System helps manage project and process activities with structured workflows, tracking, and reporting.";

}

else if (msg.includes("hospital")) {

  botReply =
    "Neha developed a Hospital Management System with modules for Admin, Doctor, and Receptionist roles including appointments, patients, billing, and dashboards.";

}

else if (msg.includes("gk") || msg.includes("real estate")) {

  botReply =
    "GK-HOUSE is a real estate application where Neha developed property listing, search, filtering, dashboards, and API integrations.";

}

else if (msg.includes("electro") || msg.includes("ecommerce")) {

  botReply =
    "ElectroHub is an e-commerce application where Neha worked on product listing, cart, checkout, filtering, and responsive UI components.";

}

else if (msg.includes("role") || msg.includes("responsibility")) {

  botReply =
    "Neha's responsibilities include developing Angular components, integrating APIs, implementing authentication, optimizing performance, debugging issues, and collaborating with teams.";

}

else if (msg.includes("challenge")) {

  botReply =
    "Neha has handled challenges like complex workflows, API integration, performance optimization, document automation, and enterprise application scalability.";

}

else if (msg.includes("certification") || msg.includes("certificate")) {

  botReply =
    "Neha has certifications in Full Stack Development, Web Development, .NET Core MVC, and AWS Well-Architected Proficient.";

}

else if (msg.includes("aws") || msg.includes("cloud")) {

  botReply =
    "Neha has AWS Well-Architected Proficient certification and understands cloud architecture best practices.";

}

else if (msg.includes("strength")) {

  botReply =
    "Neha's strengths include problem solving, Angular development, building reusable components, API integration, and learning new technologies quickly.";

}

else if (msg.includes("weakness")) {

  botReply =
    "Neha continuously improves by learning new technologies and strengthening backend and cloud skills.";

}

else if (msg.includes("hobby") || msg.includes("interest")) {

  botReply =
    "Neha enjoys coding, solving programming problems, learning new technologies, and improving development skills.";

}

else if (msg.includes("notice period")) {

  botReply =
    "Neha's current notice period is 90 days.";

}

else if (msg.includes("available") || msg.includes("join")) {

  botReply =
    "For availability and joining details, please contact Neha directly through email or LinkedIn.";

}

else if (msg.includes("hire") || msg.includes("why should we hire")) {

  botReply =
    "Neha brings 3+ years of experience in building scalable enterprise applications, strong Angular expertise, API integration skills, and a problem-solving mindset.";

}

else if (msg.includes("contact") || msg.includes("email")) {

  botReply =
    "You can contact Neha at nehapatil1082@gmail.com or connect through LinkedIn.";

}

else if (msg.includes("linkedin")) {

  botReply =
    "LinkedIn profile: linkedin.com/in/nehapatil49";

}

else if (msg.includes("github")) {

  botReply =
    "GitHub profile: github.com/Neha-Dotcom49";

}

else if (msg.includes("thank") || msg.includes("thanks")) {

  botReply =
    "You're welcome 😊 Feel free to ask anything else about Neha's profile.";

}

else if (msg.includes("what can you do") || msg.includes("help")) {

  botReply =
    "I can help you know about Neha's skills, projects, experience, education, certifications, achievements, and contact details.";

}

else if (msg.includes("good morning") || msg.includes("good afternoon") || msg.includes("good evening")) {

  botReply =
    "Hello 😊 Hope you are having a great day! How can I help you learn more about Neha?";

}

else if (msg.includes("what is your name")) {

  botReply =
    "I am Neha's Portfolio Assistant 🤖.";

}
else if (msg.includes("college") || msg.includes("university") || msg.includes("btech") || msg.includes("graduation")) {

  botReply =
    "Neha completed her B.Tech in Computer Science in 2023. 🎓";

}

else if (msg.includes("dob") || msg.includes("date of birth") || msg.includes("birthday") || msg.includes("birth")) {

  botReply =
    "Neha's date of birth is 8 October 2001 🎂.";

}

else if (msg.includes("age") || msg.includes("how old is neha")) {

  botReply =
    "Neha was born on 8 October 2001 and is currently 24 years old.";

}

else if (msg.includes("10th") || msg.includes("tenth") || msg.includes("school marks")) {

  botReply =
    "Neha completed her 10th standard from Bhopal Board in 2017 with 89% marks.";

}

else if (msg.includes("12th") || msg.includes("twelfth")) {

  botReply =
    "Neha completed her 12th standard in 2019.";

}

else if (msg.includes("where are you from") || msg.includes("hometown") || msg.includes("native place") || msg.includes("from where")) {

  botReply =
    "Neha is originally from Burhanpur, Madhya Pradesh. Currently, she is living and working in Pune, Maharashtra. 📍";

}

else if (msg.includes("who made you") || msg.includes("who created you")) {

  botReply =
    "I was created as an AI assistant for Neha's portfolio website to help visitors explore her profile.";

}

else if (msg.includes("how old are you")) {

  botReply =
    "I am an AI assistant, so I don't have an age 😊.";

}

else if (msg.includes("where are you from")) {

  botReply =
    "I am available online through Neha's portfolio website 🌐.";

}

else if (msg.includes("what is your favorite technology")) {

  botReply =
    "Neha works with modern technologies like Angular, React, TypeScript, .NET, SQL, and AI-assisted development tools.";

}

else if (msg.includes("tell me something interesting")) {

  botReply =
    "Neha has experience building enterprise applications, pharma workflow systems, automation platforms, and has solved 160+ coding problems.";

}

else if (msg.includes("thank you") || msg.includes("thanks")) {

  botReply =
    "You're welcome 😊 Feel free to explore Neha's portfolio or ask anything else.";

}

else if (msg.includes("bye") || msg.includes("goodbye")) {

  botReply =
    "Goodbye 👋 Have a great day! Feel free to visit again.";

}

else if (msg.includes("nice portfolio") || msg.includes("great portfolio")) {

  botReply =
    "Thank you 😊 Neha's portfolio showcases her development journey, projects, skills, and achievements.";

}

else if (msg.includes("what are you doing")) {

  botReply =
    "I am helping visitors learn more about Neha's professional journey.";

}

else if (msg.includes("can you tell joke") || msg.includes("joke")) {

  botReply =
    "Why do programmers prefer dark mode? Because light attracts bugs 🐛😄";

}

else if (msg.includes("weather")) {

  botReply =
    "I don't have live weather access, but I hope you have a great day ☀️.";

}

else if (msg.includes("time")) {

  botReply =
    "I don't have a live clock, but you can check your device time 😊.";

}

    setTimeout(() => {

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: botReply
        }
      ]);

    }, 500);


    setInput("");
  
  };


  return (
    <>

      {/* Floating Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
        fixed 
        bottom-5 
        right-5 
        z-50
        w-14
        h-14
        rounded-full
        bg-primary
        text-white
        shadow-xl
        flex
        items-center
        justify-center
        hover:scale-110
        transition
        "
      >

        {
          isOpen
          ?
          <X size={26}/>
          :
          <Bot size={26}/>
        }

      </button>



      {/* Chat Window */}

      {
        isOpen && (

          <div
            className="
            fixed
            bottom-24
            right-5
            z-50
            w-[350px]
            max-w-[calc(100vw-30px)]
            bg-white
            dark:bg-gray-900
            rounded-2xl
            shadow-2xl
            border
            overflow-hidden
            "
          >


            {/* Header */}

            <div
              className="
              flex
              justify-between
              items-center
              p-4
              bg-primary
              text-white
              "
            >

              <div className="flex items-center gap-2">

                <Bot size={22}/>

                <h3 className="font-semibold">
                  Portfolio Assistant
                </h3>

              </div>


              <button
                onClick={() => setIsOpen(false)}
              >

                <X size={20}/>

              </button>

            </div>



            {/* Messages */}


            <div
              className="
              h-72
              overflow-y-auto
              p-4
              space-y-3
              "
            >

              {
                messages.map((msg,index)=>(

                  <div
                    key={index}
                    className={
                      msg.sender === "user"
                      ?
                      "text-right"
                      :
                      "text-left"
                    }
                  >

                    <span
                      className="
                      inline-block
                      px-4
                      py-2
                      rounded-xl
                      bg-gray-200
                      dark:bg-gray-700
                      text-sm
                      "
                    >

                      {msg.text}

                    </span>

                  </div>

                ))
              }

            </div>



            {/* Input */}

            <div
              className="
              flex
              border-t
              "
            >

              <input

                value={input}

                onChange={(e)=>setInput(e.target.value)}

                onKeyDown={(e)=>{
                  if(e.key==="Enter")
                    sendMessage()
                }}

                placeholder="Ask about Neha..."

                className="
                flex-1
                px-4
                py-3
                bg-transparent
                outline-none
                text-sm
                "

              />


              <button

                onClick={sendMessage}

                className="
                px-4
                bg-primary
                text-white
                "

              >

                <Send size={18}/>

              </button>


            </div>


          </div>

        )
      }


    </>
  );
};


export default ChatBot;