// Helper function: replaces content inside #out
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0  /*Represents the number of times you clicked on an object*/

document.getElementById('btnClick').addEventListener('click', () => {

   clickCount++

   render(`<p>You clicked ${clickCount} times on the button</p>`)  /*Outputs the message to the output box*/
})

/*Element Selected, the event you are listening for, prints or outputs something*/



/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */
const dblCard = document.getElementById('dblCard')
   
  dblCard.addEventListener('dblclick', () => {
   dblCard.classList.toggle('activated')
   const state = dblCard.classList.contains('activated') ? 'ON' : 'OFF'
   render(`<p>Double-click highlight is <strong>${state}</strong>.</p>`)
  })
  /*Toggle uses DOM to see if something is there or not*/

/* --------------------------------
   Demo 3: Keypress (show key/code)
--------------------------------- */


/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */


/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
  render('<span class="text-secondary">Output cleared.</span>')
  clickCount = 0
})

/* =================================================
   🔥 Event Listeners Challenge (Pick ONE to complete)

   Option A — Hover Highlight + Counter
   - Create a variable to track how many times the card was hovered
   - Add event listeners for mouseenter and mouseleave on the card
   - On mouseenter: add a highlight class, increase the counter, and show the count in #out
   - On mouseleave: remove the highlight class and show a message in #out

   Option B — Scroll Progress Bar
   - Add a small Bootstrap progress bar element at the very top of the page
   - Select the inner bar element
   - Write a function that calculates % scrolled
     (current scroll position ÷ total scrollable height)
   - Update the width of the bar with that percentage
   - Run this function when the page loads and on every scroll event

   Option C — Live Input Mirror
   - Add a text input element to the page
   - On every keystroke: update #out with a message that includes the input value
   - If the input is empty: show a neutral placeholder message instead
   - On focus: add a border/shadow class to the input
   - On blur: remove those classes and make sure #out shows the right message
================================================== */
