// Step 1: Get references to elements
const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton');
const list = document.querySelector('#chaptersList');

// Step 2: Add event listener to the button
button.addEventListener('click', () => {
  if (input.value.trim() === "") return; // Prevent empty entries

  // Step 3: Create a new li and delete button
  const li = document.createElement('li');
  li.textContent = input.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

  // Step 4: Append delete button to li, li to list
  li.append(deleteButton);
  list.append(li);

  // Step 5: Clear input for next entry
  input.value = '';

  // Step 6: Add event listener to delete the li
  deleteButton.addEventListener('click', () => {
    li.remove();
  });
});
