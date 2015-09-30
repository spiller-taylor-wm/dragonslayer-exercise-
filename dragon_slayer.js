/**
 * Catch the Cat
 * by Taylor Spiller
 * Changed the concept of the game from killing a dragon
 * to playing hide and seek with your defiant cat.
 * You go through two stages: Finding the cat and catching the cat.
 * If you are able to find the cat, your speed then determines if you can catch it.
 * If you are too slow, you have the option to try again.
 * If you cannot find the cat at all, you lose and the game will end.
 *
 * There is a function in place to reset the game if you wish to play again.
 *
 * EDIT: 29 Sept. 2015
 * Changes if statement determining if the cat was found into a switch statement
 */
var found = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;


/** Removed while loop and replaced it with a function */
var hit = function()
{
    console.log("Your cat has hidden from you. Let's see if you can find him.")
    switch(found)
    {
        case 1:
            //Cat was found
            console.log("You found the cat, but are you fast enough to catch him?");
            totalDamage += damageThisRound;
            if ( totalDamage >= 4 )
            {
                console.log("You were fast enough to catch him. You win!");
                next = confirm("Would you like to play again?");
                if (next == true)
                {
                    // Restart and Play again
                    restart();
                    hit();
                }
                else
                {
                    // Player declines to play again
                    console.log("Goodbye.");
                }
            }
            else
            {
                // Too slow to catch cat
                youHit = Math.floor(Math.random() * 2);
                console.log("Too slow!")
                var next = confirm("Too slow! Try again?");
                if (next == true)
                {
                    // try to catch again
                    hit();
                }
                else {
                    // Player declines to play again
                    console.log("Goodbye.");
                }
            }
            break;

        default:
            // Did not find cat
            console.log("You couldn't find the cat. You lose.");
            restart();
            next = confirm("Would you like to play again?");
            if (next == true)
            {
                // Restart and Play again
                restart();
                hit();
            }
            else
            {
                // Player declines to play again
                console.log("Goodbye.");
            }
    }
};


/** RESTART FUNCTION = Restarts the game, resets the variables, and clears the console */
var restart = function()
{
    found = Math.floor(Math.random() * 2);
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    totalDamage = 0;
    console.clear();
};

hit();
