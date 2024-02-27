const openDivButton = document.getElementById('open-div');
const overlayDiv = document.getElementById('overlay');
const landingPage = document.getElementById('landing-page');

openDivButton.addEventListener('click', () => {
    overlayDiv.style.display = 'block'; 
    landingPage.style.display = 'none'; // Hide landing page 
});


// Dairy Section
const dairyItems = document.querySelectorAll('.dairy-item');
const correctAnswers = [0, 2, 5]; // Array indices of correct items for dairy
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
      checkAnswers('dairy'); // Pass 'dairy' as the section type
      selectedCount = 0; 
    }
  });
});

// Meat Section
const meatItems = document.querySelectorAll('.meat-item');
const correctMeatAnswers = [1, 4, 5]; // Replace with the correct indices for your meat section 
let selectedMeatCount = 0; 
const selectedMeatItems = [];

meatItems.forEach((item, index) => {
 item.addEventListener('click', () => {
    const isCorrectMeat = correctMeatAnswers.includes(index);
    item.classList.add(isCorrectMeat ? 'correct' : 'incorrect'); 

    // Selection/Deselection Logic (Same as dairy)
    if (item.classList.contains('selected')) {
      item.classList.remove('selected');
      selectedMeatCount--;
      const indexToRemove = selectedMeatItems.indexOf(item);
      selectedMeatItems.splice(indexToRemove, 1);
    } else {
      item.classList.add('selected');
      selectedMeatItems.push(item); 
      selectedMeatCount++;
    }

    if (selectedMeatCount === 3) {
      checkAnswers('meat'); // Pass 'meat' as the section type
      selectedMeatCount = 0; 
    }
  });
});

// Beverages Section
const beverageItems = document.querySelectorAll('.bev-item'); 
const correctBeverageAnswers = [2, 3, 4]; // Make sure this is correct
let selectedBeverageCount = 0; 
const selectedBeverageItems = [];

beverageItems.forEach((item, index) => {
 item.addEventListener('click', () => {
  const isCorrectBeverage = correctBeverageAnswers.includes(index);
  item.classList.add(isCorrectBeverage ? 'correct' : 'incorrect'); 

  // Selection/Deselection Logic 
  if (item.classList.contains('selected')) {
   item.classList.remove('selected');
   selectedBeverageCount--;
   const indexToRemove = selectedBeverageItems.indexOf(item);
   selectedBeverageItems.splice(indexToRemove, 1);
  } else {
   item.classList.add('selected');
   selectedBeverageItems.push(item); 
   selectedBeverageCount++;
  }
	
	  if (selectedBeverageCount === 3) {
   checkBevAnswers(); 
   selectedBeverageCount = 0; 
  }
 });
});

function checkBevAnswers() {
  const selectedBevItems = document.querySelectorAll('.bev-item.correct');
  if (selectedBevItems.length === 3) {
    alert(`Correct! Moving on to the next section...`); 
    hideBeveragesSection();
    loadFinalSection(); 
  } else {
    alert("Incorrect. Please try again.");
    const bevItems = document.querySelectorAll('.bev-item'); 
    bevItems.forEach(item => item.classList.remove('selected', 'incorrect', 'correct'));
    selectedBeverageCount = 0; 
    selectedBeverageItems = []; 
  }
}

// Final Section
const finalItems = document.querySelectorAll('.final-item');
let selectedItem = null;

finalItems.forEach(item => {
  item.addEventListener('click', () => {
    if (selectedItem) {
      selectedItem.classList.remove('selected'); 
    }
    item.classList.add('selected');
    selectedItem = item; 
  });
});

const payButton = document.getElementById('paynow'); 
payButton.addEventListener('click', () => {
  if (selectedItem) {
    const isCorrect = selectedItem.dataset.correct === "true"; 
    if (isCorrect) {
      alert("Thank you for shopping with us, Kindly take your change of €5.43");
	  hideFinalSection();
      loadExitSection();
    } else {
      alert("Insufficient balance!");
      selectedItem.classList.remove('selected');
      selectedItem = null; 
    }
  } else {
    alert("Please select an item.");
  }
});

function loadExitSection() {
  console.log("loadFinalSection called"); 
  const container = document.getElementsByClassName('container5')[0];
  if (container) { 
    container.style.display = 'block';
  } else {
    console.error("Exit section container not found!");
  }
}

// Common Functions
function checkAnswers(sectionType) {
 const selector = `.${sectionType}-item.correct`; 
 const selectedItems = document.querySelectorAll(selector);

 if (selectedItems.length === 3) {
  alert(`Correct! Moving on to the next section...`); 

  if (sectionType === 'dairy') {
   hideDairySection();
   loadMeatSection();
  } else if (sectionType === 'meat') {
   hideMeatSection();
   loadBeveragesSection();
  }

 } else {
  alert("Incorrect. Please try again.");
  const items = document.querySelectorAll(`.${sectionType}-item`);
  items.forEach(item => item.classList.remove('selected', 'incorrect', 'correct')); 

  switch (sectionType) {
    case 'dairy':
      selectedCount = 0;
      selectedItems = [];
      break;
    case 'meat':
      selectedMeatCount = 0;
      selectedMeatItems = [];
      break;
  } 
 }
}

function hideDairySection() {
  const dairySection = document.querySelector('.container1'); // Adjust selector if needed
  dairySection.style.display = 'none'; 
}

function loadMeatSection() {
  const container = document.getElementsByClassName('container2')[0]; 
  container.style.display = 'block';
}

function hideMeatSection() {
  const meatSection = document.querySelector('.container2'); // Adjust selector if needed
  meatSection.style.display = 'none'; 
}

function loadBeveragesSection() {
  const container = document.getElementsByClassName('container3')[0]; 
  container.style.display = 'block';
}

function hideBeveragesSection() {
  console.log("hideBeveragesSection called"); 
  const beverageSection = document.querySelector('.container3'); 
  if (beverageSection) { 
    beverageSection.style.display = 'none';
  } else {
    console.error("Beverages section not found!"); 
  }
}

function loadFinalSection() {
  console.log("loadFinalSection called"); 
  const container = document.getElementsByClassName('container4')[0];
  if (container) { 
    container.style.display = 'block';
  } else {
    console.error("Final section container not found!");
  }
}


function hideFinalSection() {
  const finalSection = document.querySelector('.container4'); // Adjust selector if needed
  finalSection.style.display = 'none'; 
}


document.addEventListener('keydown', function (event) {
  if (event.code === 'Enter' || event.key === 'Enter') { // Check for the Enter key
    const button = document.getElementById('open-div');
    button.click(); // Simulate a click on the button
  }
});
