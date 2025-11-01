document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const productsGrid = document.querySelector('.products-grid');
  const productCards = document.querySelectorAll('.product-card');

  // Crear mensaje de "Modelo no existente" solo si no existe ya
  let noResultsMessage = document.getElementById('no-results-message');
  if (!noResultsMessage) {
    noResultsMessage = document.createElement('div');
    noResultsMessage.id = 'no-results-message';
    noResultsMessage.textContent = 'Modelo no existente';
    noResultsMessage.style.display = 'none';
    noResultsMessage.style.gridColumn = '1 / -1';
    noResultsMessage.style.textAlign = 'center';
    noResultsMessage.style.color = 'red';
    noResultsMessage.style.fontSize = '1.4em';
    noResultsMessage.style.padding = '1.5rem';
    productsGrid.appendChild(noResultsMessage);
  }

  function filterProducts() {
    const term = searchInput.value.trim().toLowerCase();
    let found = false;

    productCards.forEach(card => {
      const titleElement = card.querySelector('.product-info h3');
      if (titleElement) {
        const titleText = titleElement.textContent.toLowerCase();
        if (titleText.includes(term)) {
          card.style.display = 'block';
          found = true;
        } else {
          card.style.display = 'none';
        }
      }
    });

    // Mostrar u ocultar mensaje
    if (term === '') {
      noResultsMessage.style.display = 'none';
    } else {
      noResultsMessage.style.display = found ? 'none' : 'block';
    }
  }

  // Vincular el evento
  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }
});