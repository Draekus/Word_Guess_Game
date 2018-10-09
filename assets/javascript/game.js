var wordBank = ["despicably", "flashpoint", "formidable", "downstream", "slumbering", "infamously", "binoculars"]

var winsArray = [];
var wins = 0
var prevGuesses = []
var guessesLeft = 6



$(document).ready(function() {
    var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)]
    $("#guessesleftvalue").text(guessesLeft)
    $("#wins").text(wins)

    for ( var i = 0; i < computerChoice.length; i++) {
        var wordblocks = $("<p>")
        wordblocks.addClass("wordblock" + i);
        wordblocks.addClass("block")
        wordblocks.addClass(computerChoice[i])
        // wordblocks.attr("letter", computerChoice[i]);
        $("#wordblanks").append(wordblocks);
        console.log(computerChoice)
    
    
}


    

    document.onkeyup = function(event) {
    
        $("#secondarytitle").text("");
        var userGuess = event.key;
        

        if (guessesLeft === 0) {
            alert("Sorry you lost!")
        }

        else if (wins === computerChoice.length) {
            alert("You Win!")
            $("#wordblanks").empty();
            $("#guessedletters").empty();
            $('#wins').empty();
            $("#guessesleftvalue").empty();
            wins = 0;
            guessesLeft = 6;
            prevGuesses = [];
            winsArray = [];
            computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)]
            $("#guessesleftvalue").text(guessesLeft)
             $("#wins").text(wins)

            for ( var i = 0; i < computerChoice.length; i++) {
            var wordblocks = $("<p>")
            wordblocks.addClass("wordblock" + i);
            wordblocks.addClass("block")
            wordblocks.addClass(computerChoice[i])
            // wordblocks.attr("letter", computerChoice[i]);
            $("#wordblanks").append(wordblocks);
            console.log(computerChoice)
            }
            
        }

        
    

        else if ( prevGuesses.includes(userGuess) ) {
            console.log("You already guessed that!")
            alert("Silly Goose You already guessed that!")
            }

        else if (computerChoice.includes(userGuess)) {
            
            console.log("You guessed right!");
            $("." + userGuess).text(userGuess);
            prevGuesses.push(userGuess);
            $("#guessedletters").text(prevGuesses);
            console.log(prevGuesses);
            wins++;
            $("#wins").text(wins)
            winsArray.push(userGuess);
            console.log(winsArray.length)
            
            

            
        }

        else {
            $("#guessedletters").text(userGuess);
            prevGuesses.push(userGuess);
            $("#guessedletters").text(prevGuesses);
            guessesLeft--;
            $("#guessesleftvalue").text(guessesLeft);
            console.log(guessesLeft);

        }
        
        
    


        

        
        
            
        
            

        
        
        
        

        

        

    }
});   

