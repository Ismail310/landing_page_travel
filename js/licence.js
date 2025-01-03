document.addEventListener('DOMContentLoaded', () => {
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

    const content = translations[selectedLanguage];
    
    if (content) {
        document.querySelector('.licence-text').textContent = content.title;
        document.querySelector('.licence-input').placeholder = content.placeholder;
        document.querySelector('.submit-btn').textContent = content.submitBtn;
        document.querySelector('.no-license').textContent = content.noLicense;
        document.querySelector('.contact-us').textContent = content.contactUs;
        document.querySelector('.price-info').textContent = content.priceInfo;
    }

    document.querySelector('.submit-btn').addEventListener('click', () => {
        const licenseKey = document.querySelector('.licence-input').value;
        const successDialog = document.getElementById('successDialog');
        const selectedLanguage = sessionStorage.getItem('selectedLanguage') || 'english'; // Fallback to English
        const content = translations[selectedLanguage] || translations.english; // Fallback to English translations
        
        if (licenseKey === 'HS751K182H') {
            successDialog.style.display = 'block';
            successDialog.querySelector('p').textContent = content.successMessage;
            
            setTimeout(() => {
                window.location.href = 'travel.html';
            }, 3000);
        } else {
            alert(content.errorMessage);
        }
    });
});
