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
   
   for (var i = 0; i < links.length; i++) {
           
      if (links[i].substring(0,24) == "https://www.cotodigital3") {
         document.getElementById("file").innerHTML ="Bajando link Coto";
        
         var url = "https://scrapers-caravaggio.herokuapp.com/coto/search/";
         var ult= links[i];
       
         ult=ult.substring(54);
         ult=ult.replace("/_/","");
         var updated_url = url + ult;
                    
          await fetch(updated_url)
           .then(function (response) {
              return response.text();
            })
            .then(function (data) {
               document.getElementById("file").innerHTML = i + 1 + ": "+ links[i];            
               al_archivo = al_archivo + links[i].replace(/(\r\n|\n|\r)/gm, "") + ";" + data + "\n" ;      
            })
             .catch(function (err) {
               console.log(err);
            });    

   } else {
      if (links[i].substring(0,15) == "https://www.vea") {
       document.getElementById("file").innerHTML ="Bajando link VEA";
       
       links[i]=links[i].replace(/(\r\n|\n|\r)/gm, "")
       document.getElementById("file").innerHTML = i + 1 + ": "+ links[i];
       var url = "https://scrapers-caravaggio.herokuapp.com/vea/search/";
       var updated_url = url + links[i].substring(23).substring(0, links[i].length - 25);
             
        await fetch(updated_url)
          .then(function (response) {
            return response.text();
          })
          .then(function (data) {
                  
          al_archivo = al_archivo + links[i].replace(/(\r\n|\n|\r)/gm, "") + ";" + data + "\n" ;
          
          })
          .catch(function (err) {
            console.log(err);
          });    
   

   } else {
      document.getElementById("file").innerHTML ="El formato del link no es el correcto";
      al_archivo = al_archivo + links[i].replace(/(\r\n|\n|\r)/gm, "") + ";" + "formato de link incorrecto" + "\n" ;
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
