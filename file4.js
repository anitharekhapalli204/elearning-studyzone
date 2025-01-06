// Handle form submission
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected rating
    const rating = document.querySelector('input[name="rating"]:checked');
    const comments = document.getElementById('comments').value;

    // Validate form
    if (!rating) {
        alert("Please select a rating.");
        return;
    }
    if (!comments.trim()) {
        alert("Please provide your feedback.");
        return;
    }

    // Simulate form submission
    console.log('Rating:', rating.value);
    console.log('Comments:', comments);

    // Show success message
    document.getElementById('response-message').style.display = 'block';
    
    // Reset the form after submission
    document.getElementById('feedback-form').reset();
    document.querySelector('.stars label').style.color = '#d3d3d3'; // Reset star color
});
