var al_archivo="";
var TXT="";
var links="";


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
   links=TXT.split("\n");
   
   for (var i = 0; i < links.length; i++) {
           
      if (links[i].substring(0,24) == "https://www.cotodigital3") {document.getElementById("file").innerHTML ="COTO";} 
         else {
            if (links[i].substring(0,15) == "https://www.vea") {document.getElementById("file").innerHTML ="VEA";}   
                else {            
                   if (links[i].substring(0,28) == "https://www.carrefour.com.ar"){document.getElementById("file").innerHTML ="CARREFOUR";}
                       else {
                           if (links[i].substring(0,17) == "https://diaonline"){document.getElementById("file").innerHTML ="DIA";}
                                else {
            document.getElementById("file").innerHTML ="El formato del link no es el correcto";
            al_archivo = al_archivo + links[i].replace(/(\r\n|\n|\r)/gm, "") + ";" + "formato de link incorrecto" + "\n" ;
                                }
                       }        
                 }
          }
     } 
               }      
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
}
