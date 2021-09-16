// Function to handle the search criteria via button click
function handleClickSearch() {

    document.getElementById("search_num").innerHTML = "Hola!";      
}

// Attach an event to listen for the search recipes button
d3.select("#search-btn").on("click", handleClickSearch);
