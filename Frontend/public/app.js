document.getElementById('preinscripcionForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Desactivar el botón después de hacer clic
  document.getElementById('submitButton').disabled = true;

  const formData = new FormData(e.target);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const response = await fetch('http://localhost:3000/api/preinscripciones', {  // Ruta completa al backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    });

    if (response.ok) {
      alert('Preinscripción exitosa');
    } else {
      const data = await response.json();
      alert(`Error: ${data.error} ` );
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error de red. Por favor, inténtalo de nuevo.');
  } finally {
    // Habilitar el botón después de la solicitud, ya sea exitosa o con error
    document.getElementById('submitButton').disabled = false;
  }
});





