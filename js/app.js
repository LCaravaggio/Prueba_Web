// Function to handle the search criteria via button click
function handleClickSearch() {

    
        var url = "https://hello-world-l.herokuapp.com/";
        var updated_url = url + "hamburguesas-good-mark-de-carne-4-u-320-gr";


        fetch(updated_url)
          .then(function (response) {
            return response.json();
          }

        // Start file download.
        download("hello.txt","This is the content of my file :)");
        
}

// Attach an event to listen for the search recipes button
d3. select("#search-btn").on("click", handleClickSearch);

    
    
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

