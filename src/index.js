import dragon from './dragon.svg'
import './style.scss'
import { sum } from './module'
class WorldName {
    #name
    #surname

    constructor() {
        this.#name = ''
        this.#surname = ''
    }

    setName() {
        this.#name = prompt("Please write your name")
    }
    setSurname() {
        this.#surname = prompt("Please write your surname")
    }

    getFullName() {
        return sum(this.#name, this.#surname)
    }
}

const myName = new WorldName()
myName.setName()
myName.setSurname()

const heading = document.createElement('h1')
heading.textContent = `Salam to ${myName.getFullName()}!`

const root = document.querySelector('#root')
root.append(heading)
const img = document.createElement('img')
img.src = dragon

root.append(img)


