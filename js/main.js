'use strict'; //The "use strict" directive switches the engine to the “modern” mode, changing the behavior of some built-in features

// Get Access to the DOM

const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');
const commentForm = document.getElementById('comment-form');


submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    sidebar.textContent = 'Hi there, ' + firstNameInput.value + ' ' + lastNameInput.value;
    commentForm.reset();
});