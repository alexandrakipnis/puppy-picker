const form = document.querySelector('form#userForm')

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

const renderList = function(data){
    const list = document.createElement('ul')
    Object.keys(data).map(function(label) {
        list.appendChild(renderListItem(label, data[label]))
    })
    return list
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target

    const puppies = document.querySelector('#puppies')

    const puppy = {
        'Puppy: ': form.puppyType.value,
        'Desire Level: ': form.desireLevel.value
    }

    puppies.appendChild(renderList(puppy))

    form.reset()
    form.puppyType.focus()

}

form.addEventListener('submit', handleSubmit)