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