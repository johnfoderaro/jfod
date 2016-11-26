'use strict';

(() => {
  // Set an on submit event
  document.getElementById('contact-form').onsubmit = (event) => {
    event.preventDefault();
    // Cache some constants
    const form = event.target;
    const data = new FormData(form);
    const xhr  = new XMLHttpRequest();
    // Set post end-point
    xhr.open('post', '/submit', true);
    // Send data
    xhr.send(data);
    // Update the send button to indicate progress
    document.getElementById('submit').textContent = 'Sending...';
    document.getElementById('submit').disabled = true;
    // Handle the response
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        // Highlight fields and change button depending
        // upon the response data
        highlighter(JSON.parse(xhr.responseText));
      }
    };
  };
  function highlighter(response) {
    const form = document.getElementById('contact-form');
    const fields = ['name', 'email', 'comment'];
    // Remove any existing messages
    if (document.getElementById('form-message')) {
      document.getElementById('form-message').parentNode
      .removeChild(document.getElementById('form-message'));
    }
    // Change send button back to normal
    document.getElementById('submit').textContent = 'Send';
    document.getElementById('submit').disabled = false;
    // Remove any existing error classes
    for (let i = 0; i < fields.length; i++) {
      const input = document.getElementById(fields[i]);
      const label = input.previousElementSibling;
      input.className = '';
      label.className = '';
    }
    // Highlight invalid input fields
    if (response.validator) {
      // Add classes to error items
      for (let i = 0; i < response.validator.length; i++) {
        const form = document.getElementById('contact-form');
        const input = document.getElementById(response.validator[i].param);
        const label = input.previousElementSibling;
        input.className = 'error-input';
        label.className = 'error-text';
        // Display form error message if necessary
        if (response.validator.length === i + 1) {
          // Clear existing form essages
          if (document.getElementById('form-message')) {
            document.getElementById('form-message').parentNode.removeChild(document.getElementById('form-message'));
          }
          // Add error message
          form.insertAdjacentHTML('beforeend', `<p id="form-message" class="error-text">${response.validator[i].msg}</p>`);
        }
      }
    }
    // Format and display error or sucess message once submitted
    if (response.status) {
      if (response.status.success) {
        form.insertAdjacentHTML('beforeend', `<p id="form-message" class="success-text">${response.status.success}</p>`);
      }
      if (response.status.error) {
        form.insertAdjacentHTML('beforeend', `<p id="form-message" class="error-text">${response.status.error}</p>`);
      }
    }
  }
})();
