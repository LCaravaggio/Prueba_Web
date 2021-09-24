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
   
   
}
}
