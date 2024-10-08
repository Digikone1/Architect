window.addEventListener('load', function() {
            // First, show the content
            document.getElementById('content').style.display = 'block';

            // Then, after 1 second, fade out the loading page using visibility and opacity
            setTimeout(function() {
                const loadingPage = document.getElementById('loading-page');
                loadingPage.style.opacity = '0'; // Fade out effect
                loadingPage.style.visibility = 'hidden'; // Hide visibility
            }, 1000); // Wait 5 seconds before hiding the loading page
        });