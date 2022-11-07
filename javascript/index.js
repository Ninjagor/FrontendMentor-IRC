let rBtns = document.querySelectorAll(".review_btn");
let submitBtn = document.getElementById('sbtn');
rBtns.forEach((rBtn) => {
    rBtn.addEventListener("click", () => {
        const checked = document.querySelectorAll('.selected');
        checked.forEach((check) => {
            check.classList.remove('selected')
        })
        rBtn.classList.toggle('selected');
        let currentSelection = rBtn.textContent;
        let rating = document.getElementById('rating');
        rating.textContent = currentSelection;
    })
});

submitBtn.addEventListener("click", () => {
    let main = document.getElementById("main");
    let thanks = document.getElementById('thanks');
    let rating = document.getElementById('rating');
    if (!rating.textContent == ""){
    main.classList.toggle('hidden');
    thanks.classList.toggle('hidden');
    }
})