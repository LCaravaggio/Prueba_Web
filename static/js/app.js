var al_archivo="";
var TXT="";


function handleClickSearch() {
   //var links=TXT.split("\n");
   document.getElementById("file").innerHTML="Bajando 3";   
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
