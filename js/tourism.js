window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};

// Add smooth scrolling for better user experience
document.addEventListener('DOMContentLoaded', function() {
    // Translations object for all supported languages
    const translations = {
        english: {
            title: "For Tourism Services",
            mainText: `The tourism program is very important and the first thing you will be asked about when applying for a visa or at border control is the reason for your trip, and the tourism program explains everything.
            Please note that obtaining a visa does not mean approval to enter the country if border officers are not convinced of your reason for entry.
            The importance of the tourism program lies in facilitating the visa acquisition process or country entry, as it serves as a comprehensive guide demonstrating the traveler's intention for temporary visits for tourism purposes only. The program shows details of the planned trip, including arrival and departure dates, daily activities schedule, and pre-booked accommodations. These details enhance the confidence of visa-granting authorities that the traveler has specific and well-planned intentions, and their purpose is limited to tourism and returning after the trip ends. Additionally, the program helps clarify the traveler's financial ability to cover trip costs, which is considered an important element in visa granting decisions`,
            contactText1Line1: "We can provide a trip system and help you",
            contactText1Line2: "with all procedures and reservations",
            contactText2: "Contact us via official email",
            email: "info@piblikhub.com"
        },
        arabic: {
            title: "للخدمات السياحية",
            mainText: "يُعد البرنامج السياحي مهم جداَ و اول شيئ سيتم سؤالك عنه لدى التقديم على الفيزا او لدى ضباط الحدود هوا سبب رحلتك و البرنامج السياحي يوضح كل شيئ يرجى العلم ان حصولك على الفيزا لايعني ابدا الموافقة على دخولك للدولة في حال لم يقتنع ضباط الحدود بسبب دخولك تكمن أهمية البرنامج السياحي في تسهيل عملية الحصول على الفيزا،او لدخول البلد حيث يُعَد بمثابة دليل شامل يُبرهن على نية المسافر للزيارة المؤقتة لغرض السياحة فقط. يُظهر البرنامج تفاصيل الرحلة المخطط لها، بما في ذلك تواريخ الوصول والمغادرة، وجدول الأنشطة اليومية، وأماكن الإقامة المحجوزة مسبقًا. هذه التفاصيل تعزز من ثقة السلطات المعنية بمنح الفيزا في أن المسافر لديه خطط محددة ومُحكمة، وأن نيته تنحصر في السياحة والعودة بعد انتهاء الرحلة. بالإضافة إلى ذلك، يساهم البرنامج في توضيح القدرة المالية للمسافر على تغطية تكاليف الرحلة، مما يُعتبر عنصرًا مهمًا في قرارات منح الفيزا.",
            contactText1Line1: "يمكننا تقديم نظام للرحلة و مساعدتك",
            contactText1Line2: "في جميع ألأجرات و الحجوزات",
            contactText2: "تواصل بنا عبر ألأيميل الرسمي",
            email: "info@piblikhub.com"
        },
        french: {
            title: "Pour Services Touristiques",
            mainText: `Le programme touristique est très important et la première chose qui vous sera demandée lors de la demande de visa ou au contrôle des frontières est la raison de votre voyage, et le programme touristique explique tout.
            Veuillez noter que l'obtention d'un visa ne signifie pas l'approbation d'entrée dans le pays si les agents des frontières ne sont pas convaincus de votre motif d'entrée.
            L'importance du programme touristique réside dans la facilitation du processus d'acquisition du visa ou d'entrée dans le pays, car il sert de guide complet démontrant l'intention du voyageur pour des visites temporaires à des fins touristiques uniquement. Le programme montre les détails du voyage planifié, y compris les dates d'arrivée et de départ, le programme des activités quotidiennes et les hébergements pré-réservés. Ces détails renforcent la confiance des autorités accordant le visa que le voyageur a des intentions spécifiques et bien planifiées, et que son but se limite au tourisme et au retour après la fin du voyage. De plus, le programme aide à clarifier la capacité financière du voyageur à couvrir les coûts du voyage, ce qui est considéré comme un élément important dans les décisions d'octroi de visa.`,
            contactText1Line1: "Nous pouvons fournir un système de voyage",
            contactText1Line2: "et vous aider dans toutes les procédures et réservations",
            contactText2: "Contactez-nous par email officiel",
            email: "info@piblikhub.com"
        },
        español: {
            title: "Para Servicios Turísticos",
            mainText: `El programa turístico es muy importante y lo primero que se le preguntará al solicitar una visa o en el control fronterizo es el motivo de su viaje, y el programa turístico lo explica todo.
            Tenga en cuenta que obtener una visa no significa la aprobación para ingresar al país si los oficiales de frontera no están convencidos de su motivo de ingreso.
            La importancia del programa turístico radica en facilitar el proceso de adquisición de la visa o entrada al país, ya que sirve como guía integral que demuestra la intención del viajero de realizar visitas temporales únicamente con fines turísticos. El programa muestra detalles del viaje planificado, incluyendo fechas de llegada y salida, programa de actividades diarias y alojamientos pre-reservados. Estos detalles aumentan la confianza de las autoridades que otorgan la visa de que el viajero tiene intenciones específicas y bien planificadas, y que su propósito se limita al turismo y al regreso después de que finaliza el viaje. Además, el programa ayuda a aclarar la capacidad financiera del viajero para cubrir los costos del viaje, lo cual se considera un elemento importante en las decisiones de otorgamiento de visa.`,
            contactText1Line1: "Podemos proporcionar un sistema de viaje",
            contactText1Line2: "y ayudarlo con todos los procedimientos y reservas",
            contactText2: "Contáctenos por correo electrónico oficial",
            email: "info@piblikhub.com"
        },
        हिंदी: {
            title: "पर्यटन सेवाओं के लिए",
            mainText: `पर्यटन कार्यक्रम बहुत महत्वपूर्ण है और वीजा के लिए आवेदन करते समय या सीमा नियंत्रण पर आपसे पूछी जाने वाली पहली चीज आपकी यात्रा का कारण है, और पर्यटन कार्यक्रम सब कुछ स्पष्ट करता है।
            कृपया ध्यान दें कि यदि सीमा अधिकारी आपके प्रवेश के कारण से संतुष्ट नहीं हैं तो वीजा प्राप्त करने का मतलब देश में प्रवेश की स्वीकृति नहीं है।
            पर्यटन कार्यक्रम का महत्व वीजा प्राप्ति प्रक्रिया या देश में प्रवेश को सुविधाजनक बनाने में निहित है, क्योंकि यह यात्री के केवल पर्यटन उद्देश्यों के लिए अस्थायी यात्राओं के इरादे को प्रदर्शित करने वाले एक व्यापक मार्गदर्शक के रूप में कार्य करता है। कार्यक्रम योजनाबद्ध यात्रा का विवरण दिखाता है, जिसमें आगमन और प्रस्थान की तिथियां, दैनिक गतिविधियों का कार्यक्रम और पूर्व-बुक किए गए आवास शामिल हैं। ये विवरण वीजा प्रदान करने वाले अधिकारियों का विश्वास बढ़ाते हैं कि यात्री के पास विशिष्ट और सुनियोजित इरादे हैं, और उनका उद्देश्य पर्यटन तक सीमित है और यात्रा समाप्त होने के बाद लौटना है। इसके अतिरिक्त, कार्यक्रम यात्री की यात्रा लागत को कवर करने की वित्तीय क्षमता को स्पष्ट करने में मदद करता है, जो वीजा प्रदान करने के निर्णयों में एक महत्वपूर्ण तत्व माना जाता है।`,
            contactText1Line1: "हम एक यात्रा प्रणाली प्रदान कर सकते हैं",
            contactText1Line2: "और सभी प्रक्रियाओं और आरक्षण में आपकी सहायता कर सकते हैं",
            contactText2: "आधिकारिक ईमेल के माध्यम से हमसे संपर्क करें",
            email: "info@piblikhub.com"
        }
    };

    // Function to get the selected language from sessionStorage
    function getSelectedLanguage() {
        return sessionStorage.getItem('selectedLanguage') || 'english';
    }

    // Function to update the content based on selected language
    function updateContent() {
        const language = getSelectedLanguage();
        const content = translations[language] || translations.english; // Fallback to English

        // Update title
        document.querySelector('.service-title').textContent = content.title;

        // Update main text
        document.querySelector('.main-text').textContent = content.mainText;

        // Update contact text
        document.querySelector('.contact-text-line1').textContent = content.contactText1Line1;
        document.querySelector('.contact-text-line2').textContent = content.contactText1Line2;
        document.querySelectorAll('.contact-text')[0].textContent = content.contactText2;

        // Update email
        document.querySelector('.email-link').textContent = content.email;
        document.querySelector('.email-link').href = `mailto:${content.email}`;

        // Update HTML lang attribute and direction
        // document.documentElement.lang = language;
        // document.documentElement.dir = language === 'arabic' ? 'rtl' : 'ltr';
        // Update HTML lang attribute and direction
document.documentElement.lang = language;
document.documentElement.dir = ['arabic', 'indie'].includes(language) ? 'rtl' : 'ltr';

    }

    // Initialize when the page loads
    updateContent();
});