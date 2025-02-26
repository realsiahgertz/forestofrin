document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector("p");
    const text = textElement.textContent;
    textElement.textContent = "";
    let index = 0;
    
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.animation = "blink 0.7s infinite";
    textElement.appendChild(cursor);

    function typeText() {
        if (index < text.length) {
            textElement.insertBefore(document.createTextNode(text[index]), cursor);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();

    const style = document.createElement("style");
    style.textContent = `
        @keyframes blink {
            50% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
