// Step 1: Get references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton');
const list = document.querySelector('#chaptersList');

// Step 2: Add click event listener to Add Chapter button
button.addEventListener('click', function() {

  // Step 3: Check input is not empty
  if (input.value.trim() !== '') {

    // Step 4: Create a new li element for the chapter
    const li = document.createElement('li');
    li.textContent = input.value; // Populate with input text

    // Step 5: Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`); // Accessibility

    // Step 6: Append delete button to li
    li.append(deleteButton);

    // Step 7: Append li to the list
    list.append(li);

    // Step 8: Add event listener to delete button
    deleteButton.addEventListener('click', function () {
      list.removeChild(li); // Remove the li
      input.focus(); // Return focus to input
    });

    // Step 9: Clear input field and set focus
    input.value = '';
    input.focus();

  } else {
    // Optional else branch if input is blank
    alert('Please enter a chapter!');
    input.focus();
  }
});
