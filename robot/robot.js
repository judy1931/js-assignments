class Robot {
  constructor(name, type, image) {
    this.name = name
    this.type = type
    this.image = image
  }
}

const workerRobots = []
const securityRobots = []
const cleaningRobots = []

function addRobot() {
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
  
  const robot = new Robot(robotName, robotType, robotImage)
  console.log('robot',robot)


  if (robotType === 'worker') {
    workerRobots.push(robot)
  } else if (robotType === 'security') {
    securityRobots.push(robot)
  } else if (robotType === 'cleaning') {
    cleaningRobots.push(robot)
  }
}
