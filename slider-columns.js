//SLIDER fOR 3 COLUMNS
window.addEventListener("DOMContentLoaded", function () {
let slider = tns({
container: ".navSlider",
items: 3,
controls: false,
navPosition: "bottom",
responsive: {
300: {
items: 1,
},
500: {
items: 1,
},
768: {
items: 2,
},

1000: {
items: 3,
},
1100: {
items: 3,
},
},
});

let slider_cons = tns({
container: ".navSlidercons",
items: 6,
controls: false,
navPosition: "bottom",
responsive: {
300: {
items: 1,
},
500: {
items: 1,
},

},
});

let slider_cuns = tns({
container: ".navSlidercuns",
items: 3,
controls: false,
navPosition: "bottom",
responsive: {
300: {
items: 1,
},
500: {
items: 1,
},

},
});

});