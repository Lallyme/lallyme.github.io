
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(document.querySelector(`.loader`));
    });
});

document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById(`myForm`);
const feedbackElement = document.getElementById(`feedback`);

form.addEventListener(`submit`, function (event) {
  event.preventDefault();

  feedbackElement.textContent = `Thank you for your query! I will be in touch.`;
});
});
