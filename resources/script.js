const openDivButton = document.getElementById('open-div');
const overlayDiv = document.getElementById('overlay');
const landingPage = document.getElementById('landing-page');

openDivButton.addEventListener('click', () => {
    overlayDiv.style.display = 'block'; 
    landingPage.style.display = 'none'; // Hide landing page 
});


const itemsArea = document.getElementById('items-area');
// Function to display the shopping list
function displayShoppingList() {
   // ... Create list elements and add them to 'shoppingListDisplay'
}

// Function to display items as clickable options
function displayItems() {
    // ... Create image elements or buttons and add them to 'itemsArea'
}


// Initial setup 
displayShoppingList();
displayItems(); 


const dairyItems = document.querySelectorAll('.dairy-item');
const correctAnswers = [0, 2, 5]; // Array indices of correct items
let selectedCount = 0; 
const selectedItems = [];

dairyItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const isCorrect = correctAnswers.includes(index);
        item.classList.add(isCorrect ? 'correct' : 'incorrect'); 

		// Selection/Deselection Logic
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
            selectedCount--;
            const indexToRemove = selectedItems.indexOf(item);
            selectedItems.splice(indexToRemove, 1);
        } else {
            item.classList.add('selected');
            selectedItems.push(item); 
            selectedCount++;
        }

        if (selectedCount === 3) {
            checkAnswers(); 
			selectedCount = 0;
        }
    });
});

function checkAnswers() {

    const selectedItems = document.querySelectorAll('.dairy-item.correct');



    if (selectedItems.length === 3) {

        // All correct items have been selected!

        alert("Correct! Moving on to the next section..."); // Placeholder action  



        // Your logic to transition to the next section:

        // 1. Hide the current dairy section

        // 2. Load and show the next section (e.g., the "meat" section)

	   hideDairySection(); 
       loadMeatSection();		

    } else {

        alert("Incorrect. Please try again.");
		    // Reset selection 
            selectedItems.forEach(item => item.classList.remove('selected')); 
            selectedCount = 0; 
            selectedItems = []; // Clear the tracking array 
    }

}

function hideDairySection() {
    // Example using display: none
    const dairySection = document.querySelector('.container1'); // Adjust selector if needed
    dairySection.style.display = 'none'; 
}

function loadMeatSection() {
	
	container2.style.display = 'block'; 
}

