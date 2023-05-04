class Robot {
  constructor(name, type, image) {
    this.name = name
    this.type = type
    this.image = image
  }
}

let workerRobots = []
let securityRobots = []
let cleaningRobots = []

function addRobot() {

  // 1. Get data values from form
  console.log('adding robot...')
  const robotNameInput = document.querySelector('#robot-name').value
  console.log('robot type...')
  const robotTypeSelect = document.querySelector('#robot-type').value
  const robotImageInput = document.querySelector('#robot-image').value

  const robotName = robotNameInput
  const robotType = robotTypeSelect
  const robotImage = robotImageInput
  console.log('robot name:', robotName)
  console.log('robot type:', robotType)
  console.log('robot image:', robotImage)
  

  // 2. Creating a new robot object from your class
  const robot = new Robot(robotName, robotType, robotImage)
  console.log('robot',robot)


  // 3. Adding robot to correct array
  if (robotType === 'worker') {
    workerRobots.push(robot)
  } else if (robotType === 'security') {
    securityRobots.push(robot)
  } else if (robotType === 'cleaning') {
    cleaningRobots.push(robot)
  }

  // 4. Erase old robots from div
  document.querySelector('.show-worker-robots').innerHTML = ``
  document.querySelector('.show-security-robots').innerHTML = ``
  document.querySelector('.show-cleaning-robots').innerHTML = ``

  // 5. Show robots in HTML page
  workerRobots.forEach(function(robot) {
    // check in console
    console.log('there is a robot...', robot.name)
    // show in HTML
    document.querySelector('.show-worker-robots').innerHTML += `
      <p>${robot.name}</p>
      <img class="robot-img" src="${robot.image}">
       `
  })
  securityRobots.forEach(function(robot) {
    console.log('there is a robot...', robot.name)
    document.querySelector('.show-security-robots').innerHTML += `
      <p>${robot.name}</p>
      <img class="robot-img" src="${robot.image}">
       `
  })
  cleaningRobots.forEach(function(robot) {
    console.log('there is a robot...', robot.name)
    document.querySelector('.show-cleaning-robots').innerHTML += `
      <p>${robot.name}</p>
      <img class="robot-img" src="${robot.image}">
       `
  })

} 


function deleteRobot() {
  // 1. Get name of robot from form
  const robotName = document.querySelector('#robot-delete').value
  const robotType = document.querySelector('#robot-type-delete').value
  console.log(robotName)

  if (robotType === 'worker') { 
  // 2. Use Array.filter() to remove the matching element from the array
    // Create a new variable
    // assign it to the filter
    // remember that you are filter OBJECTS
    // so, you need to use . notation (ex. robot.name)
    const filteredRobot = workerRobots.filter(function(robot) {
      return robotName !== robot.name
    })
    console.log('filtered robots:', filteredRobot)
  // 3. Update the HTML page
    // - update workerRobots to the filteredRobots
     workerRobots = filteredRobot
    // - remove old stuff
    console.log('deleting old div stuff')
    document.querySelector('.show-worker-robots').innerHTML = ``
    // - add updated array
    console.log('adding filtered array to HTML')
    workerRobots.forEach(function(robot) {
      console.log('adding robot to HTML:', robot)
      document.querySelector('.show-worker-robots').innerHTML += `
        <p>${robot.name}</p>
        <img class="robot-img" src="${robot.image}">
         `
    })
  }else if(robotType === 'security') {
    const filteredRobot = securityRobots.filter(function(robot) {
      return robotName !== robot.name
    })
     securityRobots = filteredRobot
    console.log('deleting old div stuff')
    document.querySelector('.show-security-robots').innerHTML = ``
    console.log('adding filtered array to HTML')
    securityRobots.forEach(function(robot) {
      console.log('adding robot to HTML:', robot)
      document.querySelector('.show-security-robots').innerHTML += `
        <p>${robot.name}</p>
        <img class="robot-img" src="${robot.image}">
         `
    })
  }else if(robotType === 'cleaning') {
    const filteredRobot = cleaningRobots.filter(function(robot) {
      return robotName !== robot.name
    })
    cleaningRobots = filteredRobot
    console.log('deleting old div stuff')
    document.querySelector('.show-cleaning-robots').innerHTML = ``
    console.log('adding filtered array to HTML')
    cleaningRobots.forEach(function(robot) {
      console.log('adding robot to HTML:', robot)
      document.querySelector('.show-cleaning-robots').innerHTML += `
        <p>${robot.name}</p>
        <img class="robot-img" src="${robot.image}">
         `
    })
  } 
}
