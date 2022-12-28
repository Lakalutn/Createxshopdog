class Events {

    render(){
        let htmlCatalog = "";

        CATALOG.forEach(({id, curTime, curDate, title, category, month, day, time}) => {

            htmlCatalog += `
                <div class="event__block ${category}" id="${id}">
                    <div class="block__content">
                        <div class="event__date">
                            <h2 class="date__count">${day}</h2>
                             <div class="day__month">
                                 <h4 class="event__month">${month}</h4>
                                    <p class="event__ciphr">${time}</p>
                             </div>
                        </div>
                        <div class="event__block-descr">
                            <h4 class="event__block-descr__title"><a href="event-page.html">${title}</a></h4>
                            <p>Online ${category}</p>
                        </div>
                    </div>
                    <a href="event-page.html"><button class="event__block-btn btn__inset">View more</button></a></button>
                </div>
            `;
        });

        const html = `
            ${htmlCatalog}
        `;

        ROOT__EVENTS.innerHTML = html
    }
}


//BUTTONS TO FILTER FOR CATEGORY


function Event__filter() {
    const blocks = document.querySelectorAll(".event__block")
    const ShowAll = eventsFilterButtons.options[ eventsFilterButtons.selectedIndex ].dataset.filter.toLowerCase() === "all"
    blocks.forEach(block => {
        if (!block.classList.contains(eventsFilterButtons.options[ eventsFilterButtons.selectedIndex ].dataset.filter) && !ShowAll){
            block.style.display = "none"
        } else {
            block.style.display = "flex"
        }
    })
}


const eventsFilterButtons = document.getElementById("category-select")
eventsFilterButtons.addEventListener("change", Event__filter)





// GRID - FLEX CHANGE BUTTONS

const rowBtn = document.querySelector(".row__event-btn")
const gridBtn = document.querySelector(".grid__event-btn")
rowBtn.addEventListener("click", () => {
    document.querySelector(".events__content").classList.remove("gridable")
})

gridBtn.addEventListener("click", () => {
    document.querySelector(".events__content").classList.toggle("gridable")
})




const eventsPage = new Events()
eventsPage.render();

function filterByDateDecrement(){
    const terror = JSON.parse(JSON.stringify(CATALOG))
    const getNumber = t => +t.replace(/-/g, '')
    terror.sort(({ curDate: a }, { curDate: b }) => getNumber(a) - getNumber(b))


    let htmlCatalog = "";

    terror.forEach(({id, curTime, curDate, title, category, month, day, time}) => {

        htmlCatalog += `
                <div class="event__block ${category}" id="${id}">
                    <div class="block__content">
                        <div class="event__date">
                            <h2 class="date__count">${day}</h2>
                             <div class="day__month">
                                 <h4 class="event__month">${month}</h4>
                                    <p class="event__ciphr">${time}</p>
                             </div>
                        </div>
                        <div class="event__block-descr">
                            <h4 class="event__block-descr__title"><a href="event-page.html">${title}</a></h4>
                            <p>Online ${category}</p>
                        </div>
                    </div>
                    <a href="event-page.html"><button class="event__block-btn btn__inset">View more</button></a></button>
                </div>
            `;
    });

    const html = `
            ${htmlCatalog}
        `;

    ROOT__EVENTS.innerHTML = html
}

function filterByDateIncrement(){
    const terror = JSON.parse(JSON.stringify(CATALOG))
    const getNumber = t => +t.replace(/-/g, '')
    terror.sort(({ curDate: a }, { curDate: b }) => getNumber(a) + getNumber(b))

    let htmlCatalog = "";

    terror.forEach(({id, curTime, curDate, title, category, month, day, time}) => {

        htmlCatalog += `
                <div class="event__block ${category}">
                    <div class="block__content">
                        <div class="event__date">
                            <h2 class="date__count">${day}</h2>
                             <div class="day__month">
                                 <h4 class="event__month">${month}</h4>
                                    <p class="event__ciphr">${time}</p>
                             </div>
                        </div>
                        <div class="event__block-descr">
                            <h4 class="event__block-descr__title"><a href="event-page.html">${title}</a></h4>
                            <p>Online ${category}</p>
                        </div>
                    </div>
                    <a href="event-page.html"><button class="event__block-btn btn__inset">View more</button></a></button>
                </div>
            `;
    });

    const html = `
            ${htmlCatalog}
        `;

    ROOT__EVENTS.innerHTML = html
}

function eventFilterByDate() {
        if (dateFilterButtons.options[ dateFilterButtons.selectedIndex ].dataset.date === "newest"){
            filterByDateDecrement()
        } else {
            filterByDateIncrement()
        }
}


const dateFilterButtons = document.getElementById("date-select")
dateFilterButtons.addEventListener("change", eventFilterByDate)





function getParentId() {
    console.log(btn.target.closest(".event__block"))
}
const btn = document.querySelectorAll(".event__block-btn");
btn.forEach(el => {
    el.addEventListener("click", getParentId())
})
console.log(btn)

