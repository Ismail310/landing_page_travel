window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Clear any existing overlay on page load
    const existingOverlay = document.querySelector('.loading-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    // Get selected language from session storage
    const selectedLanguage = sessionStorage.getItem('selectedLanguage');
    
    // Define translations for all supported languages
    const translations = {
        english: {
            flightBooking: "Flight Booking",
            visaTransit: "Visa Transit",
            hotelReservation: "Hotel Reservation",
            tourismProgram: "Tourism Program"
        },
        arabic: {
            flightBooking: "حجز الطيران",
            visaTransit: "تأشيرة العبور",
            hotelReservation: "حجز الفنادق",
            tourismProgram: "البرنامج السياحي"
        },
        french: {
            flightBooking: "Réservation de Vol",
            visaTransit: "Visa de Transit",
            hotelReservation: "Réservation d'Hôtel",
            tourismProgram: "Programme Touristique"
        },
        español: {
            flightBooking: "Reserva de Vuelos",
            visaTransit: "Visa de Tránsito",
            hotelReservation: "Reserva de Hotel",
            tourismProgram: "Programa Turístico"
        },
        हिंदी: {
            flightBooking: "उड़ान बुकिंग",
            visaTransit: "वीजा ट्रांजिट",
            hotelReservation: "होटल बुकिंग",
            tourismProgram: "पर्यटन कार्यक्रम"
        }
    };

    // Get content for selected language
    const content = translations[selectedLanguage];
    const buttons = document.querySelectorAll('.lang-btn');
    
    // Update button text if content exists
    if (content) {
        const buttonTexts = ['flightBooking', 'visaTransit', 'hotelReservation', 'tourismProgram'];
        buttonTexts.forEach((key, index) => {
            buttons[index].textContent = content[key];
        });
    }

    // Define destination URLs
    const destinations = {
        flightBooking: "https://www.aircanada.com/home/us/en/aco/flights",
        visaTransit: "transit.html",
        hotelReservation: "https://www.booking.com/discover/country/ht.ar.html",
        tourismProgram: "tourism.html"
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
