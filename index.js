const walkLight = document.querySelector('#walkLight')
const stopLight = document.querySelector('#stopLight')
const pushButton = document.querySelector('#pushToWalk')

pushButton.addEventListener('click', waitTimer) /*it hears the first arguement and reacts/does the second arguement */

function changeLight() {
    walkLight.src = "img/walk-on.svg"
    stopLight.src = "img/stop-off.svg"
    setTimeout(changeLightBack, 5000)

}

function changeLightBack() {
    walkLight.src = "img/walk-off.svg"
    stopLight.src = "img/stop-on.svg"
}

function waitTimer() {
    setTimeout(changeLight, 3000)
}

/*I'm on part 2 of the task part */