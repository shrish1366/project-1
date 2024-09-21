document.getElementById('contactForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevents the default form submission  

    // Placeholder: you can add form submission logic here.  
    alert('Thank you for your message! I will get back to you soon.');  
    this.reset(); // Reset the form fields  
});