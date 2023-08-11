import React, { useState } from 'react'

import Faqs from './Faqs'


const Index = () => {
    
    const initialFaq = [
        
       {
        id:4,    
        Question: "What is React.js?",
        ans: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. "
       },
       {
        id:5,    
        Question: "What is node.js?",
        ans: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment,"
       },
       {
        id:6,    
        Question: "Tell about Facebook",
        ans: "TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns and operates Facebook, Instagram, Threads, and WhatsAp"
       },
       {
        id:7,    
        Question: "Write about viber",
        ans: "Viber, or Rakuten Viber, is a cross-platform voice over IP and instant messaging software application owned by Japanese multinational company Rakuten"
       },
       {
        id:8,    
        Question: "Write something about Telegram",
        ans: "Telegram Messenger is a globally accessible freemium, encrypted, cloud-based and centralized instant messaging service"
       },
       {
        id:10,
        Question: "What is GitHub?",
        ans: "GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code."
       },
       {
        id:11,
        Question: "What is Git?",
        ans: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software developmen"
       },
       {
        id:12,
        Question: "What is Vs Code?",
        ans: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code comp"
       },
       {
        id:13,
        Question: "What is Azure Devops?",
        ans: "Azure DevOps Server is a Microsoft product that provides version control, reporting, requirements management, project management, automated builds, testing and release management capabilities. It covers the entire applicatio."
       },
       {
        id:14,
        Question: "What is Perforce?",
        ans: "Perforce is a centralized version control system that supports software releases with its advanced change management features."
       },
       {
        id:10,
        Question: "What is GitHub?",
        ans: "GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code."
       }
      
    ]


    const [faqValue, setFaqValue] = useState(initialFaq)

    const handlenewFaq = (newFaq) => {
        setFaqValue((prevUser) =>{
            return {...prevUser, newFaq}
          })
    }
  

  return (
    <div>
        <h1 style={{textAlign:"center", marginBottom: "1rem"}}>FAQs Site</h1>
        <Faqs faqs={faqValue} />
    </div>
  )
}

export default Index
