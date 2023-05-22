// Function to fetch data from the API
async function fetchData() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.log('Error fetching data:', error);
      return [];
    }
  }
  
  // Function to display the list of items on the screen
  function displayItems(items) {
    const itemList = document.getElementById('item-list');
  
    // Clear any existing items
    itemList.innerHTML = '';
  
    // Create HTML elements for each item and append to the list
    items.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = item.strMeal;
  
      const imageElement = document.createElement('img');
      imageElement.src = item.strMealThumb;
      imageElement.alt = item.strMeal;
  
      itemElement.appendChild(titleElement);
      itemElement.appendChild(imageElement);
      itemList.appendChild(itemElement);
    });
  }
  
  // Event listener for page load
  window.addEventListener('load', async () => {
    // Fetch data from the API
    const items = await fetchData();
  
    // Display the items on the screen
    displayItems(items);
  });
  