// Initialize the Async Function
async function fetchUserData() {
  // Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select the Data Container Element
  const dataContainer = document.getElementById('api-data');

  // Clear any existing content (e.g., loading message)
  dataContainer.innerHTML = 'Loading user data...';

  // Fetch Data Using try-catch
  try {
      // Fetch data from the API
      const response = await fetch(apiUrl);

      // Convert the response to JSON
      const users = await response.json();

      // Clear the loading message
      dataContainer.innerHTML = '';

      // Create and Append User List
      const userList = document.createElement('ul'); // Create a <ul> element
      users.forEach(user => {
          const listItem = document.createElement('li'); // Create a <li> element
          listItem.textContent = user.name; // Set text to the user's name
          userList.appendChild(listItem); // Append the <li> to <ul>
      });

      // Append the user list to the data container
      dataContainer.appendChild(userList);

  } catch (error) {
      // Error Handling
      dataContainer.innerHTML = ''; // Clear existing content
      dataContainer.textContent = 'Failed to load user data.'; // Show error message
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  fetchUserData(); // Call the async function to fetch user data
});
