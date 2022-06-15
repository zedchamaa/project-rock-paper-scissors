# project-rock-paper-scissors

Part 1: Rock Paper Scissors Projects (The Odin Project)

1 - Start a new Git repo for your project.

2 - Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.

3 - Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

4 - Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

a. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

5 - Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

6 - Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 

a. Remember loops? This is a great opportunity to use one to play those five rounds:

for (let i = 0; i < 5; i++) {
   // your code here!
}

b. At this point you should be using console.log() to display the results of each round and the winner at the end.

c. Use prompt() to get input from the user. Read the docs here if you need to.

d. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.

e. Feel free to create more “helper” functions if you think it would be useful.

=================================================================================

Part 2: Revisiting Rock Paper Scissors

1 - Set up a new branch on your previous Rock Paper Scissors repo 

a. Since we’ll be making a UI for our Rock Paper Scissors game, make a new branch and change to it with the command git checkout -b rps-ui.

b. You are now working in the rps-ui branch, locally. However, this branch does not exist in your remote repo yet. If you go to your github repo page, you’ll see that you only have 1 branch, which would be main. Let’s push this new branch to your remote repo with the command git push origin rps-ui. Now, you’ll see two branches in your Github repository!

c. Make sure you are on the rps-ui branch. You can check this, with the git branch command. The branch you are currently on will have an (*)asterisk next to it. If you’re in another branch for some reason, change to rps-ui with the command git checkout rps-ui. Now you’re all set to work on your new feature! Note: You can add files, commit to this branch, and push changes to your repo, just like you would with the main branch. Everything is the same except when you push the changes, you’d use git push origin rps-ui instead of git push origin main, since we’re pushing to our new branch.

2 - In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt. 

a. For now, remove the logic that plays exactly five rounds.

b. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

c. Add a div for displaying results and change all of your console.logs into DOM methods.

d. Display the running score, and announce a winner of the game once one player reaches 5 points.

e. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

f. Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.

3 - Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch. 

a. Checkout the branch we want to merge INTO i.e. main with the command git checkout main.

b. Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.

c. If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!

d. Let’s push our main branch into our remote repo by running git push origin main . Go to your Github repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!

e. Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on Github with git push --delete origin rps-ui. Congrats, we’re all done with our cleanup!

