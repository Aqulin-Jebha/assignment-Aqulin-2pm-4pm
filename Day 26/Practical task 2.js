function showNotification(message, delay) {
  setTimeout(() => {
    console.log("Notification:", message);
  }, delay);
}

showNotification("You have a new message!", 3000);
