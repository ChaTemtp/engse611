document.addEventListener('DOMContentLoaded', function() {
    // Select all the links in the navigation menu
    const links = document.querySelectorAll('nav a');
    
    // Loop through each link and add a click event listener
    links.forEach(function(link) {
        // Add a click handler to each link
        link.addEventListener('click', function(event) {
            // If the clicked link is not the Google link, prevent the default behavior
            if (this.href !== "http://google.com") {
                event.preventDefault();  // Prevent navigation
                alert(this.textContent);  // Show an alert with the link text
            }
        });
    });
});
