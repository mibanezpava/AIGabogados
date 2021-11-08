function sendMessage (message) {
    window.InputEvent = window.Event || window.InputEvent;
  
    var event = new InputEvent('input', {
      bubbles: true
    });
  
    var textbox = document.querySelector('div._2S1VP');
  
    textbox.textContent = message;
    textbox.dispatchEvent(event);
  
    document.querySelector("button._35EW6").click();
  }