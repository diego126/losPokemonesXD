const courses = [
  {
    id: 1,
    title: "Ambientes de Desarrollo de Software",
    slug: "ambientes-desarrollo-software",
    professorId: 1,
    category: "Software Engineering"
  },
  {
    id: 2,
    title: "Ingeniería de Requisitos",
    slug: "ingenieria-requisitos",
    professorId: 2,
    category: "Software Engineering"
  },
  {
    id: 3,
    title: "Proceso de Ingeniería de Software",
    slug: "proceso-ingenieria-software",
    professorId: 3,
    category: "Software Engineering"
  },
  {
    id: 4,
    title: "Gestión de Proyectos de Software",
    slug: "gestion-proyectos-software",
    professorId: 4,
    category: "Software Engineering"
  },
  {
    id: 5,
    title: "Diseño y Construcción de Software",
    slug: "diseño-construccion-software",
    professorId: 1,
    category: "Software Engineering"
  },
  {
    id: 6,
    title: "Arquitectura de Software",
    slug: "arquitectura-software",
    professorId: 5,
    category: "Software Engineering"
  },
  {
    id: 7,
    title: "Big Data",
    slug: "big-data",
    professorId: 6,
    category: "Software Engineering"
  },
  {
    id: 8,
    title: "Metodología de Investigación",
    slug: "metodologia-investigacion",
    professorId: 7,
    category: "Research"
  },
  {
    id: 9,
    title: "Calidad del Proceso de Software",
    slug: "calidad-proceso-software",
    professorId: 8,
    category: "Software Engineering"
  },
  {
    id: 10,
    title: "Gestión de la Configuración y Mantenimiento de Software",
    slug: "gestion-configuracion-mantenimiento-software",
    professorId: 5,
    category: "Software Engineering"
  },
  {
    id: 11,
    title: "Seminario de Investigación I",
    slug: "seminario-investigacion-i",
    professorId: 8,
    category: "Research"
  },
  {
    id: 12,
    title: "Tecnología Cloud Computing (Electivo)",
    slug: "tecnologia-cloud-computing",
    professorId: 9,
    category: "Software Engineering"
  },
  {
    id: 13,
    title: "Desarrollo de Software para Dispositivos",
    slug: "desarrollo-software-dispositivos",
    professorId: 1,
    category: "Software Engineering"
  },
  {
    id: 14,
    title: "Fábrica de Software",
    slug: "fabrica-software",
    professorId: 10,
    category: "Software Engineering"
  },
  {
    id: 15,
    title: "Seminario de Investigación II",
    slug: "seminario-investigacion-ii",
    professorId: 11,
    category: "Research"
  },
  {
    id: 16,
    title: "Gestión de Procesos de Negocio (Electivo)",
    slug: "gestion-procesos-negocio",
    professorId: 12,
    category: "Software Engineering"
  }
];

const professors = [
  { id: 1, name: "Efrain Bautista", slug: "efrain-bautista", grado:"Magister Ing. software" },
  { id: 2, name: "Wilder Inga", slug: "wilder-inga", grado:"Magister Ing. software" },
  { id: 3, name: "Amador Izarra", slug: "amador-izarra", grado:"Magister Ing. software" },
  { id: 4, name: "Elmer Zapata", slug: "elmer-zapata", grado:"Magister Ing. software" },
  { id: 5, name: "Félix Santos", slug: "felix-santos", grado:"Magister Ing. software" },
  { id: 6, name: "Luis Saavedra", slug: "luis-saavedra", grado:"Magister Ing. software" },
  { id: 7, name: "Nora La Serna", slug: "nora-laserna", grado:"Magister Ing. software" },
  { id: 8, name: "Lenis Wong", slug: "lenis-wong", grado:"Magister Ing. software" },
  { id: 9, name: "Manuel Caldas", slug: "manuel-caldas", grado:"Magister Ing. software" },
  { id: 10, name: "Luis Castillo", slug: "luis-castillo", grado:"Magister Ing. software" },
  { id: 11, name: "David Mauricio", slug: "david-mauricio", grado:"Magister Ing. software" },
  { id: 12, name: "Marco Rivas", slug: "marco-rivas", grado:"Magister Ing. software" },
];

const newCourse = {
  id: null,
  title: "",
  professorId: null,
  category: ""
};

const newProfessor = {
  id: null,
  name: "",
  grado:""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  newProfessor,
  courses,
  professors
};