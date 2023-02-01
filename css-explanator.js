//COLOR

let changeColor = document.getElementById('change-color')

let redButton = document.getElementById('red')
let orangeButton = document.getElementById('orange')
let yellowButton = document.getElementById('yellow')
let greenButton = document.getElementById('green')
let blueButton = document.getElementById('blue')
let purpleButton = document.getElementById('purple')

const toRed = () => {
   changeColor.style.color = 'red'
}
const toOrange = () => {
    changeColor.style.color = 'orange'
 }
 const toYellow = () => {
    changeColor.style.color = 'rgb(232, 232, 5)'
 }
 const toGreen = () => {
    changeColor.style.color = 'green'
 }
 const toBlue = () => {
    changeColor.style.color = 'blue'
 }
 const toPurple = () => {
    changeColor.style.color = 'purple'
 }


redButton.addEventListener('click', toRed)
orangeButton.addEventListener('click', toOrange)
yellowButton.addEventListener('click', toYellow)
greenButton.addEventListener('click', toGreen)
blueButton.addEventListener('click', toBlue)
purpleButton.addEventListener('click', toPurple)


//OPACITY
let opacityRangeEl = document.getElementById('opacity-range')
let opacityImgList = document.querySelectorAll('.capy img')
let opacityValList = document.querySelectorAll('.opacity-val')

let opacityInitValArr = Array.from(opacityValList);
opacityInitValArr.forEach((el,i,arr)=> arr[i] = parseFloat(el.innerHTML))

const setOpacity = () => {
    let num;
    for(let i=0; i<opacityImgList.length; i++) {
        num = Math.round((opacityInitValArr[i]+parseFloat(opacityRangeEl.value))*100)/100;
        num = num < 0 ? 0 : (num > 1 ? 1 : num);
        opacityValList[i].innerHTML = num;
        opacityImgList[i].style.opacity = num;
    }
}

opacityRangeEl.addEventListener('input',setOpacity)
opacityRangeEl.addEventListener('change',setOpacity)

//FONT-FAMILY
let fontSt = document.getElementById('font-h2')

let style1 = document.getElementById('style1')
let style2 = document.getElementById('style2')
let style3 = document.getElementById('style3')
let style4 = document.getElementById('style4')
let style5 = document.getElementById('style5')

const toStyle1 = () => {
    fontSt.style.fontFamily = 'Arial'
}

const toStyle2 = () => {
    fontSt.style.fontFamily = 'Impact'
}

const toStyle3 = () => {
    fontSt.style.fontFamily = 'Times New Roman'
}

const toStyle4 = () => {
    fontSt.style.fontFamily = 'Verdana'
}

const toStyle5 = () => {
    fontSt.style.fontFamily = 'Georgia'
}

style1.addEventListener('click', toStyle1)
style2.addEventListener('click', toStyle2)
style3.addEventListener('click', toStyle3)
style4.addEventListener('click', toStyle4)
style5.addEventListener('click', toStyle5)

//BACKGROUND COLOR
back = document.querySelector('.background')
backgroundButton = document.getElementById('background-button')

const getFrom0To255 = () => {
    return Math.floor(Math.random()*256)
}
const setColor = () => {
    let backgroundCol = `rgb(${getFrom0To255()}, ${getFrom0To255()}, ${getFrom0To255()})`
    back.style.backgroundColor = backgroundCol
    
}

backgroundButton.addEventListener("click", setColor)






