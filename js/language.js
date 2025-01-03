document.addEventListener('DOMContentLoaded', () => {
    // Clear any existing overlay on page load
    const existingOverlay = document.querySelector('.loading-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    // Get all language buttons
    const buttons = document.querySelectorAll('.lang-btn');
    
    // Add click handlers to buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Store selected language in session storage
            const language = button.textContent.toLowerCase();
            sessionStorage.setItem('selectedLanguage', language);
            
            // Create loading overlay for navigation
            const loadingOverlay = document.createElement('div');
            loadingOverlay.className = 'loading-overlay';
            loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
            document.body.appendChild(loadingOverlay);
            
            // Navigate to description page after delay
            setTimeout(() => {
                window.location.href = 'description.html';
            }, 1500);
        });
    });
});
