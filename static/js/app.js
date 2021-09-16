// Function to handle the search criteria via button click
function handleClickSearch() {

    var query = "hamburguesas-good-mark-de-carne-4-u-320-gr"
    var url = "https://hello-world-l.herokuapp.com/api/search/";
    var updated_url = url + query;
    
   fetch(updated_url)
          .then(function (response) {
            return response.text();
          })
          .then(function (data) {
                  
           var al_archivo = query + ";" + data;
           document.getElementById("file").innerHTML = al_archivo
           download("hello.txt",al_archivo);
       
          })

          .catch(function (err) {
            console.log(err);
          });
    
    document.getElementById("search_num").innerHTML = "Holas 18!";
 }


function handleClickSearch2() {
    document.getElementById("file").innerHTML = "botón 2";
}

// Attach an event to listen for the search recipes button
d3.select("#search-btn").on("click", handleClickSearch);
d3.select("#search-btn2").on("click", handleClickSearch2);
document.select("#search-btn").on("click", handleClickSearch);
document.select("#search-btn2").on("click", handleClickSearch2);


function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
