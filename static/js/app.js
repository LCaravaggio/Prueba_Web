// Function to handle the search criteria via button click
function handleClickSearch() {

    var url = "https://hello-world-l.herokuapp.com/";
    var updated_url = url + "hamburguesas-good-mark-de-carne-4-u-320-gr";
    
   fetch(updated_url)
          .then(function (response) {    
               document.getElementById("file").innerHTML = updated_url;
          })
    
    document.getElementById("search_num").innerHTML = "Holas 5!";
    
    
}

// Attach an event to listen for the search recipes button
d3.select("#search-btn").on("click", handleClickSearch);
document.select("#search-btn").on("click", handleClickSearch);
