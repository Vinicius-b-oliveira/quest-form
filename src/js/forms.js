const inputsText = document.querySelectorAll(".input");
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let todosPreenchidos = true;

    inputsText.forEach(input => {
        const advice = input.nextElementSibling;

        if (input.value === "") { 
            todosPreenchidos = false;
            input.classList.add("blank-input");
            if (!advice || !advice.classList.contains("advice")) {
                const newAdvice = document.createElement("p");
                newAdvice.textContent = "Campo obrigatório";
                newAdvice.classList.add("advice");
                input.insertAdjacentElement('afterend', newAdvice);
            }
        } else {
            input.classList.remove("blank-input");
            removerMensagemErro(input);
        }
    });

    if (todosPreenchidos) {
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
            removerMensagemErro(input);
        }
    });
});

function removerMensagemErro(input) {
    const advice = input.nextElementSibling;
    if (advice && advice.classList.contains("advice")) {
        advice.remove();
    }
}