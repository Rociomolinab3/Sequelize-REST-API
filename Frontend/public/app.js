async function enviarDatos() {
  const nombre = document.getElementById('nombreInput').value;
  const email = document.getElementById('emailInput').value;
  const telefono = document.getElementById('telefonoInput').value;

  try {
    const response = await fetch('http://localhost:3000/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, email, telefono }),
    });

    if (response.ok) {
      console.log('Datos enviados correctamente.');
      // Puedes hacer algo adicional aquí después de enviar los datos
    } else {
      console.error('Error al enviar datos.');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
}

// Agrega la función para el formulario de preinscripciones
document.getElementById('preinscripcionForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const response = await fetch('/api/preinscripciones', {
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
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});