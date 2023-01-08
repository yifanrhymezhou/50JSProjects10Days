const panelItems = document.querySelectorAll(".container > .panel");
//console.log(panelItems);

//Transform array-like objects to an ArrayList so that forEach can work
let items = Array.from(panelItems);
//console.log(items);

items.forEach(panel => {
    panel.addEventListener("click", () => {
        [].filter.call(panel.parentElement.children, pan => pan!==panel).forEach(pan =>{
            pan.classList.remove('active');
        })
        console.log("hi");

        panel.classList.add('active');
    });
})