import logo from './logo.png';
import cross from './cross.png'
import icone from './icone.png'
import search from './search.png'
import C from './C.png'
import CSS from './CSS.png'
import algorithme from './algorithme.png'
import HTML from './HTML.png'
import javascript from './javascript.png'
import Php from './Php.png'
import react from './react.png'
import Python from './Python.png'
import code from './code.png'
import SetupA from './SetupA.png'
import setup from './setup.png'
import Data from './Data.png'
import frontend from './frontend.png'
import backend from './backend.png'
import CICD from './CICd.png'
import softwar from  './softwar.png'
import mobile from './mobile.png'
import AI from './AI.png'
import cyber from './cyber.png'
import advance from './advance.png'
import project from './project.png'
import Git from './Git.png'
import API from './API.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'

export const assets = {
  cross,
  icone,
  search,
  logo,
  linkedin,
  instagram,
  twitter,
};

export const courses_list = [
    {
      cours_name: "Php",
      cours_image: Php,
    },

    {
      cours_name: "react",
      cours_image: react,
    },

    {
      cours_name: "Python",
      cours_image: Python,
    },

    {
      cours_name: "Algorithmique",
      cours_image: algorithme,
    },

    {
      cours_name: "Language C",
      cours_image: C,
    },

    {
      cours_name: "CSS",
      cours_image: CSS,
    },
    
    {
      cours_name: "HTML",
      cours_image: HTML,
    },
     
    {
      cours_name: "JavaScript",
      cours_image: javascript,
    },
];

export const Topics_list = [
     {
     _id: "1",
     name: "Introduction to Programming",
     image: code,
     description: "Discovering basic programming concepts, an introduction to popular languages, and their role.",
     category: "Beginners / Getting Started",

     content: [
      {
        type: "paragraph",
        text: "La programmation informatique est le processus de conception et de rédaction de programmes informatiques. C'est une compétence qui inclut diverses tâches et techniques, mais ce cours ne vise pas à tout enseigner. L'objectif est de vous fournir des compétences pratiques pour comprendre et écrire du code informatique qui reflète les choses que vous voyez et utilisez dans le monde réel."
      },
      {
        type: "paragraph",
        text: "Ce cours porte sur un type particulier de programmation : le développement web. Lors de votre navigation sur des sites web, ce que vous voyez est le résultat d'un code informatique que le navigateur interprète pour vous l'afficher."
      },
      {
        type: "paragraph",
        text: "Ce que vous devez savoir: Nos tutoriels supposent que vous n'avez aucune expérience en programmation. Cependant, vous devez être à l'aise avec l'utilisation d'un ordinateur et des navigateurs web. Si vous êtes à l'aise avec ces compétences, vous êtes prêt à commencer la programmation !"
      },
      {
        type: "paragraph",
        text: "Les tutoriels vous apprendront à écrire trois types de code couramment utilisés dans le développement web : HTML, CSS et JavaScript."
      },
      {
        type: "paragraph",
        text: "Partie 1 : Les composantes d'un site web"
      },
      {
        type: "paragraph",
        text: "HTML - Le squelette d'un site. Exemple de base de HTML :"
      },
      {
        type: "example",
        text: `<!DOCTYPE html>
<html>
  <head>
    <title>Un site web extrêmement simple</title>
  </head>
  <body>
    <p>Ceci est un site web extrêmement simple.</p>
  </body>
</html>`
      },
      {
        type: "paragraph",
        text: "CSS - La peau et les muscles du site. Exemple de CSS pour styliser un paragraphe :"
      },
      {
        type: "example",
        text: `p {
  font-style: italic;
  padding: 25px;
  background-color: #00acd7;
  color: white;
  border: solid 1px black;
  text-align: center;
}`
      },
      {
        type: "paragraph",
        text: "JavaScript - Le cerveau du site. Exemple de code JavaScript pour afficher une alerte :"
      },
      {
        type: "example",
        text: `alert("Oh, bonjour !");`
      },
      {
        type: "paragraph",
        text: "Partie 2 : Outils nécessaires pour commencer"
      },
      {
        type: "paragraph",
        text: "Pour commencer à programmer, vous avez besoin de deux outils essentiels : Un navigateur web et un éditeur de texte."
      },
      {
        type: "paragraph",
        text: "Exemples d'éditeurs de texte recommandés : Sublime Text, Visual Studio Code, Notepad++."
      },
      {
        type: "paragraph",
        text: "Partie 3 : Configuration de votre environnement de travail"
      },
      {
        type: "paragraph",
        text: "Si vous utilisez Windows, créez un dossier pour votre projet et ouvrez-le dans Sublime Text. Si vous utilisez macOS, procédez de la même manière."
      },
      {
        type: "paragraph",
        text: "Partie 4 : Premier programme"
      },
      {
        type: "paragraph",
        text: "HTML : Créez un fichier index.html et ajoutez ce code :"
      },
      {
        type: "example",
        text: `<!DOCTYPE html>
<html>
  <head>
    <title>Ma première page web</title>
  </head>
  <body>
    <h1>Bienvenue sur ma première page web</h1>
    <p>Voici un paragraphe de texte pour commencer.</p>
  </body>
</html>`
      },
      {
        type: "paragraph",
        text: "CSS : Créez un fichier styles.css et ajoutez ce code :"
      },
      {
        type: "example",
        text: `body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;
}

h1 {
  color: #00acd7;
}`
      },
      {
        type: "paragraph",
        text: "JavaScript : Créez un fichier script.js et ajoutez ce code :"
      },
      {
        type: "example",
        text: `alert("Bienvenue sur mon site !");`
      },
      {
        type: "paragraph",
        text: "Dans votre fichier index.html, vous devrez lier votre fichier CSS et JavaScript comme ceci :"
      },
      {
        type: "example",
        text: `<!DOCTYPE html>
<html>
  <head>
    <title>Ma première page web</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Bienvenue sur ma première page web</h1>
    <p>Voici un paragraphe de texte pour commencer.</p>
    <script src="script.js"></script>
  </body>
</html>`
      }
    ]
  },

    {
      _id: "2",
      name: "Fundamentals",
      image: SetupA,
      description: "Learning essential elements like operators, conditions, and loops necessary to write functional code.",
      category: "Beginners / Core Concepts",
    },

    {
      _id: "3",
      name: "Object-Oriented Programming (OOP)",
      image: setup,
      description: "Exploring the fundamental OOP concepts such as classes, objects, and inheritance principles to create modular and reusable applications.",
      category: "Intermediate / Programming Paradigms",
    },
      
 
    {
      _id: "4",
      name: "Data Structures and Algorithms",
      image: Data,
      description: "Analyzing methods for efficiently storing and manipulating data and algorithms to solve complex problems",
      category: "Advanced / Algorithmics and Data Structures",
    },

    {
      _id: "5",
      name: "Frontend Development",
      image: frontend,
      description: "Building interactive user interfaces using HTML, CSS, JavaScript, and modern frameworks like React or Vue.js.",
      category: "Frontend / Web Development",
    },

    {
      _id: "6",
      name: "Backend Development",
      image: backend,
      description: "Designing servers, APIs, and database management to make applications functional on the server side.",
      category: "Backend / Web Development",
    },

    {
      _id: "7",
      name: "Software Design and Architecture",
      image: softwar,
      description: "Implementing best practices to organize and structure code effectively in software projects.",
      category: "Advanced / Design and Architecture",
    },

    {
      _id: "8",
      name: "DevOps and CI/CD",
      image: CICD,
      description: "Automating development and deployment processes to enhance the quality and speed of deliveries.",
      category: "Technologies / Modern Tools",
    },

    {
      _id: "9",
      name: "Mobile Programming",
      image: mobile,
      description: "Developing applications for Android, iOS, or both using native tools or cross-platform frameworks like Flutter.",
      category: "Mobile Development / Applications",
    },

    {
      _id: "10",
      name: "Artificial Intelligence and Machine Learning",
      image: AI,
      description: " Introduction to machine learning concepts with tools to solve problems like image recognition or text processing.",
      category: "Advanced / Emerging Technologies",
      },

      {
        _id: "11",
        name: "Cybersecurity",
        image: cyber,
        description: "Learning the basics to secure applications and prevent common attacks using cryptography and verification tools",
        category: "Technologies / Security",

      },

      {
        _id:"12",
        name: "Advanced Programming",
        image: advance,
        description: "Exploring advanced topics like parallel programming, optimizations, and complex design patterns.",
        category: "Advanced / Advanced Concepts",
      },

      {
        _id: "13",
        name: "Version Control with Git and GitHub",
        image: Git,
        description: "Introduction to version control systems, focusing on Git and GitHub. Learn how to manage code changes, collaborate effectively, and track project history.",
        category: "Technologies / Tools",
      },

      {
        _id: "14",
        name: "APIs and RESTful Services",
        image: API,
        description: "Understanding APIs (Application Programming Interfaces) and designing RESTful services for seamless communication between systems.",
        category: "Backend / Web Development",
      },

      {
        _id: "15",
        name: " Projects and Applications",
        image: project,
        description: "Carrying out concrete projects to apply knowledge, explore open source, or participate in coding competitions.",
        category: "Projects / Practice and Implementation",
      },
];
