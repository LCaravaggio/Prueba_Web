var al_archivo="";
var TXT="";


function handleClickSearch() {
baja();
}

   
d3.select("#search-btn").on("click", handleClickSearch);

document.getElementById('inputfile')
            .addEventListener('change', function() {
              
            var fr=new FileReader();
            fr.onload=function(){
            TXT=fr.result;
            }
            fr.readAsText(this.files[0]);
        })

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

async function baja() {
     
   if (TXT == "") {
     document.getElementById("file").innerHTML ="No ha ingresado un archivo";
     } else {
   
   al_archivo="";
   var links=TXT.split("\n");
   

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
}
