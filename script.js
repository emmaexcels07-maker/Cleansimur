const form = document.querySelector('#enquiry-form');
const message = document.querySelector('.form-message');
form?.addEventListener('submit', (event) => { event.preventDefault(); if (!form.checkValidity()) return; const size = new FormData(form).get('size'); message.textContent = `Your ${size} enquiry is ready. Connect an approved Cleansimur order channel to receive submissions.`; });
