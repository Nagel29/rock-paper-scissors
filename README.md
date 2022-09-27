______________________________________________________  
# rock-paper-scissors

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This website allows the user to play rock-paper-scissors against a computer player. It provides two different game modes for the user to pick from: Classic or Advanced. The Advanced game mode adds two additional fighter options to select. The program is written so that the computer player randomly selects a fighter each round, and it will keep track of both the human and computer's scores.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork the `rock-paper-scissors` repository
2. Clone down your new, forked repo
3. In the terminal cd into the repository
4. Open it in your text editor to view the code
5. View the project in the browser by running open index.html in your terminal

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![](/images/Snapshot.png)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
I am in week 6 of the Turing School of Software and Design course. This project took me a total of roughly 10 hours to complete.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
I am the only contributor of this application: <a href="https://github.com/Nagel29">Ryan Nagel</a>

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
* Solidify and demonstrate your understanding of:
  * DRY JavaScript
  * event delegation to handle similar event listeners
* Understand the difference between the data model and how the data is displayed on the DOM
* Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge


### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
* Wins:
  - I learned a little bit about local storage and how to save data from a session so that it is still there upon page refresh.
  - I was able to use all of the concepts I've learned through the first 6 weeks of Turing, in the manner that I saw best, to achieve the end result of this project.
* Challenges:
  - Building out the logic for the game itself was a bit of a challenge at first. I didn't want to use a massive if/else statement for counting who wins each round, so I was able to figure out an alternate way of doing it by adding the game results as a property of the Game class and accessing that to check for the winner.
