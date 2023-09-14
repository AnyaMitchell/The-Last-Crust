let score = 0

function checkAnswers () {
    let score = 0
    let result = 0

    let quiz = document.forms.quiz.elements;

    answer1 = quiz.song.value;
    if (answer1 == "rooks"){
        score = score + 1;
    }
    if (answer1 == "aqua"){
        score = score + 2;
    }
    if (answer1 == "shania"){
        score = score + 3;
    }
    if (answer1 == "killers"){
        score = score + 4;
    }

    answer2 = quiz.beverage.value;
    if (answer2 == "coffee"){
        score = score + 1;
    }
    if (answer2 == "juice"){
        score = score + 2;
    }
    if (answer2 == "cocktail"){
        score = score + 3;
    }
    if (answer2 == "water"){
        score = score + 4;
    }

    answer3 = quiz.film.value;
    if (answer3 == "eternal"){
        score = score + 1;
    }
    if (answer3 == "nemo"){
        score = score + 2;
    }
    if (answer3 == "clueless"){
        score = score + 3;
    }
    if (answer3 == "127"){
        score = score + 4;
    }
    
    answer4 = quiz.colour.value;
    if (answer4 == "red"){
        score = score + 1;
    }
    if (answer4 == "yellow"){
        score = score + 2;
    }
    if (answer4 == "pink"){
        score = score + 3;
    }
    if (answer4 == "blue"){
        score = score + 4;
    }

    if (score <= 4){
        result = "a Cannoli";
    }
    else if (score <= 8){
        result = "an Éclair";
    }
    else if (score <= 12){
        result = "a Macaron";
    }
    else {
        result = "a Croissant";
    }

    alert ('You are ' + result);
}

function checkBooking () {
    let score = 0
    let result = 0

    let book = document.forms.book.elements;

    alert ("You are booked")
}

function bookJazzy () {
    alert ("You are booked")
}
function bookBobby () {
    alert ("You are booked")
}
function bookMacaron () {
    alert ("You are booked")
}
function bookCocktail () {
    alert ("You are booked")
}
function bookCharity () {
    alert ("You are booked")
}
function bookHalloween () {
    alert ("You are booked")
}