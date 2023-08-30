
const form = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');

// Add an event listener for the button click
loginButton.addEventListener('click', function () {
    // Manually trigger the form submission
    form.submit();

    // Redirect to another page after form submission
    window.location.href = "https://way.animahub.com.br/#/novaInscricao/2023-2";
});
