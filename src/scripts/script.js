/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
scroll();
function scroll() {
    const button = document.querySelector(".main__button");
    const section = document.querySelector(".main__about-container");

    button.addEventListener('click', function () {
        section.scrollIntoView({ behavior: "smooth" })
    });
};

modal();
function modal() {
    const buttons = document.querySelectorAll(".btn-open-modal");
    const modal = document.querySelector("#modal");

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.showModal();
            exitModal();
        });

    })
};

function exitModal() {
    const buttonModal = document.querySelector(".modal__button");
    const modalDialog = document.querySelector("#modal");

    buttonModal.addEventListener('click', function () {
        modalDialog.close();
    });
};
