// const wokBeef = document.querySelector('#wokBeef')

document.querySelector('#beef').addEventListener('click', beefFry)
document.querySelector('#chicken').addEventListener('click', chickenFry)
document.querySelector('#shrimp').addEventListener('click', shrimpFry)
document.querySelector('#veg').addEventListener('click', veggieFry)

function beefFry() {
    document.querySelector('#wokBeef').classList.toggle('hidden')
}
function chickenFry() {
    document.querySelector('#wokChicken').classList.toggle('hidden')
}
function shrimpFry() {
    document.querySelector('#wokShrimp').classList.toggle('hidden')
}
function veggieFry() {
    document.querySelector('#wokVeggies').classList.toggle('hidden')
}