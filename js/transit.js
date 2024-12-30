document.addEventListener('DOMContentLoaded', () => {
    const selectedLanguage = sessionStorage.getItem('selectedLanguage');
    
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

    const content = translations[selectedLanguage];
    const buttons = document.querySelectorAll('.lang-btn');
    
    if (content) {
        buttons[0].textContent = content.germany;
        buttons[1].textContent = content.canada;
        buttons[2].textContent = content.america;
        buttons[3].textContent = content.uk;
    }

    const destinations = {
        germany: "https://www.auswaertiges-amt.de/de/service/fragenkatalog-node/33-airporttransitvisum-606472",
        canada: "https://www.canada.ca/en.html",
        america: "https://travel.state.gov/content/travel/en/us-visas/other-visa-categories/transit.html",
        uk: "https://www.gov.uk/transit-visa"
    };

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const loadingOverlay = document.createElement('div');
            loadingOverlay.className = 'loading-overlay';
            loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
            document.body.appendChild(loadingOverlay);

            const destination = Object.values(destinations)[index];
            
            setTimeout(() => {
                window.location.href = destination;
            }, 1500);
        });
    });
});
