document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.lang-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.textContent.toLowerCase();
            sessionStorage.setItem('selectedLanguage', language);
            
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
