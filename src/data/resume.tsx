import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Gena Emmanuel Bottarlini",
  initials: "GB",
  url: "https://www.linkedin.com/in/genarobottarlini/",
  location: "Santa Fe, Argentina",
  locationLink: "https://maps.app.goo.gl/WSasfQ4tvMKpFsJb6",
  description:
    "Desarrollador Web Full Stack en formación constante, con experiencia en e-commerce y atención al cliente.",
  summary:
    "Apasionado por resolver problemas y crear soluciones digitales, especializado en React.js, Node.js y MongoDB. Actualmente aprendiendo SQL, MySQL y PHP para ampliar mi stack técnico.",
  avatarUrl: "me2.jpeg",
  skills: [
    // 🔷 Frontend principal
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "SCSS",
    "Material-UI",
    "Redux",

    // 🟩 Backend y base de datos
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "MySQL",
    "PHP",

    // 🚀 Herramientas y deploy
    "Docker",
    "Git & GitHub",
    "Firebase",
    "Netlify",

    // 🛠️ Complementarias
    "ChatGPT",
    "Microsoft Excel",
    "Canva",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" },
    {
      href: "/BOTTARLNI-GENARO-CV.pdf",
      icon: FileTextIcon,
      label: "Curriculum",
    },
  ],
  contact: {
    email: "bottarlini.99@outlook.com",
    tel: "+54 9 3447 459495",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GBottarlini",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/genarobottarlini/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Concesionario Nation",
      href: "",
      badges: [],
      location: "Santa Fe, Argentina",
      title: "Analista de E-commerce",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQE4Hrq7OOXa8A/company-logo_200_200/company-logo_200_200/0/1685630901491?e=1755734400&v=beta&t=u5keV-gxhRK2DatUQAgiL3t5EMJZNWglUkqAElvvg7Y",
      start: "Octubre 2024",
      end: "Actualidad",
      description:
        "Gestiono y optimizo publicaciones en MercadoLibre, mejorando visibilidad y facturación mediante SEO y contenido visual.",
    },
    {
      company: "KOL Accesorios",
      href: "",
      badges: [],
      location: "Santa Fe, Argentina",
      title: "Encargado de tienda",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQHH3cUzRxByLg/company-logo_200_200/company-logo_200_200/0/1666136186864/kol_accesorios_para_celulares_logo?e=1755734400&v=beta&t=WWcW8cIX8ETq7bwXYrHDO9FHEHg91AxwSO0J-t5dSRE",
      start: "Mayo 2024",
      end: "Noviembre 2024",
      description:
        "Lideré operaciones de sucursal, incrementando ventas en productos electrónicos en un 30 % y optimizando procesos de inventario y facturación.",
    },
    {
      company: "MAPFRE Asistencia",
      href: "",
      badges: [],
      location: "Santa Fe, Argentina",
      title: "Operador Telefónico",
      logoUrl:
        "https://www.mawdy.com.ar/media/mawdy-mapfre-worldwide-digital-assitance.png",
      start: "Noviembre 2023",
      end: "Febrero 2024",
      description:
        "Atendí consultas y reclamos de clientes de manera remota, documentando casos en CRM y mejorando tiempos de resolución.",
    },
  ],
  education: [
    {
      school: "CoderHouse",
      href: "https://www.coderhouse.com/ar/?pipe_source=google&pipe_medium=cpc&pipe_campaign=0&gad_source=1&gad_campaignid=12058006243&gbraid=0AAAAACoxfTJAgHeNoQpDGuFg3sj-EmiNh&gclid=CjwKCAjwx8nCBhAwEiwA_z__0xC3UFbE933UU0LCOOd6jxkrnsJUfwc3e1BojGMcCwu2N4cTK-y2QhoCsGUQAvD_BwE",
      degree: "Desarrollador Web Full Stack",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHy-rUushLaa7whsic-6agzKzK6CAN-Mbow&s",
      start: "Febrero 2024",
      end: "Abril 2025",
    },
    {
      school: "UNL - Ciencias Económicas",
      href: "https://www.unl.edu.ar/",
      degree: "Licenciatura en Administración (incompleta)",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQHYPsaxEHY6Ow/company-logo_100_100/company-logo_100_100/0/1630598431081/universidad_nacional_del_litoral_logo?e=1755734400&v=beta&t=QE05q69OFrckEzAmr88K52UPnBj6TXVOshCD9dAdKd0",
      start: "Marzo 2022",
      end: "Junio 2023",
    },
    {
      school: "Escuela Técnica N°1 Dr. Herminio J. Quirós",
      href: "",
      degree: "Técnico Mecánico",
      logoUrl:
        "https://scontent.fsfn6-1.fna.fbcdn.net/v/t39.30808-6/274237231_102324212399694_7142862473963578852_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JlwUALwM-bAQ7kNvwEw_XIo&_nc_oc=Adm2UO_kTpe58D-NZWpEcaT8loms4TzA2Sjph_6hh-mPqWJQaHoYScxFptu1YSX6TPkJvmMnxVXkn8K8FmluBXhz&_nc_zt=23&_nc_ht=scontent.fsfn6-1.fna&_nc_gid=x7eWg_vYXTnqwWoIB4om1Q&oh=00_AfPlzVdM4BzKiXVeQC7sll9GVgi5g0ZKvzlgTSVQpUMiGg&oe=68590732",
      start: "Marzo 2012",
      end: "Noviembre 2018",
    },
  ],
  projects: [
    {
      title: "Gestor de Clientes - Nation",
      href: "https://gestionclientessa.netlify.app",
      dates: "Junio 2025",
      active: true,
      description:
        "Aplicación Full Stack para gestionar campañas de marketing de neumáticos mediante filtros avanzados y sincronización en tiempo real con WebSocket.",
      technologies: [
        "HTML5",
        "Tailwind CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/frontNation",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/backNation",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web",
          href: "https://gestionclientessa.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/21d6kPfT/nationSA.png", 
      video: "", 
    },
    {
      title: "Festival de Música - Sitio Web",
      href: "https://github.com/GBottarlini/festivalMus",
      dates: "Junio 2025",
      active: false,
      description:
        "Landing page moderna para un festival musical. Diseño responsivo, galería interactiva, navegación fija y automatización con Gulp.",
      technologies: ["HTML5", "SCSS (SASS)", "JavaScript", "Gulp"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/festivalMus",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web",
          href: "https://festivapr.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/JWyXqQxh/festival-Mus.png", 
      video: "", 
    },
    {
      title: "Ipoint E-commerce SPA",
      href: "https://github.com/GBottarlini/ipoint-ecommerce",
      dates: "Febrero 2024 - Actualidad",
      active: true,
      description:
        "SPA de e-commerce con catálogo, carrito y pasarela de pagos usando React.js y Node.js.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Material-UI",
        "Sweetalert",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/ipoint-ecommerce",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web",
          href: "https://ipoint.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/G4YzBqfZ/Ipointstr.png",
      video: "",
    },
    {
      title: "Blog de Café",
      href: "https://github.com/GBottarlini/blog-cafe",
      dates: "Marzo 2024",
      active: false,
      description: "Maquetación responsive con HTML5 y CSS3 enfocada en UI/UX.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/blog-cafe",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web",
          href: "https://blogdecafepractice1.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/WWfz8dQs/blogCafe.png",
      video: "",
    },
    {
  title: "Portfolio Web (Versión Anterior)",
  href: "https://github.com/GBottarlini/Portfolio-Genaro-Bottarlini",
  dates: "Abril 2024",
  active: false,
  description:
    "Primera versión de mi portfolio personal, desarrollada con HTML, CSS y JavaScript vanilla. Incluye animaciones, sección de proyectos y contacto.",
  technologies: ["HTML5", "CSS3", "JavaScript"],
  links: [
    { type: "GitHub", href: "https://github.com/GBottarlini/Portfolio-Genaro-Bottarlini",icon: <Icons.github className="size-3" />, },
    { type: "Web", href: "https://gbottarlini.github.io/Portfolio-Genaro-Bottarlini/",icon: <Icons.globe className="size-3" />, }
  ],
  image: "https://i.ibb.co/1tHHBthN/cvViejo.png", 
  video: "",
}

  ],
} as const;
