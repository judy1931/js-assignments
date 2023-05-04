const song1= new Audio ('Us,Again.mp3')
function playSongOne(){
    console.log('playing song1...')
    song1.play()
    
}
function pauseSongOne(){
    console.log('song1 paused...')
    song1.pause()
    
}

function loadSongOne(){
    console.log('Reload song1.. ')
    song1.load()
    song1.play()
}
