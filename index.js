

// HOMEBOARD SCORES

let  homePoint = document.getElementById("home-score")
let homeCount = 0

function homeOnePt(){
    homeCount += 1
    // console.log(count)
    homePoint.textContent = homeCount
}

function homeTwoPts(){
    homeCount += 2
    homePoint.textContent = homeCount
}

function homeThreePts(){
    homeCount += 3
    homePoint.textContent = homeCount
}

// GUESTBOARD SCORES

let guestPoint = document.getElementById("guest-score")

let guestCount = 0

function guestOnePt(){
    guestCount += 1
    guestPoint.textContent = guestCount
}

function guestTwoPts(){
    guestCount += 2
    guestPoint.textContent = guestCount
}

function guestThreePts(){
    guestCount += 3
    guestPoint.textContent = guestCount
}