function submitApplication(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const cardType = document.querySelector('input[name="card"]:checked').value; // Get selected card type
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Display a success message (you can also send the data to a server here)
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    successMessage.innerHTML = `<h4>Application Submitted!</h4>
                                 <p>Thank you, ${name}. Your application for the Capital Express ${cardType} Card has been submitted.</p>
                                 <p>We will contact you at ${email} and ${phone}.</p>`;
    
    // Clear the form
    document.getElementById('application-form').reset();
}
