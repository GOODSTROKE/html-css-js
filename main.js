let count = 0

//Body
const body = document.querySelector('body');

//bucket

//outerContainer
const outerContainer = document.createElement('div')
body.appendChild(outerContainer);
outerContainer.id = 'outer-container'

//innerContainer
const innerContainer = document.createElement('div')
outerContainer.appendChild(innerContainer)
innerContainer.id ='inner-container'


//in-divs

//appHeader
const appHeader = document.createElement('div')
appHeader.className = "inner-divs"
appHeader.style.backgroundColor = "green"
const logo = document.createElement('p')
logo.innerText = 'LOGO';
logo.style.fontWeight =  "bold"
const menu = document.createElement('p')
menu.innerText = "menu";
appHeader.appendChild(logo)
appHeader.appendChild(menu)
appHeader.style.justifyContent = "space-evenly"
logo.style.marginTop = "10%"
menu.style.marginTop = "10%"

//counterDiv

const counterDiv = document.createElement('div')
counterDiv.className = "inner-divs"
counterDiv.style.justifyContent = "space-evenly"

//iconDiv

const iconDiv = document.createElement('div')
iconDiv.className = "inner-divs"

innerContainer.appendChild(appHeader);
innerContainer.appendChild(counterDiv);
innerContainer.appendChild(iconDiv);

//Star

const star = document.createElement('div')
star.className = "stars"
const starImage = document.createElement("IMG");
starImage.setAttribute('src', 'star.png')
starImage.id = "star-image";
star.appendChild(starImage)

//Buttons

const removeBtn = document.createElement('button')
removeBtn.className = 'buttons'
removeBtn.innerHTML = ('Remove 1')
counterDiv.appendChild(removeBtn)
const countText = document.createElement('h3')
countText.innerHTML = `${count}`;

counterDiv.appendChild(countText);
const addBtn = document.createElement('button')
addBtn.className = 'buttons'
addBtn.innerHTML = ('Add 1')
counterDiv.appendChild(addBtn)

//Button Event Listeners
removeBtn.addEventListener('click', ()=>{
    return remove()
})

addBtn.addEventListener('click', ()=>{
    return add()
})



//Counters


const add = () => {
    
    if(count < 10){
        count++;
        countText.innerHTML = `${count}`;
        const clone = star.cloneNode(true)
        iconDiv.appendChild(clone)

        console.log(count)

    }
}

const remove = () => {
    
    if(count <= 10 && count > 0){
        count--;
        countText.innerHTML = `${count}`;
        iconDiv.removeChild(iconDiv.lastChild)

        console.log(count)

    }
}




