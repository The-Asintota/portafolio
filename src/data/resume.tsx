import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Carlos Andres Aguirre Ariza",
  initials: "CA",
  url: "https://www.linkedin.com/in/genarobottarlini/",
  location: "Meta, Colombia",
  locationLink: "https://maps.app.goo.gl/NbPRPgrWaoMd6hQP9",
  description:
    "Desarrollador Web en formación constante.",
  summary:
    "Desarrollador web con experiencia en la creación de aplicaciones integrales, con mayor especialización en el desarrollo backend y conocimientos sólidos en frontend. Enfocado en diseñar soluciones escalables y eficientes, aporto experiencia en documentación, despliegues con Docker y la aplicación de buenas prácticas de desarrollo. Destaco por mi capacidad de análisis, resolución de problemas y colaboración en equipos multidisciplinarios, siempre con el objetivo de aportar valor y garantizar la calidad en cada proyecto.",
  avatarUrl: "https://res.cloudinary.com/ddujnmr9n/image/upload/v1756406405/1668276459680_xxr8hd.jpg",
  skills: [
    // 🔷 Frontend principal
    "React",
    "JavaScript",
    "HTML",
    "CSS",

    // 🟩 Backend y bases de datos
    "Python",
    "Django",
    "Django Rest Framework",
    "MongoDB",
    "PostgreSQL",

    // 🚀 Herramientas y deploy
    "Docker",
    "GitHub",
    "GitLab",
    "Git",
    "Railway",

    // 🛠️ Complementarias
    "Soft skills",
    "Analista de requerimientos",
  ],
  navbar: [
    {
      href: "/carlos_andres_aguirre_ariza_cv.pdf",
      icon: FileTextIcon,
      label: "CV",
    },
  ],
  contact: {
    email: "aguizandre.2803@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/The-Asintota",
        icon: Icons.github,
        navbar: true,
      },
      GitLab: {
        name: "GitLab",
        url: "https://gitlab.com/The-Asintota",
        icon: Icons.gitlab,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/carlosaguirredev/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Viavervit",
      href: "",
      badges: [],
      location: "Ecuador",
      title: "Software factory",
      logoUrl:
        "https://res.cloudinary.com/ddujnmr9n/image/upload/v1756233506/viavervit_otfpar.jpg",
      start: "Julio 2024",
      end: "Agosto 2025",
      description:
        "Trabajé en una empresa de desarrollo de software como desarrollador backend y analista de requerimientos, participando en el diseño de soluciones web, la documentación de proyectos y la implementación de despliegues con Docker. Colaboré con equipos multidisciplinarios aplicando metodologías ágiles y buenas prácticas para asegurar la calidad de los desarrollos.",
    },
  ],
  education: [
    {
      school: "Universidad Distrital Francisco José de Caldas",
      href: "https://www.udistrital.edu.co/inicio",
      degree: "Matemáticas",
      logoUrl:
        "https://res.cloudinary.com/ddujnmr9n/image/upload/v1756235132/universidad-distrital-francisco-jose-de-caldas-84587_se6mcp.png",
      start: "Junio 2018",
      end: "Diciembre 2019",
    },
    {
      school: "Servicio Nacional de Aprendizaje SENA",
      href: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
      degree: "Teconólogo en Análisis y Desarrollo de Software",
      logoUrl:
        "https://res.cloudinary.com/ddujnmr9n/image/upload/v1756237162/logo-de-SENA-png-Negro-300x300-1_mtuprt.jpg",
      start: "Abril 2023",
      end: "Actualidad",
    },
  ],
  projects: [
    {
      title: "Pricut - proyecto privado",
      href: "https://pricut.com",
      dates: "",
      active: true,
      description:
        "Pricut tiene como objetivo revolucionar y simplificar la contratación de servicios de corte computarizado de materiales, facilitando el encuentro entre profesionales y empresas que requieren soluciones de corte de alta precisión y los proveedores especializados en esta tecnología.",
      technologies: [
        "HTML5",
        "CSS",
        "React",
        "Django Rest Framework",
        "ezdxf",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Web",
          href: "https://pricut.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/ddujnmr9n/image/upload/v1756238438/Captura_ttsrby.png", 
      video: "", 
    },
  ],
} as const;
