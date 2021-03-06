// simple model values
let n = 1
let complicated = {id:3, address:"here", list:[4,3,2], signed_in:false}

const fn = (x, y, ) => {return x+y}

n = fn(4,2)
console.log(n, complicated)
// here we inject new content into the web page
// we use back-ticks for string interpolation
let some_text = `Address: ${complicated.address} ${complicated.array[2]}`
content.innerHTML = some_text

// add an event listener to the button
const handleButton = ()=>{console.log('clicked!')}
btnDoStuff.addEventListener('click', handleButton)

//fetching data from an API end point
const getData = ()=>{
    let end_point_url = "https://swapi.dev/api"
    //
    let category = swcategory.value // "planets"
    let id = swid.value //3
    // NB fetch is asynchronous
    fetch(`${end_point_url}/${category}/${id}`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        // lets put all the data into the page temporarily
        //
        let swapi_text = JSON.stringify(data)
        swapi.innerHTML = swapi_text
    })
}

btnGetAPI.addEventListener("click", getData)

function oldWay(params){
    return params
}

// a few words about functions
// now...
const f = (x)=>{return x*x};
// we can leave out all the brackets if it's dead simple
const g = x=>x*x
// if there are NO params or more than one, we MUST use the brackets
const h = ()=>"oh"
// if there is more than one line in the function body
// we MUST have curly braces
const j = v=>{
    result = `${v} stuff`
    return result // explicitly returns something
}
