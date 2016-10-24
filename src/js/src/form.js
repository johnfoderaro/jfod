'use strict';

function submitForm(formItems){
  const xhr = new XMLHttpRequest();
  xhr.send (new FormData (formItems));
  return false;
}
