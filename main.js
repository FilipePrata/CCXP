const tickets = []

function addStyle(id) {
    element = document.querySelector("#" + id)
    element.classList.toggle("highlighted")
}

function select(id) {
    var element = document.querySelector("#" + id)
    element.classList.toggle("selected")
    if (tickets.includes(id) == false) {
        tickets.push(id)
    }
    else {
        var index = tickets.indexOf(id)
        tickets.splice(index, 1)
    }
    console.log(tickets)
}

function showSelectedTickets() {
    if (tickets.length > 0) {
        alert(`Ingressos selecionados: ${tickets}`)
    }
}