### PROJECT COVERED

✅ What I Learned: YouTube Subscribe Button

### HTML

Structuring a page with semantic elements (<button>, <input>, <p>)
Using class attributes to target elements
Inline event handlers (onclick, onkeydown)
placeholder attribute on inputs

### CSS

Styling buttons with border-radius, padding, cursor
Toggling styles dynamically with a second class (.is-subscribed)


### JavaScript

document.querySelector() — selecting DOM elements
innerHTML — reading and updating element content
classList.add() / classList.remove() — toggling CSS classes
Number() — converting string input to a number
if / else — conditional logic
Event handling — onclick and onkeydown
event.key — detecting which key was pressed (Enter)
Template literals — `$${cost}` for dynamic string output
Functions — breaking logic into reusable blocks (subscribe(), calculateTotal(), handleKeydown())


### Core Problem-Solving Skills

Building an interactive UI without any libraries
Handling user input from both a button click and keyboard
Toggling state (subscribed / unsubscribed) using class manipulation



✅ What I Learned: Amazon Shipping Calculator


### HTML

<input> — capturing user input
placeholder — hint text inside the input field
onkeydown — listening for keyboard events on the input
Passing event as an argument to a function (handleKeydown(event))


### JavaScript

document.querySelector() — selecting the input and result elements
Number() — converting the string input value to a number
let vs const — using let because cost gets reassigned
Conditional logic — adding $10 shipping only if order is under $40
Template literals — `$${cost}` to display the result dynamically
innerHTML — updating the page with the calculated total
event.key === 'Enter' — triggering calculation on Enter key press


### Core Problem-Solving Skills

Reading a value from user input and converting its type
Applying business logic (shipping rule: under $40 → add $10)
Two ways to trigger the same action — button click or Enter key
Displaying a calculated result back to the user on the page





✅ What I Learned: Rock Paper and Scissors Project


### HTML

Linking external CSS (<link>) and JS (<script src="...">) files
Using <img> inside buttons for emoji icons
Multiple inline onclick statements chained together
Separating concerns across files (index.html, styles/, script/)


CSS (external file)

Separate stylesheet — cleaner than inline styles


### JavaScript

Objects — score object tracking wins, losses, ties
localStorage — saving and loading score across page refreshes (localStorage.removeItem('score'))
Functions — pickComputerMove(), playerGame(), updateScore()
Conditional logic — determining win/loss/tie based on player and computer moves
Math.random() — generating a random computer move
DOM manipulation — updating .js-result, .js-moves, .js-score with innerHTML
Resetting state — manually zeroing an object's properties and clearing localStorage


### Core Problem-Solving Skills

Separating game logic across multiple files (HTML, CSS, JS)
Persisting data with localStorage so score survives page reloads
Using an object to group related data (score.wins, score.losses, score.ties)
Generating randomness for computer AI





✅ What I Learned: Todo List Project 

### HTML

Semantic structure with div containers and class names prefixed js- to separate styling hooks from JS hooks
onclick inline event handlers to trigger JS functions
Linking external CSS and JS files via <link> and <script src="">

### JavaScript
Arrays = list of values
Loops (while loop, for loop)
Accumulator Pattern
Array of objects — todoList stores each task as { name, dueDate } instead of plain strings
Destructuring — const { name, dueDate } = todoObject pulls properties out cleanly instead of todoObject.name, todoObject.dueDate
Template literals — backtick strings to build HTML dynamically with embedded variables (${name})
DOM manipulation — querySelector to find elements, .innerHTML to inject generated HTML into the page
Shorthand object properties — { name, dueDate } instead of { name: name, dueDate: dueDate } when pushing to the array
splice — removes a todo by index: todoList.splice(i, 1) deletes 1 item at position i
Re-render pattern — every change (add or delete) calls renderTodoList() to rebuild the UI from the current array state

### CSS

CSS Grid — grid-template-columns: 200px 150px 100px aligns the input row and todo rows into matching columns
column-gap / row-gap for spacing between grid cells
align-items: center/stretch to control vertical alignment inside grid rows