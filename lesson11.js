// localStorage.setItem('pet','cat')
// localStorage.setItem('petAge',6)
// localStorage.setItem('petName','Kevin')

const pet=localStorage.getItem('pet')
const petName=localStorage.getItem('petName')
const petAge=localStorage.getItem('petAge')
console.log(pet)
console.log(petName)
console.log(petAge)

function updatePet(){
    //get data from form
    const newPet=document.querySelector('#pet').value
    const newPetName=document.querySelector('#petName').value
    const newPetAge=document.querySelector('#petAge').value
    // save in local storage
    localStorage.setItem('pet', newPet)
    localStorage.setItem('petAge', newPetName)
    localStorage.setItem('petName', newPetAge)
    // console log new data
    console.log(newPet)
    console.log(newPetName)
    console.log(newPetAge)
}
// 
const data = [
    {
        name: 'Jennifer',
        grade: 10
    },
    {
        name: 'Evan',
        grade: 10
    },
]
// convert data to string
const stringData= JSON.stringify(data)
// save to local storage
localStorage.setItem('studentArray',stringData)
// get the data
const gotData=localStorage.getItem('studentArray')
// convert back to JSON
const convertedData = JSON.parse(gotData)

console.log(convertedData[0])