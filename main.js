document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;

    })

    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
    ${buttonsHtml.join("") }
    </div>

    `)
    
    const buttons = carousel.querySelectorAll(".carousel-button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            //unselect all the items
            items.forEach(item => item.classList.remove("carousel-item-select")); 
            buttons.forEach(button => button.classList.remove("carousel-button-select"));

            items[i].classList.add("carousel-item-select");
            button.classList.add("carousel-button-select");
        });
    });
            //select the first item on page load
            items[0].classList.add("carousel-item-select");
            buttons[0].classList.add("carousel-button-select");
})