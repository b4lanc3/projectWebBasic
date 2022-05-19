const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
// ?id=bali&content=indo
const data = [{
        id: "bali",
        content: "day la mot noi rat dep"
    },
    {
        id: "indo",
        content: "day la indo"
    }
]
let test = {};
for (let element of data) {
    if (element.id === id) {
        test = element
    }
}


document.getElementById("title").innerHTML = `${test.id} <br /> ${test.content}`
document.getElementById("information").innerHTML = test.content