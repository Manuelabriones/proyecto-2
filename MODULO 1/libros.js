// Crear objeto libro
const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anio: 1967,
  estado: "disponible",

  // Lista de capítulos
  capitulos: [
    "Capítulo 1",
    "Capítulo 2",
    "Capítulo 3"
  ],

  // Método para describir el libro
  describirLibro: function () {
    console.log(
      `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
    );
  },

  // Método para agregar capítulos
  agregarCapitulo: function (capitulo) {
    this.capitulos.push(capitulo);
    console.log(`Capítulo "${capitulo}" agregado.`);
  },

  // Método para eliminar capítulos
  eliminarCapitulo: function (capitulo) {
    this.capitulos = this.capitulos.filter(c => c !== capitulo);
    console.log(`Capítulo "${capitulo}" eliminado.`);
  }
};

// Usar métodos
libro.describirLibro();

libro.agregarCapitulo("Capítulo 4");

libro.eliminarCapitulo("Capítulo 2");

console.log(libro.capitulos);