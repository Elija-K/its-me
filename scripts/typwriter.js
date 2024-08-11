        // Alle Textelemente im Body finden
        const elements = Array.from(document.body.children);

        // Typgeschwindigkeit und Verzögerung
        const typingSpeed = 100;
        const delayBetweenTexts = 2000;

        let currentElementIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            // Wenn alle Elemente durchlaufen wurden, von vorne beginnen
            if (currentElementIndex >= elements.length) {
                currentElementIndex = 0;
            }
            
            // Der aktuelle Text des aktiven Elements
            const currentElement = elements[currentElementIndex];
            const currentText = currentElement.innerText;

            if (!isDeleting && currentCharIndex <= currentText.length) {
                // Den Text anzeigen bis zur aktuellen Zeichenposition
                currentElement.style.display = 'block'; // Das aktuelle Element anzeigen
                currentElement.innerText = currentText.substring(0, currentCharIndex++);
                setTimeout(typeWriter, typingSpeed);
            } else if (isDeleting && currentCharIndex > 0) {
                // Den Text rückwärts löschen
                currentElement.innerText = currentText.substring(0, currentCharIndex--);
                setTimeout(typeWriter, typingSpeed / 2);
            } else if (!isDeleting) {
                // Starten des Löschens nach dem kompletten Anzeigen des Texts
                isDeleting = true;
                setTimeout(typeWriter, delayBetweenTexts);
            } else {
                // Weiter zum nächsten Element
                isDeleting = false;
                currentCharIndex = 0;
                currentElementIndex++;
                // Alle anderen Elemente wieder verstecken
                elements.forEach((el, index) => {
                    if (index !== currentElementIndex) {
                        el.style.display = 'none';
                    }
                });
                setTimeout(typeWriter, typingSpeed);
            }
        }

        document.addEventListener('DOMContentLoaded', typeWriter);