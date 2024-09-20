const scriptURL = 'https://script.google.com/macros/s/AKfycbzq6mr3MtsgoefNX1JFBaceRiogfUBrQ5LMNm_bQcdxT8nBN8SA2kY22-C8zKc5C5ncIg/exec'; // Replace with your Google Apps Script URL
const form = document.getElementById('registrationForm');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);

    // Convert checkbox states to check or uncheck
    formData.set('course1', document.getElementById('course1').checked ? '✔️' : '❌');
    formData.set('course2', document.getElementById('course2').checked ? '✔️' : '❌');
    formData.set('course3', document.getElementById('course3').checked ? '✔️' : '❌');
    formData.set('course4', document.getElementById('course4').checked ? '✔️' : '❌');
    formData.set('course6', document.getElementById('course6').checked ? '✔️' : '❌');

    const signatureFile = document.getElementById('signature').files[0];
    if (signatureFile) {
        formData.append('signature', signatureFile);
    }

    fetch(scriptURL, { 
        method: 'POST', 
        body: formData 
    })
    .then(response => alert('Success! Your response has been recorded.'))
    .catch(error => console.error('Error!', error.message));
});
