document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const textBox = document.getElementById('textbox');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const inputValue = textBox.value.trim(); // Get the trimmed value of the input field
        if (inputValue !== '') {
            // Create a new line with the text and a checkbox
            const newLine = document.createElement('div');
            newLine.classList.add('todo-item');
            newLine.innerHTML = `
                <span>${inputValue}</span>
                <input type="checkbox">
            `;
            todoList.appendChild(newLine); // Append the new line to the todo list

            // Add event listener to the checkbox
            const checkbox = newLine.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    newLine.classList.add('completed');
                    setTimeout(function() {
                        newLine.remove(); // Remove the to-do item from the list
                    }, 500); // Delay the removal by 500ms to allow the animation to play
                }
            });

            textBox.value = ''; // Clear the input field after submission
        }
    });
});