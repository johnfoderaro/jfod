'use strict';
//TODO log/handle server response
//TODO highlight errors
//TODO sucess message, etc.
(() => {
  if (document.getElementById('contact-form') !== null) {
    document.getElementById('contact-form').onsubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const xhr  = new XMLHttpRequest();
      // Validate form
      if (validator(form)) {
        xhr.open('post', '/submit', true);
        xhr.send(data);
        console.log(xhr.response);
        console.log(xhr.responseText);
      }
    };
  }
  function validator(form) {
    let flag = true;
    const check = ['name', 'email', 'comment'];
    for (let i = 0; i < form.length; i++) {
      // Sanitize input

      // Check for something that resembles an email address
      if (form[i].name === 'email' && !/(.+)@(.+){2,}\.(.+){2,}/.test(form[i].value)) {
        flag = false;
      }
      // Check honey pot
      if (form[i].name === 'topic' && form[i].value.length > 0) {
        flag = false;
      }
      // Check visible fields for input
      for (let n = 0; n < check.length; n++) {
        if (form[i].value === '' && form[i].name === check[n]) {
          flag = false;
        }
      }
      // Return once we finish looping
      if (form.length === i + 1) {
        return flag;
      }
    }
  }
})();
