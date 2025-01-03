document.addEventListener('DOMContentLoaded', () => {
    // Clear any existing overlay when page loads
    const existingOverlay = document.querySelector('.loading-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    // Get selected language from session storage
    const selectedLanguage = sessionStorage.getItem('selectedLanguage');
    
    // Define translations object with all supported languages
    const translations = {
        english: {
            germany: "Germany",
            canada: "Canada", 
            america: "America",
            uk: "United Kingdom"
        },
        arabic: {
            germany: "ألمانيا",
            canada: "كندا",
            america: "أمريكا", 
            uk: "المملكة المتحدة"
        },
        french: {
            germany: "Allemagne",
            canada: "Canada",
            america: "États-Unis",
            uk: "Royaume-Uni"
        },
        español: {
            germany: "Alemania", 
            canada: "Canadá",
            america: "Estados Unidos",
            uk: "Reino Unido"
        },
        indie: {
            germany: "जर्मनी",
            canada: "कनाडा",
            america: "अमेरिका",
            uk: "यूनाइटेड किंगडम"
        }
    };

    // Get content for selected language
    const content = translations[selectedLanguage];
    const buttons = document.querySelectorAll('.lang-btn');
    
    // Update button text if content exists
    if (content) {
        buttons[0].textContent = content.germany;
        buttons[1].textContent = content.canada;
        buttons[2].textContent = content.america;
        buttons[3].textContent = content.uk;
    }

    // Define destination URLs
    const destinations = {
        germany: "https://www.auswaertiges-amt.de/de/service/fragenkatalog-node/33-airporttransitvisum-606472",
        canada: "https://www.canada.ca/en.html",
        america: "https://travel.state.gov/content/travel/en/us-visas/other-visa-categories/transit.html",
        uk: "https://www.gov.uk/transit-visa"
    };

    // Add click handlers to buttons
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Create loading overlay only when button is clicked
            const loadingOverlay = document.createElement('div');
            loadingOverlay.className = 'loading-overlay';
            loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
            document.body.appendChild(loadingOverlay);

            // Get destination URL based on button index
            const destination = Object.values(destinations)[index];
            
            // Navigate after delay
            setTimeout(() => {
                window.location.href = destination;
            }, 1500);
        });
    });
});
