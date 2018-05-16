const form = document.querySelector('form#addPuppy')
const desireLevel = ['Want', 'Really Want', 'Need', 'Cannot Live Without']

let puppyArray = new Array()

const renderListItem = function(label, value){
    const item = document.createElement('li')
    const dtItem = document.createElement('dt')
    dtItem.textContent = label

    const description = document.createElement('dd')
    try{
        description.appendChild(value)
    } catch(e){
        description.textContent += value
    }

    item.appendChild(dtItem)
    item.appendChild(description)

    return item
}

const handleDelete = function(ev){
    ev.preventDefault()
    const listItem = ev.target
    listItem.parentNode.remove()
    puppyArray.splice(puppyArray.indexOf(listItem), 1)
}

const renderList = function(data){
    const list = document.createElement('ul')
    const button = document.createElement('button')
    button.addEventListener('click', handleDelete)
    button.textContent = 'Delete'
    Object.keys(data).map(function(label) {
        list.appendChild(renderListItem(label, data[label]))
        list.appendChild(button)
    })
    return list
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target

    const puppies = document.querySelector('#puppies')

    const puppy = {
        'Puppy: ': form.puppyType.value,
        'Desire: ': form.desireLevel.value
    }
    

    puppies.appendChild(renderList(puppy))
    puppyArray.push(renderList(puppy))

    form.reset()
    form.puppyType.focus()
}

form.addEventListener('submit', handleSubmit)

const handleDisplayChoice = function(){
    const current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active";
}

//change which button is active
const buttonContainer = document.getElementById('myBtnContainer')
const buttons = buttonContainer.getElementsByClassName('btn')
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleDisplayChoice)  
}

