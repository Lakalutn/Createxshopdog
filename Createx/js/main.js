//SHOW MORE

const btn_show = document.querySelector(".courses__btn")

if (btn_show){

    btn_show.addEventListener("click", () => {
        const show_courses = document.querySelectorAll(".course__block")
        show_courses.forEach(el => el.classList.remove("hide__courses"))
    })


}


//SLIDER

const btnPrev = document.querySelector(".arrow__left")
const btnNext = document.querySelector(".arrow__right")

let offset = 620;

if (btnNext){
    btnNext.addEventListener("click", () => {
        if (offset == 2480){
            btnNext.setAttribute("disabled")
        } else{
            btnNext.removeAttribute("disabled")
        }
        const track = document.querySelector(".slider__track")

        track.style.transform = `translate(${-offset}px)`
        offset+= 620
        console.log(offset)
    })
}

if (btnPrev){
    btnPrev.addEventListener("click", () => {
        const track = document.querySelector(".slider__track")
        offset = 0
        track.style.transform = `translate(${offset}px)`
        offset-= -620
    })
}


//MODAL WINDOW

const sign__in = document.querySelector(".log__in")
const sign__up = document.querySelector(".registration")
const reg__block = document.querySelector(".reg__block")
const sign__block = document.querySelector(".sign__block")
const modal__exit = document.querySelector(".exit")
const modal__exitt = document.querySelector(".exitt")
const modal = document.querySelector(".modal")

sign__in.addEventListener("click", () => {

    modal.style.display = "flex"
    sign__block.style.display = "block"
})

sign__up.addEventListener("click", () => {
    modal.style.display = "flex"
    reg__block.style.display = "block"
})

modal__exit.addEventListener("click", () => {
    modal.style.display = "none"
    reg__block.style.display = "none"
})
modal__exitt.addEventListener("click", () => {
    modal.style.display = "none"
    sign__block.style.display = "none"
})










//SHOP FILTER BTN

const filterBox = document.querySelectorAll(".course__block")

const courseFormBtn = document.querySelector(".course__form-btn")

if (courseFormBtn){
    courseFormBtn.addEventListener("click", e => {

        let filterClass = e.target.dataset["f"]

        filterBox.forEach(el => {
            el.classList.remove("hide")
            if (!el.classList.contains(filterClass) && (filterClass !== "all")) el.classList.add("hide")
        })

    })

}
//SHOP FILTER INPUT

const filterText = document.querySelectorAll(".course__info-title")

const filterInput = document.querySelector(".course__input-field")

if (filterInput){
    filterInput.addEventListener("input", e => {
        const inputValue = e.target.value
        filterText.forEach(e => {
            console.log(e.innerHTML)
            if (!e.innerHTML !== inputValue){
                const fm = e.closest(".course__block")
                console.log("hoho");
                //console.log(inputValue);
                //console.log(filterText);
            }
        })
    })

}


// //TIMER
//
// let date = new Date('Jan 1 2022 00:00:00');
//
// function count(){
//     let now = new Date();
//     let gap = date - now
//
//     let days = Math.floor(gap / 1000 / 60/ 60 / 24);
//     let hours = Math.floor(gap / 1000 / 60/ 60 ) % 24;
//     let minutes = Math.floor(gap / 1000 / 60) % 60;
//     let seconds = Math.floor(gap / 1000) % 60;
//
//          document.getElementById('d').innerText = days * -1;
//          document.getElementById('h').innerText = hours * -1;
//          document.getElementById('m').innerText = minutes * -1;
//          document.getElementById('s').innerText = seconds * -1;
//
// }
// count()
//
// setInterval(count, 1000);