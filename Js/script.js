// if else 
function ifElseif() {
    let day = new Date()
    day = day.getDay()
    console.log(day)
    if (day === 0) {
        alert("It's Sunday")
    }
    else if (day === 1) {
        alert("It's Monday")
    }
    else if (day === 2) {
        alert("It's Tuesday")
    }
    else if (day === 3) {
        alert("It's Wednesday")
    }
    else if (day === 4) {
        alert("It's Thursday")
    }
    else if (day === 5) {
        alert("It's Friday")
    }
    else {
        alert("It's Some Other Day")
    }
}
// Switch Statemant
function Switch() {
    var day = new Date()
    var day = day.getDay()
    console.log(day)
    switch (day) {
        case 0:
            alert("It's Sunday")
            break;
        case 1:
            alert("It's Monday")
            break;
        case 2:
            alert("It's Tuesday")
            break;
        case 3:
            alert("Ït's Wednesday")
            break;
        case 4:
            alert("Ït's Thursday")
            break;
        case 5:
            alert("Ït's Friday")
            break;
        default:
            alert("It's Some Other Day")
    }
}
// Keep Asking The Name
document.getElementById("ask").onclick = function () {
    do {
        var name = prompt("PLease Type Your Name")
        console.log(name)
    } while (name.length < 3 || name === "")
    console.log(name)
    document.getElementById("output").innerHTML = "<span style= 'color: red; text-align: center;'>" + name + "</span>"
}
// Clear
document.getElementById("clear").onclick = function () {
    document.getElementById("output").innerHTML = ""
}