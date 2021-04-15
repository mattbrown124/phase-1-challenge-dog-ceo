console.log('%c HI', 'color: firebrick')

let dogArray = [];

function fetchDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((response) => response.json())
    .then((jsonObject) => {
        jsonObject.message.forEach((element) => renderPuppy(element))
    })
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((jsonObject) => {

        let keyValueArray = Object.entries(jsonObject.message)
        keyValueArray.forEach((breedArray) => breedList(breedArray))
        dogArray = Object.keys(jsonObject.message)
    })
}

//HANDLERS
function breedList(breedArray) {
    const dogList = document.getElementById('dog-breeds')
    const breedDropDown = document.getElementById('breed-dropdown')
    const parentLi = document.createElement('ul')
    parentLi.textContent - breedArray[0]
    const subUnorderedList = document.createElement('ul')
    breedArray[1].forEach((subBreed) => subSpecies(subBreed, subUnorderedList))
    dogList.appendChild(parentLi)
        parentLi.appendChild(subUnorderedList)

    dogList.addEventListener('click', colorChange)
    breedDropDown.addEventListener('change', breedFilter)
}

function subSpecies(subBreed, container) {
    const subLi = document.createElement('li')
    subLi.textContent = subBreed
    container.appendChild(subLi)
}

function renderPuppy(dog) {
    const imageContainer = document.getElementById('dog-image-container')
    let img = document.createElement('img')
    img.src = dog
    imageContainer.appendChild(img)
}

function colorChange(r) {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRrandomNumber(hex)]
    }
    const listItem = r.target
    listItem.style.color = 'skyBlue'
} 

function getRandomNumber(hex) {
    return Math.floor(Math.random() * hex.length)
}

function breedFilter(r) {
    console.log(r.target.value)
    const dogList = document.getElementById('dog-breeds')
    dogList.innerHTML = ''
    let selectedDogs = dogArray.filter(
        (dog) => dog.toLowerCase().charAt(0) === r.target.value
    )
    selectedDogs.forEach((dog) => subSpecies(dog, dogList))
}

fetchDogImages();
fetchBreeds();