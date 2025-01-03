document.addEventListener('DOMContentLoaded', () => {
    // Set language and document attributes
    const selectedLanguage = sessionStorage.getItem('selectedLanguage');
    document.documentElement.setAttribute('lang', selectedLanguage);
    const translations = {
        english: {
            title: "Enter Your License Key",
            placeholder: "Enter license key here",
            submitBtn: "Submit",
            noLicense: "Don't have a license",
            contactUs: "Contact Us",
            priceInfo: "You can get a valid 6-month license for 2300 Dollares",
            successMessage: "License Verified Successfully!",
            errorMessage: "Invalid license key!"
        },
        arabic: {
            title: "أدخل مفتاح الترخيص",
            placeholder: "أدخل مفتاح الترخيص هنا",
            submitBtn: "إرسال",
            noLicense: "!لا تمتلك ترخيص",
            contactUs: "تواصل بنا",
            priceInfo: "يمكنك الحصول على ترخيص صالح 6 شهور مقابل 2300 دولار",
            successMessage: "!تم التحقق من الترخيص بنجاح",
            errorMessage: "!مفتاح الترخيص غير صالح"
        },
        french: {
            title: "Entrez votre clé de licence",
            placeholder: "Entrez la clé de licence ici",
            submitBtn: "Soumettre",
            noLicense: "Vous n'avez pas de licence ",
            contactUs: "Contactez-nous",
            priceInfo: "Vous pouvez obtenir une licence valide de 6 mois pour 2300 Dollares",
            successMessage: "Licence vérifiée avec succès !",
            errorMessage: "Clé de licence invalide !"
        },        
        español: {
            title: "Ingrese su clave de licencia",
            placeholder: "Ingrese la clave de licencia aquí",
            submitBtn: "Enviar",
            noLicense: "¡No tienes licencia",
            contactUs: "Contáctenos",
            priceInfo: "Puede obtener una licencia válida de 6 meses por 2300 Dollares",
            successMessage: "¡Licencia verificada con éxito!",
            errorMessage: "¡Clave de licencia no válida!"
        },
        हिंदी: {
            title: "अपना लाइसेंस कुंजी दर्ज करें",
            placeholder: "यहां लाइसेंस कुंजी दर्ज करें",
            submitBtn: "सबमिट करें",
            noLicense: "लाइसेंस नहीं है!",
            contactUs: "हमसे संपर्क करें",
            priceInfo: "आप $2300 में 6 महीने के लिए वैध लाइसेंस प्राप्त कर सकते हैं",
            successMessage: "लाइसेंस सफलतापूर्वक सत्यापित किया गया!",
            errorMessage: "अमान्य लाइसेंस कुंजी!"
        }
                
    };

    const content = translations[selectedLanguage] || translations.english;
    
    // Update UI elements with translated content
    if (content) {
        const elements = {
            '.licence-text': 'title',
            '.licence-input': 'placeholder',
            '.submit-btn': 'submitBtn',
            '.no-license': 'noLicense',
            '.contact-us': 'contactUs',
            '.price-info': 'priceInfo'
        };

        Object.entries(elements).forEach(([selector, contentKey]) => {
            const element = document.querySelector(selector);
            if (element) {
                if (selector === '.licence-input') {
                    element.placeholder = content[contentKey];
                } else {
                    element.textContent = content[contentKey];
                }
            }
        });
    }

    // Handle license submission
    document.querySelector('.submit-btn').addEventListener('click', () => {
        const licenseKey = document.querySelector('.licence-input').value;
        const successDialog = document.getElementById('successDialog');

        if (licenseKey === 'HS751K182H') {
            // Show success message
            successDialog.style.display = 'block';
            successDialog.querySelector('p').textContent = content.successMessage;
            
            // Create loading overlay for navigation
            const loadingOverlay = document.createElement('div');
            loadingOverlay.className = 'loading-overlay';
            loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
            document.body.appendChild(loadingOverlay);
            
            // Navigate after delay
            setTimeout(() => {
                window.location.href = 'travel.html';
            }, 3000);
        } else {
            alert(content.errorMessage);
        }
    });
});
