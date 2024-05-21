// script.js

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    var form = event.target;
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var message = form.elements["message"].value;
  
    // Validar los campos del formulario
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
  
    // Crear el contenido del correo electrónico
    var subject = "Nuevo mensaje de la landing page";
    var body = "Nombre: " + name + "\nCorreo electrónico: " + email + "\nMensaje: " + message;
  
    // Enviar el correo electrónico
    var mailtoLink = "mailto:sebastianalejandroherrera@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
  
    // Mostrar una alerta de éxito
    alert("El correo electrónico ha sido enviado con éxito.");
    form.reset();
  });
  