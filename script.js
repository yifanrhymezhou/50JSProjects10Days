const body = document.body;
const counters = [{
        class: 'fa-youtube',
        value: 10050,
        text: "YouTube Subscribers"
    }, {
        class:'fa-facebook',
        value: 9068,
        text: "Facebook Followers"
    }, {
        class: 'fa-twitter',
        value: 12106,
        text: "Twitter Followers"
    }
];

function updateCounterHandler(){
    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach(el => {
        el.textContent = '0';
        const updateCount = () => {
            const value = + el.getAttribute('data-count');
            const textContent = + el.textContent;
            const increment = value / 100;
            if (textContent < value) {
                el.textContent = `${Math.ceil(increment + textContent)}`;
                //A timer which executes a function or specified piece of code 
                //once the timer expires (milisec)
            } else {
                el.textContent = value;
            }
            setTimeout(updateCount, 10);
        };
        updateCount();
        //console.log('finished');
    });
}

function createCounters() {
    counters.forEach(counter => {
        const counter_element = document.createElement('div');
        counter_element.classList.add("counter-container");
        counter_element.innerHTML = `
            <i class="fab fa-3x ${counter.class}"></i>
            <div class="counter" data-count="${counter.value}"></div>
            <span>${counter.text}</span>
        `;
        body.insertBefore(counter_element,body.firstElementChild);
    });
    updateCounterHandler();
}


window.onload = () => createCounters();