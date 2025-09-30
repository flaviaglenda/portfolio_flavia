document.addEventListener("DOMContentLoaded", () => {
  const btnProjetos = document.getElementById("btnProjetos");
  const secaoProjetos = document.getElementById("section_projetos");

  btnProjetos.addEventListener("click", () => {
    secaoProjetos.scrollIntoView({
      behavior: "smooth", 
      block: "start"     
    });
  });
});
