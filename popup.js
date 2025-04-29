// Fonction pour charger et afficher une citation depuis l'API
function chargerCitation() {
  fetch("https://zenquotes.io/api/random")
    .then(response => response.json())
    .then(data => {
      console.log("Réponse de l'API :", data);
      if (Array.isArray(data) && data[0].q && data[0].a) {
        const citationTexte = `"${data[0].q}" — ${data[0].a}`;
        document.getElementById('citation').textContent = citationTexte;
        localStorage.setItem('citation', citationTexte);
      } else {
        document.getElementById('citation').textContent = "Erreur dans le format de citation.";
      }
    })
    .catch(err => {
      console.log("Erreur :", err);
      document.getElementById('citation').textContent = "Erreur de chargement.";
    });
}

// Initialisation au chargement de la popup
window.onload = () => {
  const citation = localStorage.getItem('citation');
  document.getElementById('citation').textContent = citation || "Cliquez pour une citation !";

  document.getElementById('nouvelleCitation').addEventListener('click', chargerCitation);
};
