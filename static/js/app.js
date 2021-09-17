var al_archivo=""
var links=[
"galletitas-lincoln-angry-birds",
"galletitas-criollitas-de-agua-x100gr",
"galletitas-criollitas-x400g",
"galletitas-media-tarde-de-agua-x-321-gr",
"hamburguesas-good-mark-de-carne-4-u-320-gr",
"hamburguesa-union-ganadera-4-u-332-gr",
"salchichas-paladini-tipo-viena-sin-piel-225-gr-6-u"
]

// Function to handle the search criteria via button click
function handleClickSearch() {
  
    document.getElementById("search_num").innerHTML = "Probá mejor el de VEA 5";
 }



function handleClickSearch2() {
    
    api_call();   
}

// Attach an event to listen for the search recipes button
d3.select("#search-btn").on("click", handleClickSearch);
d3.select("#search-btn2").on("click", handleClickSearch2);
document.select("#search-btn").on("click", handleClickSearch);
document.select("#search-btn2").on("click", handleClickSearch2);


function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


async function api_call(){
for (var i = 0; i < links.length; i++) {
       var url = "https://hello-world-l.herokuapp.com/vea/search/";
       var updated_url = url + links[i];
             
        await fetch(updated_url)
          .then(function (response) {
            return response.text();
          })
          .then(function (data) {
                  
           al_archivo = al_archivo + links[i] + ";" + data + "\n" ;
           document.getElementById("file").innerHTML = i + 1 + ": "+ links[i];
          
          })
          .catch(function (err) {
            console.log(err);
          });    
    }

document.getElementById("file").innerHTML = "Listo!"
    
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

download(year + "-" + month + "-" + date + "-" + hours + "-" + minutes + "-" + seconds+".csv",al_archivo);    
}
