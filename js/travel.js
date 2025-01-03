document.addEventListener('DOMContentLoaded', () => {
    const existingOverlay = document.querySelector('.loading-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }
    const selectedLanguage = sessionStorage.getItem('selectedLanguage');
    
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

    const content = translations[selectedLanguage];
    const buttons = document.querySelectorAll('.lang-btn');
    
    if (content) {
        buttons[0].textContent = content.flightBooking;
        buttons[1].textContent = content.visaTransit;
        buttons[2].textContent = content.hotelReservation;
        buttons[3].textContent = content.tourismProgram;
    }

    const destinations = {
        flightBooking: "https://www.aircanada.com/home/us/en/aco/flights",
        visaTransit: "transit.html",
        hotelReservation: "https://www.booking.com/discover/country/ht.ar.html",
        tourismProgram: "tourism.html"
    };

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove any existing overlay before creating new one
            const existingOverlay = document.querySelector('.loading-overlay');
            if (existingOverlay) {
                existingOverlay.remove();
            }

            // Create new loading overlay
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
