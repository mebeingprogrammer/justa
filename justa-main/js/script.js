document.addEventListener("DOMContentLoaded", function() {
   // Selecciona todas las tarjetas
   const cards = document.querySelectorAll('.Card');

   // Recorre cada tarjeta
   cards.forEach(card => {
      // Selecciona el video dentro de la tarjeta
      const video = card.querySelector('video');
      
      // Define el tiempo en el que debe quedarse antes de reproducirse
      const startTime = 7.2;  // Cambia esto por el tiempo en segundos (por ejemplo, 5 segundos)
      
      // Pausa el video al inicio y lo pone en el tiempo específico
      video.pause();
      video.currentTime = startTime;  // Cambia esto para el fotograma deseado
      
      // Reproduce el video cuando el mouse pasa sobre la tarjeta
      card.addEventListener('mouseover', () => {
         video.play();  // Reproducir cuando el mouse entra
      });
      
      // Pausa el video y lo reinicia al tiempo especificado cuando el mouse se aleja
      card.addEventListener('mouseout', () => {
         video.pause();  // Pausar cuando el mouse sale
         video.currentTime = startTime;  // Volver al tiempo específico
      });
   });
});
