let nameInput = document.getElementById("nameInput")
let surnameInput = document.getElementById("surnameInput")
let dateInput = document.getElementById("dateInput")
let button = document.querySelector("button")

const Person = function() {
    this.name = ""
    this.surname = ""
    this.date = ""
}

let user = new Person()
console.log(user)

const addOnTable = () => {
    if(nameInput.value !== "" && surnameInput.value !== "" && dateInput.value !== "") {
        user.name = nameInput.value
        user.surname = surnameInput.value
        user.date = dateInput.value
        let tr = document.createElement("tr")
        let tdName = document.createElement("td")
        tdName.innerText = user.name
        let tdSurname = document.createElement("td")
        tdSurname.innerText = user.surname
        let tdDate = document.createElement("td")
        tdDate.innerText = user.date
        let table = document.querySelector("table")
        tr.appendChild(tdName)
        tr.appendChild(tdSurname)
        tr.appendChild(tdDate)
        table.append(tr)
    }
}