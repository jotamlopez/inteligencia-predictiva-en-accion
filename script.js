(() => {
  "use strict";

  // Mantiene un solo capítulo abierto. Sin JavaScript, details sigue funcionando.
  const chapters = document.querySelectorAll("#chapter-list .chapter");
  chapters.forEach((chapter) => {
    chapter.addEventListener("toggle", () => {
      if (!chapter.open) return;
      chapters.forEach((other) => {
        if (other !== chapter && other.open) other.open = false;
      });
    });
  });

  const copyButton = document.querySelector("[data-copy]");
  const status = document.querySelector("#copy-status");
  if (!copyButton || !status) return;

  copyButton.addEventListener("click", async () => {
    const example = document.getElementById(copyButton.dataset.copy);
    if (!example) return;
    try {
      if (!navigator.clipboard) throw new Error("Portapapeles no disponible");
      await navigator.clipboard.writeText(example.textContent);
      copyButton.textContent = "Copiado";
      status.textContent = "Esquema copiado al portapapeles.";
    } catch {
      copyButton.textContent = "Selecciona el texto";
      status.textContent = "No se pudo copiar. Selecciona el texto del ejemplo manualmente.";
    }
  });
})();
