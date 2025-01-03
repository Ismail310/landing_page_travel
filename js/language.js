document.addEventListener('DOMContentLoaded', () => {
    const existingOverlay = document.querySelector('.loading-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove any existing overlay before creating new one
            const existingOverlay = document.querySelector('.loading-overlay');
            if (existingOverlay) {
                existingOverlay.remove();
            }

            const language = button.textContent.toLowerCase();
            sessionStorage.setItem('selectedLanguage', language);
            
            // Create new loading overlay
            const loadingOverlay = document.createElement('div');
            loadingOverlay.className = 'loading-overlay';
            loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
            document.body.appendChild(loadingOverlay);
            
            setTimeout(() => {
                window.location.href = 'description.html';
            }, 1500);
        });
    });
});
