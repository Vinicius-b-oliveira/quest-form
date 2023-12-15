const inputsText = document.querySelectorAll(".input");
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let allFilled = true;

    inputsText.forEach(input => {
        const advice = input.nextElementSibling;

        if (input.value === "") { 
            allFilled = false;
            input.classList.add("blank-input");
            if (!advice || !advice.classList.contains("advice")) {
                const newAdvice = document.createElement("p");
                newAdvice.textContent = "Campo obrigatório";
                newAdvice.classList.add("advice");
                input.insertAdjacentElement('afterend', newAdvice);
            }
        } 
    });

    if (allFilled) {
        form.submit();
    }
});

inputsText.forEach(input => {
    input.addEventListener("input", () => {
        if (input.value === "") {
            input.classList.remove("filled-input");
        } else {
            input.classList.add("filled-input");
            input.classList.remove("blank-input");
            removeError(input);
        }
    });
});

function removeError(input) {
    const advice = input.nextElementSibling;
    if (advice && advice.classList.contains("advice")) {
        advice.remove();
    }
}