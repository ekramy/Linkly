const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit);

function isValidHttpUrl(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
  return pattern.test(str);
}


function formSubmit (e){
    e.preventDefault();
    if(input.value === '') {
        errMsg.innerHTML = "Please enter somtheing";
        input.classList.add('border-red')
    }
    else if (!isValidHttpUrl(input.value)) {
          errMsg.innerHTML = "Please enter a valide URL";
        input.classList.add('border-red')
    }
    else {
          errMsg.innerHTML = "";
        input.classList.remove('border-red')
        alert('success')
    }
}