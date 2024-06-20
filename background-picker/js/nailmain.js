document.querySelector('#pink').addEventListener('click', pinkNail)
document.querySelector("#orange").addEventListener('click', orangeNail)
document.querySelector("#skyBlue").addEventListener('click', skyNail)
document.querySelector("#teal").addEventListener('click', tealNail)

function pinkNail() {
    document.querySelector('.nails').style.backgroundColor = 'rgba(241,63,247,1)'
}
function orangeNail() {
    document.querySelector('.nails').style.backgroundColor = 'rgb(240, 159, 9)'
}
function skyNail() {
    document.querySelector('.nails').style.backgroundColor = 'rgb(92, 200, 230)'
}
function tealNail() {
    document.querySelector('.nails').style.backgroundColor = 'rgb(3, 124, 124)'
}