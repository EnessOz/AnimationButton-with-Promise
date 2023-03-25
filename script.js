const box = document.querySelector('.box')
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
function Click() {
wait(1000)
.then(() => {
    box.classList.add('bigger')
    return wait(1000)
})
.then(() => {
    box.classList.add('circle')
    return wait(1000)
})
.then(() => {
    box.classList.add('move')
    return wait(1000)
})
.then(() => {
    box.classList.add('colored')
    return wait(1000)
})
.then (() => {
    box.classList.remove('colored')
    return wait(1000)
})
.then (() => {
    box.classList.remove('move')
    return wait(1000)
})
.then (() => {
    box.classList.remove('circle')
    return wait(1000)
})
.then (() => {
    box.classList.remove('bigger')
    return wait(1000)
})
.then(() => {
    document.getElementById('buton').innerHTML="Animation is Over"
    return wait(1000)
})
}