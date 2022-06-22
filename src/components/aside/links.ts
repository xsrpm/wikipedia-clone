type Page = {
  url : string,
  title? : string,
  name: string,
}

export const pages: Page[] = [
    {
      name: "Portada",
      url: "#",
      title:"Visitar la página principal [alt-shift-z]"
    },
    {
      name: "Portal de la comunidad",
      url: "#",
      title:"Acerca del proyecto, lo que puedes hacer, dónde encontrar información"
    },
  ];

  export const tools: Page[] = [
    {
      name: "Lo que enlaza aquí",
      url: "#",
      title:"Lista de todas las páginas de la wiki que enlazan aquí [alt-shift-j]"
    },
    {
      name: "Subir archivo",
      url: "#",
      title:"Subir archivos [alt-shift-u]"
    }
  ]

  export const printExport: Page[] = [
    {
      name: "Crear un libro",
      url: "#",
    },
    {
      name: "Descargar como PDF",
      url: "#",
    }
  ]

  export const projects : Page[] = [
    {
      name: "Wikimedia Commons",
      url: "#",
    },
    {
      name: "MediaWiki",
      url: "#",
    }
  ]

  export const languages : Page[] = [
    {
      name: "Español",
      url: "#",
      title:"Español"
    },
    {
      name: "English",
      url: "#",
      title:"English"
    }
  ]