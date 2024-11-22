// Select the container where the list will appear
const dataList = document.getElementById('data-list');
const dataList2 = document.getElementById('data-list-2');

// Function to fetch hot coffee data from an API
async function fetchHotCoffee() {
    try {
        // Fetch data from a sample API
        const response = await fetch('https://api.sampleapis.com/coffee/hot'); // Example API
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Populate the list with API data
        data.forEach(item => {
            const listItem = document.createElement('li'); // Create a new list item
            listItem.textContent = item.title; // Use a property from the API data
            dataList.appendChild(listItem); // Add the item to the list
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function when the page loads
fetchHotCoffee();

// Function to fetch hot coffee data from an API
async function fetchIcedCoffee() {
    try {
        // Fetch data from a sample API
        const response = await fetch('https://api.sampleapis.com/coffee/iced'); // Example API
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Populate the list with API data
        data.forEach(item => {
            const listItem = document.createElement('li'); // Create a new list item
            listItem.textContent = item.title; // Use a property from the API data
            dataList2.appendChild(listItem); // Add the item to the list
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function when the page loads
fetchIcedCoffee();