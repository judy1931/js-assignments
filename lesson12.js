const data = [
    {
        name: 'Skyler',
        grade: 9
    },
    {
        name: 'Cindy',
        grade: 9
    },
    {
        name: 'Natasha',
        grade: 10
    },
    {
        name: 'Angus',
        grade: 11
    },
]

// data.forEach(function(element){
// console.log(element)
// // change the Html page to show the students
// document.querySelector(' .students').innerHTML +=
// <h2 class='student-name'>${element.name}</h2>
// <p>${element.grade}</p>
// })


const music=['piano','violin','trumpet','flute','cello']
const filteredMusic=music.filter(function(element){
    console.log('We are on element:', element)
    return element!=='trumpet'
})

