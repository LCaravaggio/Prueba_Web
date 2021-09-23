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



linkscoto=[
"-galldulces-acaramelada-vocacion-paq-150-grm",
"-galldulces-chocolat-lincoln-paq-153-grm",
"-galletitas-dulces-lincoln-clasica-paq-153-grm",
"-cuadril--seleccion-x-kg",
"-hamburguesa-coto-cja-4-uni",
"-hamburguesa--swift-cja-4-uni",
"-hamburguesa-clasica-paty-cja-320-grm",
"-salchicha-paladini-paq-6-uni-225-grm",
"-salchicha-escudo-de-oro-sin-piel-paq-6-uni-190-grm",
"-salchicha-granja-iris-paq-6-uni-225-grm",
"-salchicha--patyviena-x-6-225-grm",
"-jamon-cocido-feteado-primera-marc-xkg",
"-salchichon-c-jamon-feteado-ebro-xkg",
"-salchichon-primavera-feteado-ebro-xkg",
"-salchichon-c-jam-feteado-la-octava-xkg-1-kgm",
"-salchichon-primav-fetead-la-octava-xkg-1-kgm",
"-salame-crespon-feteado-ebro-x-kg",
"-aceite-girasol--natura---botella-15-l",
"-aceite-girasol--canuelas--botella-15-l",
"-leche-ultra-entera-extcal-vit-a--la-serenisi-sch-1-ltr",
"-pategras-fraccionado-milkaut-xkg",
"-pategras-horma-la-serenisi--1-kgm",
"-pategras-holandit-veronica-xkg",
"-sardo--xkg",
"-sardo-vit-a-d-fraccionado-la-serenisi--1-kgm",
"-sardo--veronica-xkg",
"-yogentfirmfort-frutilla-yogurisimo-pot-190-grm",
"-yogentfirm-multi-vainilla-sancor-yogs-pot-190-grm",
"-dulce-leche-clasico-sancor-pot-400-grm",
"-dulce-leche--coto-pot-400-grm",
"-dulce-leche-fuente-d-calci-la-serenisi-pot-400-grm",
"-dulce-leche-familiar-milkaut-pot-400-grm",
"-huevo-blanco--coto-bli-12-uni",
"-huevo-blanco-grand----cja-12-uni",
"-huevo-color----cja-12-uni",
"-arveja--la-campagnola-remojadas-lata-300-gr",
"-sal-fina-nobleza-gaucha-----paquete-500-gr",
"-sal-fina-dos-anclas-----caja-500-gr",
"-sal-fina-celusal-----caja-500-gr",
"-flan-ciudad-del-lago-vainilla---caja-65-gr",
"-flan-royal-vainilla---sobre-60-gr",
"-flan-exquisita-vainilla---caja-60-gr",
"-gaseosa-coca-cola-light---botella-15-l-",
"-gaseosa-pepsi-light---botella-15-l-",
"-agua-mineral--eco-de-los-andes---botella-15-l",
"-agua-mineral--villavicencio----botella-15-l",
"-agua-mineral--glaciar---botella-15-l",
"-agua-mineral--nestle---botella-15-l",
"-cerveza--brahma---botella-1-l",
"-cerveza--quilmes---botella-1-l",
"-cerveza-lager-schneider---botella-1-l",
"-cerveza--palermo--botella-1-l",
"-zumuva---blanco-1-l",
"-termidor-tradicion---tinto-1-l",
"-toro---tinto-dulce-1-l",
"-cafe-molido-la-virginia---paquete-500-gr",
"-cafe-molido-los-5-hispanos---paquete-500-gr",
"-cafe-molido-cabrales---paquete-500-gr",
"-jabon-en-polvo-ala--lavado-a-mano--paquete-800-gr",
"-jabon-en-polvo-zorro---paquete-800-gr",
"-detergente-zorro--pepino--botella-750-ml",
"-detergente-ala--limon---botella-750-ml",
"-lavandina-liquida-ayudin----maxima-pureza-botella-1-l",
"-shampoo-sedal---ceramidas-botella-650-ml",
"-shampoo-tresemme---hidratacion-profunda-botella-400-ml",
"-shampoo-johnson-s-baby-proteccion-uv-bot-400-ml",
"-shampoo-sedal---ceramidas-botella-340-ml",
"-jabon-oliva-y-aloe-v-palmolive-bol-375-grm",
"-desodorante-antitraspirante-nivea-dry-confort--aerosol-150-cc",
"-desodorante-antitraspirante-rexona--invisible--aerosol-",
"-enjuague-para-ropa-vivere-clasico-doypack-900-ml",
"-enjuague-para-ropa-comfort-clasico-doypack-900-ml",
"-enjuague-para-ropa-suave-libre-enjuague-doypack-900-ml",
"-limpiador-cif-antigrasa-doy-900-ml",
"-limpiador-ayudin-antigrasa-doy-900-cc",
"-limpiador-mr-musculo-total-cocina-doy-900-cc",
"-desodorante-de-ambiente-poett-lavanda---aerosol-360-cc",
"-desodorante-de-ambiente-glade-campo-de-lavanda-aerosol-360-cc",
"-insecticida-raid-mata-mos-y-mosquit-form-mejorada-aer-360c",
"-insecticida-mata-mosquito-fuyi-efectividad-comproba-aer-360-g",
"-rollo-de-cocina-sussex-180-panos-paquete-3-unidades",
"-rollo-de-cocina-campanita-180-panos-paquete-3-unidades",
"-rollo-de-cocina-elite-180-panos-paquete-3-unidades",
"-cocina-aurora-4h-inox-enc-lz-autolm-xle",
"-cocina-whirlpool-4-hornallas-blanco-wfb56db",
"-cocina-electrolux-4-hornallas-gris-exmr856",
"-heladera-con-freezer--314-l-phct320x--inoxidable",
"-heladera-con-freezer-top-house-314-l-d60350--inoxidable",
"-termotanque-a-gas-rheem-120-l-tgnp120rh-natural",
"-termotanque-a-gas-saiar-120-l-tpg120-multigas",
"-aire-acondicionado-split-top-house-3000-fg-3450-watts-frio-calor--",
"-aire-acondicionado-split-bgh-silent-air-3000-fg-3450-watts-frio-calor-bsh35wcp",
"-lavarropas-automatico-top-house-carga-frontal-7-kg-xqg70-q712e-blanco",
"-lavarropas-automatico-samsung-carga-frontal-7-kg-ww70j4463gw-blanco",
"-leche-descremada-la-serenisima-1-sachet-1-l",
"-leche-entera-la-serenisima-3-sachet-1-l",
"-leche-larga-vida-descremada-tregar-ttb-1-l",
"-leche-larga-vida-descremada-milkaut-ttb-1-l",
"-leche-larga-vida-descremada-ilolay-ttb-1-l",
"-leche-larga-vida-descremada-veronica-ttb-1-l",
"-leche-larga-vida-descremada-sancor-ttb-1-l",
"-leche-larga-vida-entera-ilolay-ttb-1-l",
"-leche-entera-clasica-la-serenisima-larga-vida-1l",
"-leche-larga-vida-entera-milkaut-ttb-1-l",
"-leche-larga-vida-entera-sancor-ttb-1l",
"-leche-larga-vida-entera-tregar-ttb-1-l",
"-leche-parcialmente-descremada-liviana--la-serenisima-larga-vida-1l",
"-leche-larga-vida-entera-veronica-ttb-1-l",
"-leche-larga-vida-descremada-apostoles-ttb-1-l",
"-leche-larga-vida-entera-apostoles-ttb-1-l",
"-leche-en-polvo-descremada-la-serenisima-400-gr",
"-leche-en-polvo-entera-purisima-bolsa-400-gr",
"-leche-en-polvo-svelty-figura-x-600gr",
"-leche-e-polvo-entera-ilolay-pou-400-grm",
"-tomate-perita-coto-pelado-lata-400-gr",
"-papel-higienico-elite-simple-hoja-paquete-4-unidades",
"-papel-higienico-elite-caricias-de-seda-doble-hoja-paquete-4-unidades",
"-papel-higienico-elite-caricias-de-seda-doble-hoja-paquete-4-unidades",
"-papel-higienico-higienol-max-simple-hoja-paquete-4-unidades",
"-phigienico-d-h-x-4-rollos-felpita-paq-8-m2",
"-papel-higienico-sweety-extra-blanco-doble-hoja-paquete-4-unidades",
"-papel-higienico-campanita-doble-hoja-paquete-4-unidades",
"-manzana-red----xkg",
"-banana-cavendish---xkg",
"-pera-packams-x-kg",
"-uva-blanca-brasilena---xkg",
"-naranja-jugo---xkg",
"-limon-comercia---xkg",
"-mandarina-murcot---xkg",
"-pomelo-rosado----xkg",
"-cebolla-x-kg",
"-papa-blanca-de-campo-x-kg",
"-tomate-red-x-kg",
"-zanahoria-seleccion---xkg",
"-zapallo-anco-x-kg",
"-pimiento-rojo---xkg",
"-acelga-x-uni",
"-lechuga-criolla-x-kg",
"-remolacha-x-kg",
"-gallsandwic--granix-pak-600-grm",
"-galletitas-crackers-traviata-paq-101-grm",
"-gallsin-sal--granix-pak-555-grm",
"-arveja-seca-rem-arcor-lat-300-grm",
"-jabon-en-polvo-granby-matic-lavado-total-3-kg",
"-jabon-en-pan-ala-paquete-200-gr-2-unidades",
"-jabon-en-pan-zorro-realza-tus-blancos-paquete-150-gr-2-unidades",
"-detergpolvo-baj-esp-querubin-bsa-800-grm",
"-agua-lavandina-adi-bosque-querubin-bot-1-ltr",
"-lavandina-liquida-ayudin-original-botella-2-l",
"-lavandina-concent-querubin-bid-4-ltr",
"-toallas-femeninas-always-proteccion-plus-----paquete-16-unidades",
"-toallas-femeninas-siempre-libre-especial-con-alas-paquete-16-unidades",
"-toalla-femenina-ladysoft-ultradelgada-t-us-c-a-paq-16un",
"-toalla-femenina-kotex-normal-x16",
"-azucar-ledesma-comun-tipo-a-paquete-1-kg",
"-azucar--arcor-paq-1-kgm",
"-edulcorante-hileret-clasico-caja-sobres-x-100",
"-edulcorante-hileret-stevia-caja-sobres-x-100",
"-edulcorante-equalsweet-clasico-caja-sobres-x-100",
"-mayonesa-hellmann's-clasica-475-gr",
"-mayonesa-cada-dia-liviana-pouch-475-gr",
"-yerba-mate-playadito-con-palo-paquete-1-kg",
"-yerba-mate-nobleza-gaucha-suave-paquete-500-gr",
"-te-green-hills-caja-50-saquitos",
"-te--la-virginia---molienda-controlada-caja-50-saquitos",
"-gaseosa-coca-cola----botella-175-l-",
"-gaseosa-coto----botella-225-l-",
"-amargo-terma-light-limon-botella-175-l",
"-amargo-tacconi-light-blanco-botella-15-l",
"-panales--pampers-premium-care---xxg-60-unidades",
"-panales-estrella-baby-caricias-de-algodon-g-44-unidades",
"-jabon-tocador-90-gr-x-6-uni-dove-pak-540-grm",
"-jabon-tocador-campos-verdes-energia-del-sol-paq-360-grm",
"-jabon-tocador-plusbelle-cremoso-paq-3-uni-375-grm",
"-jabon-sensible-fresh-rexona-paq-375-grm",
"-postre-mixto-coto-cja-900-grm",
"-postre-tabletas-crem-freddo-cja-300-grm",
"-alfajor-terrabusi-chocolate-70-gr-x-1-uni",
"-turron-mani-arcor-paq-25-grm",
"-filete-de-merluza-despinado-fresco-x-kg",
"-filete-de-gatuzo-fresco-x-kg",
"-filete-de-merluza-despinado-congelado-x-kg",
"-calamar-entero-congelado-x-kg",
"-tentaculo-de-calamar-congelado-x-kg",
"-tubo-de-calamar-congelado-x-kg",
"-pulpo-espanol-congelado-x-kg",
"-pejerrey-entero-semi-despinado-mariposa-congelado-x-kg",
"-mejillon-pelado-cocido-chileno-congelado-x-kg",
"-sabalo-despinado-congelado-x-kg",
"-langostino-entero-crudo-congelado-x-kg",
"-langostino-pelado-crudo-congelado-(tamanos-varios)-x-kg",
"-cornalito-congelado-x-kg",
"-varitas-de-surimi-kanikama-sabor-natural-250-gr",
"-medallon-de-merluza-rebozado-natural-prefrito-congelado-x-kg",
"-manteca-veronica-200-gr",
"-manteca-coto-200-gr",
"-asado-x-kg",
"-vacio-x-kg",
"-matambre-x-kg",
"-cuadrada-x-kg",
"-bola-de-lomo-x-kg",
"-tapa-de-asado-x-kg",
"-carnaza-x-kg",
"-falda-x-kg",
"-roast-beef-x-kg",
"-espinazo-x-kg",
"-picada-comun-x-kg",
"-picada-especial-x-kg",
"-carre-de-cerdo-x-kg",
"-nalga----x-kg",
"-bife-de-chorizo-x-kg",
"-bondiola-de-cerdo-x-kg",
"-lomo-x-kg",
"-entrana-x-kg",
"-colita-de-cuadril-x-kg",
"-matambre-de-cerdo-x-kg",
"-higado-x-kg",
"-paleta-x-kg",
"-peceto-x-kg",
"-mignon-x-kg",
"-pan-lacteado-blanco-360-grm",
"-pan-mesa-lacteado-lactal-bsa-335-grm",
"-pera-williams-seleccion-x-kg",
"-osobuco-de-garron-x-kg",
"-leche-entera-coto-sachet-1-l",
"-polera-hombre-m-l-interlock-t38---",
"-buzo-hombre-c--punos-canel-tl---",
"-remera-dama-esc-v-crudo-tl---",
"-pollera-dama-lanilla-negra-tl---",
"-sweater-dama-lanilla-durazn-tl---",
"-buzo-dama-c--punos-azul-tl---",
"-enterito-beba-liso-rosa-12m---",
"-remera-beba-est-conejo-rosa-t12m---",
"-remera-nina-mc-bca-glitter-est-mesa-t1---",
"-pantalon-bebe-frisa-azul-t12---",
"-calzas-nina-melange-talle-1",
"-short-nino-a-melange-rustico-t12---",
"-guardapolvo-nino-a-t6---",
"-boxer-hmbre-seamless-liso-tl-azul---",
"-camiseta-hmbre-m-c-interlock-t38---",
"-media-471-algodon-lisa-c-puno-t-u---",
"-calzoncillo-h-largo-interloc-t38---",
"-bombacha-703-dama-t-corto-lisa-tu---",
"-corpino-c-aro-control-46133ba-t95---",
"-camison-dama-ml-c-cartera-bco-tl---",
"-media-soquete-dama-mj-6-dis-surt---",
"-soquete-nina-t2-est-surt---",
"-cartera-sabrina",
"-toallita-vf-74-bebe-c-bordado-34x58cm---",
"-bufanda-caba-1-diseno---",
"-paraguas-corto-manual-liso---",
"-gorro-doble-adulto---",
"-guante-magico-adulto---",
"-zapatillas-casual-caballero-40-top-design-",
"-ojota-caba-navy-blaco-45-46---",
"-zapatillas-deportiva-caballero-39-gummi-",
"-zapato-dama-negro-charol-talle-35---",
"-zueco-dama-ana-negro-35---",
"-bota-dama-negro-2275-talle-35---",
"-ojota-dama-aqua-39-40---",
"-zapatillas-deportiva-dama-35-gummi--",
"-guillermina-colegial-28-negro---",
"-sandalia-nin@-beige-talle-21",
"-zapatillas-deportiva-kids-27-gummi-",
"-asado-del-medio-estancias-coto-x-kg",
"-vacio-del-centro-estancias-coto-x-kg",
"-roast-beef-estancias-coto-x-kg",
"-bife-de-chorizo-coto-xkg",
"-facturas-surtidas",
"-arroz-doble-ala-blanco-paq-1-kgm",
"-arroz-largo-fino-gallo-integral-con-fibra-caja-1-kg",
"-harina-ultra-refinada-canuelas-paq-1-kgm",
"-polenta-prestopronta-paquete-500-gr",
"-semola-lucchetti-vitina-caja-500-gr",
"-pan-rallado-preferido-bsa-1-kgm",
"-espagueti-coto-paquete-500-gr",
"-espagueti-lucchetti-----paquete-500-gr",
"-tirabuzon-coto-paquete-500-gr",
"-tirabuzon-lucchetti-----paquete-500-gr",
"-mostachol-coto-paquete-500-gr",
"-mostachol-lucchetti-----paquete-500-gr",
"-prepizza-grande-tomate-uni",
"-ravioles-pollo-via-vespucc-paq-500-grm",
"-ravioles-pollo-y-espina-villa-dagri-bli-500-grm",
"-tapempanada-criolla-noly-paq-330-grm",
"-tapempanada-criolla-punto&pasta-bsa-300-grm",
"-tapempanada-hojaldre-villa-dagri-fwp-300-grm",
"-tapa-p-pascualina-hojaldre-noly-paq-380-grm",
"-tapa-p-pascualina-criolla-punto&pasta-bsa-400-grm",
"-chatitas--don-satur-bsa-140-grm",
"-tostadas-de-mesa-riera-par-200-grm",
"-leche-entera-clasica-la-serenisima-larga-vida-1l",
"-leche-parcialmente-descremada-liviana--la-serenisima-larga-vida-1l",
"-leche-entlv-uat-extra-defe-tres-ninas-ttb-1-ltr",
"-leche-deslv-uat-extra-defe-tres-ninas-ttb-1-ltr",
"-leche-descremada-coto-sachet-1-l",
"-milanesa-de-peceto-x-kg",
"-azucar-domino-comun-tipo-a-paquete-1-kg",
"-dulce-leche-la-serenisima-clasico-fuente-de-calcio-400-gr",
"-dulce-de-leche-san-ignacio-tradicion-pote-400-gr",
"-cebolla-a-granel-x-kg",
"-sardo-trozado-la-paulina-x-1-kgm",
"-queso-sardo-sin-lactosafr-la-serenisi-x-1-kgm"
]


// Function to handle the search criteria via button click
function handleClickSearch() {
    al_archivo=""
    api_callcoto();
 }



function handleClickSearch2() {
    al_archivo=""
    api_call();   
}

var TXT=""

document.getElementById('inputfile')
            .addEventListener('change', function() {
              
            var fr=new FileReader();
            fr.onload=function(){
                TXT=fr.result;
            }
              
            fr.readAsText(this.files[0]);
        })

function handlepruebacoto() {
    al_archivo=""
    api_callpruebacoto();   
}

// Attach an event to listen for the buttons
d3.select("#search-btn").on("click", handleClickSearch);
d3.select("#search-btn2").on("click", handleClickSearch2);
d3.select("#prueba-coto").on("click", handlepruebacoto);

//document.select("#search-btn").on("click", handleClickSearch);
//document.select("#search-btn2").on("click", handleClickSearch2);
//document.select("#prueba-coto").on("click", handlepruebacoto);

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
       
       document.getElementById("file").innerHTML = i + 1 + ": "+ links[i];
       var url = "https://scrapers-caravaggio.herokuapp.com/vea/search/";
       var updated_url = url + links[i];
             
        await fetch(updated_url)
          .then(function (response) {
            return response.text();
          })
          .then(function (data) {
                  
           al_archivo = al_archivo + links[i] + ";" + data + "\n" ;
           
          
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


async function api_callcoto(){
for (var i = 0; i < linkscoto.length; i++) {
  document.getElementById("file").innerHTML = i + 1 + ": "+ linkscoto[i];     
  
       var url = "https://scrapers-caravaggio.herokuapp.com/coto/search/";
       var updated_url = url + linkscoto[i];
             
        await fetch(updated_url)
          .then(function (response) {
            return response.text();
          })
          .then(function (data) {
                  
           al_archivo = al_archivo + linkscoto[i] + ";" + data + "\n" ;
           
          
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



async function api_callpruebacoto(){

linkscoto=TXT.split("\n");


for (var i = 0; i < linkscoto.length; i++) {
  document.getElementById("file").innerHTML = i + 1 + ": "+ linkscoto[i];     
  
       var url = "https://scrapers-caravaggio.herokuapp.com/coto/search/";
       var ult= linkscoto[i];
       
       ult=ult.substring(54);
       ult=ult.replace("/_/","");
       var updated_url = url + ult;
                    
        await fetch(updated_url)
          .then(function (response) {
            return response.text();
          })
          .then(function (data) {
                  
           al_archivo = al_archivo + linkscoto[i].replace(/(\r\n|\n|\r)/gm, "") + ";" + data + "\n" ;
           
          
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
