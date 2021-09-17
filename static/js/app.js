var al_archivo=""
var links=[
"galletitas-lincoln-angry-birds",
"galletitas-criollitas-de-agua-x100gr",
"galletitas-criollitas-x400g",
"galletitas-media-tarde-de-agua-x-321-gr",
"hamburguesas-good-mark-de-carne-4-u-320-gr",
"hamburguesa-union-ganadera-4-u-332-gr",
"salchichas-paladini-tipo-viena-sin-piel-225-gr-6-u",
"salchichas-paty-de-viena-6-u-225-gr",
"salchichas-granja-iris-americana-225-gr-5-u",
"jamon-cocido-paladini-feteado-200-gr",
"jamon-cocido-campo-austral-3",
"salchichon-lario-2",
"salame-milan-lario-feteado-x-150g",
"aceite-cocinero-girasol-2",
"aceite-canuelas-de-girasol-x-900-ml",
"leche-entera-clasica-la-serenisima-sachet-1-l",
"leche-entera-3-armonia-sachet-1-l",
"leche-en-polvo-nido-3-prebio-1-leche-800g",
"queso-pategras-la-serenisima-paq-x-kg-2",
"queso-pategras-sancor-tradicional-ca-pintado-1-kg",
"yogurisimo-firme-preform-fortifizado-190-gr-frutilla",
"yogur-firme-la-serenisima-vainilla-190-gr",
"dulce-de-leche-clasico-la-serenisima-400-gr",
"dulce-de-leche-familiar-milkaut-x-405-gr",
"huevos-blancos-la-piara-x-12u-carton",
"huevos-blancos-la-piara-x6u-carton",
"tomate-perita-molto-entero-x-400-gr",
"arvejas-pagos-del-sur-x-350-grs",
"arvejas-secas-remojadas-molto-brk-gr-200",
"sal-fina-dos-anclas-x500gr",
"sal-fina-celusal-3",
"flan-royal-x60gr",
"exquisita-flan-de-vainilla-x60-gr",
"flan-vainill-godet-30-gr",
"gaseosa-coca-cola-sabor-original-2-25-l",
"gaseosa-cola-pepsi-regular-2-25l",
"agua-mineral-de-manantial-eco-de-los-andes-con-gas-1-5-l",
"agua-villavicencio-pet-sin-gas-1-5-l",
"agua-baja-en-sodio-glaciar-2-l",
"cerveza-brahma-chopp-rubia-1lt-retornable",
"cerveza-schneider-rubia-1lt",
"vino-de-mesa-pico-de-oro-tinto-1-l",
"vino-suc-abel-michel-torino-tinto",
"cafe-la-virginia-molido-500gr",
"cafe-la-planta-de-cafe-molido-260g",
"granby-jabon-para-ropa-polvo-baja-espuma-800-gr",
"detergente-en-polvo-zorro-baja-espuma",
"jabon-en-polvo-ala-lavado-a-mano-con-perlas-suavizantes-800-g",
"lavavajillas-zorro-colageno-cremo-750ml",
"ala-jabon-para-ropa-en-pan-multiaccion-200-gr",
"lavandina-ayudin",
"lavandina-querubin-2",
"shampoo-para-bebe-johnson-s-rulos-definidos-400-ml",
"shampoo-sedal-ceramidas-340ml",
"shampoo-tresemme-bajo-poo-nutricion-400-ml",
"jabon-en-barra-palmolive-naturals-oliva-y-aloe-125-gr-pack-3-u-2",
"desodorante-antitranspirante-rexona-invisible-en-aerosol-150-ml",
"desodorante-femenino-antitranspirante-nivea-powder-150-ml",
"suavizante-para-ropa-comfort-clasico-900-ml",
"limpiador-procenex-repuesto-420-ml",
"limpiador-liquido-cif-antigrasa-biodegradable-500-ml-gatillo",
"limpiador-liquido-cif-antigrasa-biodegradable-450-ml-doypack",
"desodorante-de-ambiente-poett-frescura-de-lavanda-360-ml",
"ayudin-desinfectante-aerosol-original-332ml",
"aromatizante-de-ambientes-glade-manana-de-campo-en-aerosol-360ml",
"insecticida-selton-mata-moscas-y-mosquitos-sin-olor-a-quimicos-aerosol-360-cm3",
"insecticida-raid-mata-moscas-y-mosquitos-sin-olor-en-aerosol-360-cc",
"rollo-de-cocina-campanita-classic-x-3-un",
"rollo-de-cocina-sussex-3x50-clasico",
"rollo-de-cocina-3x50-panos-vea",
"cocina-volcan-blanco-a-gas-89644vm",
"cocina-orbis-macrovision-858bc3m-blanca",
"heladera-ciclica-patrick-hpk135m00b01-277l-blanca",
"heladera-electrolux-no-frost-blanca-269-l",
"termotanque-saiar-elec-pol-85l-tepco85esarik2",
"termotanque-gas-rheem-80-l",
"aire-acondicionado-bgh-blanco-frio-calor-3450-w",
"aire-acondicionado-philco-phs32ha3an-3350-blanco-fc",
"lavarropas-drean-7-kg-eea",
"lavarropas-aurora-7510-carga-frontal-7k",
"leche-la-serenisima-uat-parcialmente-descremada-liviana-1-l",
"leche-ls-uat-entera-clasica-3brik-1l",
"leche-en-polvo-nido-3-prebio-1-leche-800g",
"papel-higienico-campanita-doble-hoja-x-4un",
"papel-higienico-elite-hoja-simple-30-m-4-u",
"papel-higienico-felpita-hoja-simple",
"manzana-5",
"banana-x-kg",
"pera-6",
"naranja-ombligo-por-kg",
"limon",
"mandarina-6",
"pomelo-por-kg",
"cebolla-superior-por-kg",
"papa-negra-granel",
"tomate-redondo-comercial",
"zanahoria",
"zapallo-coreano",
"pimiento-rojo-superior",
"acelga-8",
"lechuga-7",
"remolacha-por-kg",
"azucar-chango",
"azucar-domino-1-kg",
"endulzante-hileret-clasico-x-50-sobrecitos",
"edulequalsweetclassobres-con-zinc-40-un",
"endulzante-hileret-sweet-forte-x-50-sobrecito",
"mayonesa-cada-dia-light-500-gr",
"mayonesa-hellmanns-475g",
"lavandina-ayudin",
"lavandina-queruclor-conc-premium-1l",
"lavandina-ayudin-triple-poder-lavanda-2-l",
"lavandina-querubin",
"toallas-higienicas-always-suave-maxi-proteccion-16-unidades",
"toallas-femeninas-siempre-libre-especial-adapt-con-alas-x-16-u",
"toal-fem-ladysoft-normal-tela-suax16",
"toalla-femenina-kotex-esencial-x-16-u",
"yerba-mate-playadito-suave-x500gr",
"yerba-mate-rosamonte-con-palo",
"te-ngr-clasic-green-hills-momentos-50sac",
"te-vea-en-saquitos-x-50-un",
"gaseosa-cunnington-cola-2250cc",
"gaseosa-cordoba-cormillot-cola-2-25-lts",
"jugo-citric-refrigerado-manzana-1-l",
"jugos-tutti-multifruta-2",
"panal-huggies-triple-protecc-m-x26un",
"panal-babysec-ultra-m-x-26-u",
"jabon-de-glicerina-veritas",
"jabon-liquido-algabo-5",
"helado-sei-tu-palito-bombon-x6u",
"helado-balde-noel-ddlfllachoc-1kg",
"chocolate-kinder-100-gr",
"caramelos-sugus-masticables-frutales-x-150-gr",
"filet-de-merluzaj-x-kg",
"mejillones-pelado-250-gr",
"langostinos-pelados-cocidos-superbe",
"kani-kama-santa-elena-2",
"medallones-de-merluza-rebozados-portobelo-500-gr",
"manteca-tonadita-c-vitamina-200g",
"manteca-multivitaminas-la-serenisima-200gr",
"asado-de-novillito-ca",
"vacio-de-novillito-ca",
"matambre-3",
"milanesa-cuadrada-por-kg",
"milanesa-bola-de-lomo-4",
"tapa-de-asado-por-kg-2",
"carnaza-comun-por-kg",
"falda-por-kg",
"roast-beef-trozo-por-kg",
"carne-picada-promo-de-novillito",
"carre-de-cerdo-deshuesado-congelado",
"milanesa-nalga-5",
"bife-de-chorizo-2",
"higado",
"paleta-en-trozo-de-novillito",
"flautita-p",
"pan-lacteado-lactal-de-mesa-x-335grs",
"pan-lacteado-dona-noly-2",
"arroz-dos-hermanos-grano-largo-fino-1-kg",
"arroz-integral-gallo-x1-kg",
"harina-canuelas-ultra-ref-000-vit-d-1kg",
"harina-presto-pronta-de-maiz-2",
"semola-clasica-con-calcio-vitina-x500-gr",
"pan-rallado-preferido-x1-kg",
"fideos-marolio-spaghetti-secos-c-curcuma-x500g",
"fideos-spaghetti-lucchetti-x500-gr",
"fideos-marolio-tirabuzon-x-500-gr-fideos-marolio-tirabuzon-x-500-gr",
"fideos-tirabuzon-lucchetti-x500-gr",
"fideos-marolio-mostachol",
"fideos-mostachol-lucchetti-x500-gr",
"prepizza-x-1-un-3",
"ravioles-p-y-v-via-vespucci-x-500gr",
"ravioles-con-ricota-villa-d-a-gr-y-espinaca-500-gr",
"tapas-p-empanadas-dona-noly-criollas-x-330-g",
"tapas-empanadas-punto-pasta-criollas-horno-freir-x-300grs",
"tapa-empanadas-horno-villa-d-a-gr-330-gr-blister-12-u",
"tapa-pascualina-criolla-dona-noly-400-g",
"tapas-pascualinas-punto-pasta-hojaldradas-x-400grs",
"talitas-don-satur-x140gr",
"tostadas-clasicas-riera-2",
"leche-ls-uat-entera-clasica-3brik-1l",
"leche-la-serenisima-uat-parcialmente-descremada-liviana-1-l",
"leche-entera-uat-tregar-x-1-litro",
"leche-uat-desc-1tregar-1l",
"desodorante-de-ambiente-poett-espiritu-play-360-ml",
"yerba-mate-rosamonte-con-palo-2",
"jugos-tutti",
"ravioles-ricota-via-vespucci-x-500gr",
"asado-de-novillito",
"asado-del-centro-de-novillito",
"vacio-de-novillito-2",
"vacio-de-novillito",
"cuadrada-en-milanesa-de-novillito",
"bola-de-lomo-promo-x-kg",
"falda-de-novillito",
"carne-picada-promo-de-novillito",
"vino-coliman-clasico-tinto",
"vino-fino-colon-malbec-x-750-cc",
"cerveza-schneider-rubia-1lt",
"cerveza-palermo-1lt-retornable",
"cerveza-andes-rubia-ret-1lt",
"ravioles-pollo-via-vespucci-x-1kg",
"leche-parcialmente-descremada-1-armonia-sachet-1-l",
"milanesa-nalga-5",
"cuadril-de-novillito",
"entrana-2",
"paleta-en-trozo-de-novillito",
"mayonesa-hellmanns-475g",
"queso-sardo-la-paulina",
"queso-sardo-la-serenisima-paq-x-kg"
]

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
           
       
          })

          .catch(function (err) {
            console.log(err);
          });
    
    document.getElementById("search_num").innerHTML = "Holas 18!";
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
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


async function api_call(){
for (var i = 0; i < links.length; i++) {
       var url = "https://hello-world-l.herokuapp.com/api/search/";
       var updated_url = url + links[i];
             
        await fetch(updated_url)
          .then(function (response) {
            return response.text();
          })
          .then(function (data) {
                  
           al_archivo = al_archivo + links[i] + ";" + data ;
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
