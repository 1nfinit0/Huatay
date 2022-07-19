const files = [
    {   href: 'https://1nfinit0.github.io/peru_limites_nacionales/',
        src: './assets/img/limite_nacional_peru.png',
        alt: 'No disponible',
        titulo:'Perú total - Límite nacional',
        descripcion:'Límite nacional del Perú, archivo vectorial. EPSG: 4326.',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'',
        glb:'',
        kml:''
    },
    {   href: 'https://1nfinit0.github.io/carmen_de_la_legua_modelo3D/',
        src: './assets/img/clegua_3d.png',
        alt: 'No disponible',
        titulo: 'Parque Media Luna - Carmen de La Legua | Modelo 3D',
        descripcion:'Modelo 3D del parque Media Luna y alrededores del distrito de Carmen de La Legua -  Reynoso distrito del Lima',
        shp:'',
        gml:'',
        bd:'',
        geojeson:'',
        pdf:'',
        glb:'GLB',
        kml:''
    },
    {   href: 'https://1nfinit0.github.io/peru_limites_departamentales/',
        src: './assets/img/ldepartamentales.png',
        alt: 'No disponible',
        titulo: 'Perú total - Límites departamentales',
        descripcion:'Límites departamentales del Perú, archivo vectorial. EPSG: 4326. Contiene código de departamento y nombre del departamento.',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'PDF',
        glb:'',
        kml:'KML'
    },
    {   href: 'https://1nfinit0.github.io/capitales_peru/',
        src: './assets/img/capitales_peru.png',
        alt: 'No disponible',
        titulo: 'Capitales del Perú',
        descripcion:'Marcadores de capitales del Perú, archivo vectorial. EPSG: 4326. Contiene código de capital, fuente, ubigeo departamental y nombre de capital.',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'PDF',
        glb:'',
        kml:'KML'
    },
    
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const proyectos = document.querySelector('#proyectos');
const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};

 const filtrar = () => {
    proyectos.innerHTML = '';
    const texto = formulario.value.toLowerCase();
            texto.split('').map( letra => acentos[letra] || letra).join('').toString();
    for(let file of files){
        let titulo = file.titulo.toLowerCase();
                    titulo = titulo.split('').map( letra => acentos[letra] || letra).join('').toString();
        if(titulo.indexOf(texto) !== -1){
            proyectos.innerHTML +="<div class='proyecto'><a href='"+file.href+"'><img src='"+file.src+"' alt='"+file.alt+"'></a>"+
                                        "<div class='descripcion'>"+
                                            "<a href='"+file.href+"'><h3>"+file.titulo+"</h3></a>"+
                                            "<p>"+file.descripcion+"</p>"+
                                            "<h4>Disponible en:</h4>"+
                                                "<div class='formatos'>"+
                                                    "<div class='shp'><p>"+file.shp+"</p></div>"+
                                                    "<div class='gml'><p>"+file.gml+"</p></div>"+
                                                    "<div class='bd'><p>"+file.bd+"</p></div>"+
                                                    "<div class='geojson'><p>"+file.geojeson+"</p></div>"+
                                                    "<div class='pdf'><p>"+file.pdf+"</p></div>"+
                                                    "<div class='glb'><p>"+file.glb+"</p></div>"+
                                                    "<div class='kml'><p>"+file.kml+"</p></div>"+
                                                "</div>"+
                                        "</div>"+
                                    "</div><hr>";

                                     ;
        }         
    }
    if (proyectos.innerHTML === ''){
        proyectos.innerHTML += `No se encontraron resultados`
    }

 }

 boton.addEventListener('click', filtrar);
 formulario.addEventListener('keyup', filtrar);
 filtrar();