'use strict';

(() => {
  // Check if #contact-form is present
  if (document.getElementById('contact-form') !== null) {
    // Set an on submit event
    document.getElementById('contact-form').onsubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const xhr  = new XMLHttpRequest();
      xhr.open('post', '/submit', true);
      xhr.send(data);
      // Update the send button to indicate progress
      document.getElementById('submit').textContent = 'Sending...';
      document.getElementById('submit').disabled = true;
      // Handle the response
      xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
          highlighter(JSON.parse(xhr.responseText));
        }
      };
    };
  }
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
      let input = document.getElementById(fields[i]);
      let label = input.previousElementSibling;
      input.className = '';
      label.className = '';
    }
    if (response.validator) {
      // // Remove any existing error classes
      // for (let i = 0; i < fields.length; i++) {
      //   let input = document.getElementById(fields[i]);
      //   let label = input.previousElementSibling;
      //   input.className = '';
      //   label.className = '';
      // }
      // Add classes to error items
      for (let i = 0; i < response.validator.length; i++) {
        let form = document.getElementById('contact-form');
        let input = document.getElementById(response.validator[i].param);
        let label = input.previousElementSibling;
        input.className = 'error-input';
        label.className = 'error-text';
        // Display form message
        if (response.validator.length === i + 1) {
          if (document.getElementById('form-message')) {
            document.getElementById('form-message').parentNode
            .removeChild(document.getElementById('form-message'));
          }
          form.insertAdjacentHTML('beforeend', `<p id="form-message" class="error-text">${response.validator[i].msg}</p>`);
        }
      }
    }
    if (response.status) {
      // // Remove any existing error classes
      // for (let i = 0; i < fields.length; i++) {
      //   let input = document.getElementById(fields[i]);
      //   let label = input.previousElementSibling;
      //   input.className = '';
      //   label.className = '';
      // }
      // // Remove any existing messages
      // if (document.getElementById('form-message')) {
      //   document.getElementById('form-message').parentNode
      //   .removeChild(document.getElementById('form-message'));
      // }
      // Format and display message
      if (response.status.success) {
        form.insertAdjacentHTML('beforeend', `<p id="form-message" class="success-text">${response.status.success}</p>`);
      }
      if (response.status.error) {
        form.insertAdjacentHTML('beforeend', `<p id="form-message" class="error-text">${response.status.error}</p>`);
      }
    }
  }
})();
