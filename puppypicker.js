const form = document.querySelector('form#addPuppy')
let puppyArray = new Array()

const renderListItem = function(value){
    const item = document.createElement('li')
    //const dtItem = document.createElement('dt')
    //dtItem.textContent = label

    const description = document.createElement('dd')
    try{
        description.appendChild(value)
    } catch(e){
        description.textContent += value
    }

    //item.appendChild(dtItem)
    item.appendChild(description)

    return item
}

const handleDelete = function(ev){
    ev.preventDefault()
    const listItem = ev.target

    for(var i = 0; i < puppyArray.length; i++){
        if(`Puppy${puppyArray[i].Puppy}Desire${puppyArray[i].Desire}Delete` == listItem.parentNode.textContent){
            puppyArray.splice(i, 1)
            break
        }
    }
    listItem.parentNode.remove()
}

const renderList = function(data){
    const list = document.createElement('ul')
    const button = document.createElement('button')
    button.addEventListener('click', handleDelete)
    button.textContent = 'Delete'
    Object.keys(data).map(function(label) {
        list.appendChild(renderListItem(data[label]))
        list.appendChild(button)
    })
    return list
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target

    const puppies = document.querySelector('#puppies')

    const puppy = {
        'Puppy': form.puppyType.value,
        'Desire': form.desireLevel.value
    }

    displayList(puppy)
    puppies.appendChild(renderList(puppy))
    puppyArray.push(puppy)

    
    form.reset()
    form.puppyType.focus()
}

const displayList = function(item){
    const desire = document.querySelector(`#${item.Desire}`)

    const list = document.createElement('dl')
    /*const button = document.createElement('button')
    button.addEventListener('click', handleDelete)
    button.textContent = 'Delete'*/

    
    list.appendChild(renderListItem(item.Puppy))
    
    desire.appendChild(list)
}

const handleChoiceButtons = function(type){
    let btnContainer = document.getElementsByClassName('btn')
    for(var i = 0; i < btnContainer.length; i++){
        btnContainer[i].style.display = "none"
    }
    document.getElementById(type).style.display = "block"
}


form.addEventListener('submit', handleSubmit)



/*const handleDisplayChoice = function(){
    debugger
    const current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active";
}

//change which button is active
const buttonContainer = document.getElementById('myBtnContainer')
const buttons = buttonContainer.getElementsByClassName('btn')
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleDisplayChoice)  
}*/

