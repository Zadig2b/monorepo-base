// script.js - Généré automatiquement

const projects = [
  {
    "name": "Exemple projet1",
    "folder": "exemple_projet1",
    "path": "projets\\exemple_projet1\\index.html"
  }
];

const grid = document.getElementById("projects-grid");

projects.forEach(({ name, folder, path }) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = `
    <div class="card card-project h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${name}</h5>
        <p class="card-text text-muted">Voir le projet "${folder}"</p>
        <a href="${path}" class="btn btn-primary mt-auto">Ouvrir</a>
      </div>
    </div>
  `;
  grid.appendChild(col);
});
