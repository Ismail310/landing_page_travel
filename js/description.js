document.addEventListener('DOMContentLoaded', () => {
    const selectedLanguage = sessionStorage.getItem('selectedLanguage');
    
    const translations = {
        english: {
            warning: "Please note that this application is under surveillance",
            steps: [
                "1_Files are issued from your device with the license number and pass through the sponsoring tourism company",
                "2_Files are issued from the tourism company with the license number and sent to the Ministry of Tourism in Haiti",
                "3_The files you submitted are issued from the Ministry of Tourism with the designated codes then to their final destination"
            ],
            notice: "Please note that the operating tourism company is responsible for all information and work results provided through this application",
            acceptBtn: "Accept"
        },
        arabic: {
            warning: "يرجى العلم ان هذا التطبيق تحت المراقبة",
            steps: [
                "1_تصدر الملفات من جهازك مع رقم الترخيص و تمر عبر شركة السياحة الكفيلة",
                "2_تصدر الملفات من شركة السياحة مع رقم الترخيص وترسل الى وزارة السياحة في هايتي",
                "3_تصدر الملفات التي قمت بتقديمها من وزارة السياحة مع الاكواد المخصصة ثم الى وجهتها الاخيرة"
            ],
            notice: "يرجى مراعات ان الشركة السياحية المُشغلة هي المسؤولة عن جميع المعلومات و نتائج العمل المقدمة من خلال هذ التطبيق",
            acceptBtn: "قبول"
        },
        french: {
            warning: "Veuillez noter que cette application est sous surveillance",
            steps: [
                "1_Les fichiers sont émis depuis votre appareil avec le numéro de licence et passent par l'entreprise de tourisme sponsor",
                "2_Les fichiers sont émis depuis l'entreprise de tourisme avec le numéro de licence et envoyés au Ministère du Tourisme en Haïti",
                "3_Les fichiers que vous avez soumis sont émis par le Ministère du Tourisme avec les codes désignés puis envoyés à leur destination finale"
            ],
            notice: "Veuillez noter que l'entreprise touristique exploitante est responsable de toutes les informations et des résultats du travail fournis via cette application",
            acceptBtn: "Accepter"
        },
        español: {
            warning: "Tenga en cuenta que esta aplicación está bajo vigilancia",
            steps: [
                "1_Los archivos se emiten desde su dispositivo con el número de licencia y pasan por la empresa de turismo patrocinadora",
                "2_Los archivos se emiten desde la empresa de turismo con el número de licencia y se envían al Ministerio de Turismo en Haití",
                "3_Los archivos que presentó se emiten desde el Ministerio de Turismo con los códigos designados y luego se envían a su destino final"
            ],
            notice: "Tenga en cuenta que la empresa turística operadora es responsable de toda la información y los resultados del trabajo proporcionados a través de esta aplicación",
            acceptBtn: "Aceptar"
        },
        हिंदी: {
            warning: "कृपया ध्यान दें कि यह एप्लिकेशन निगरानी के अधीन है",
            steps: [
                "1_फाइलें आपके डिवाइस से लाइसेंस नंबर के साथ जारी की जाती हैं और प्रायोजक पर्यटन कंपनी के माध्यम से गुजरती हैं",
                "2_फाइलें पर्यटन कंपनी से लाइसेंस नंबर के साथ जारी की जाती हैं और हैती के पर्यटन मंत्रालय को भेजी जाती हैं",
                "3_आपके द्वारा प्रस्तुत फाइलें पर्यटन मंत्रालय से निर्दिष्ट कोड के साथ जारी की जाती हैं और फिर उनकी अंतिम गंतव्य तक पहुंचती हैं"
            ],
            notice: "कृपया ध्यान दें कि ऑपरेटिंग पर्यटन कंपनी इस एप्लिकेशन के माध्यम से प्रदान की गई सभी जानकारी और कार्य परिणामों के लिए जिम्मेदार है",
            acceptBtn: "स्वीकार करें"
        }        
    };

    const content = translations[selectedLanguage];
    
    if (content) {
        document.querySelector('.warning-text').textContent = content.warning;
        document.querySelector('.steps-text').innerHTML = content.steps.join('<br><br>');
        document.querySelector('.notice-text').textContent = content.notice;
        document.querySelector('.accept-btn').textContent = content.acceptBtn;
    }

    document.querySelector('.accept-btn').addEventListener('click', () => {
        window.location.href = 'licence.html';
    });
});
