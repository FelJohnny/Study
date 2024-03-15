"use strict";
document.body.style.background = "#3c3c3c";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
    console.log(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
      
      <h1 style="color:${color};">${curso.nome}</h1>
      <h2>horas: ${curso.aulas}</h2>
      <h3> Tags: ${curso.tags.map(tag => ` ${tag}`)}</h3>
      <h2>Nivel: ${curso.nivel}</h2>
      `;
    });
}
