function crearServicio({imgurl,titulo, vermas ,descripcion}){
    return `
    <div class="card" >
    <img class="" src=${imgurl.toString()} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">
        ${titulo}
      </h5>
      <p class="card-text">${descripcion}</p>
      <a href=${vermas} class="btn btn-primary" target="_blank">Saber mas...
</a>
    </div>
  </div>
    `;
}

function crearModal(){
    return `
    <div class="contenedor-modal">
     <div class="modal">
         <h2>Bienvenido</h2>
         <button id="botton-cerrar">Cerrar</button>
     </div>
    </div>
    `;
}


const dataServicios = [
    { imgurl:"img/beemo.png", titulo:" BMO", descripcion:`BMO se caracteriza por ser un robot leal, confiable 
    y útil que protege a Finn y Jake. Afirmó que él no tiene sentimientos, pero Donny lo hace enojar por tirar
     y romper su controlador.`,
        vermas:"https://horadeaventura.fandom.com/es/wiki/BMO?so=search"},
    {imgurl:"img/Finn.png", titulo:"Finn",descripcion:`Muchas veces se comporta de manera sorpresiva y violenta, pero
    a veces Finn es un chico valiente y muy justo. Posee un fuerte sentido de la 
    responsabilidad y se molesta cuando no logra ayudar a los que lo necesitan.
    `, vermas:"https://horadeaventura.fandom.com/es/wiki/Finn?so=search"},
    {imgurl:"img/jake.png", titulo:"Jake",descripcion:`Jake es generalmente tranquilo y tiende a no preocuparse por las
    cosas. Él se apoya en gran medida de sus poderes elásticos (o Finn) al sacarlo de
     cualquier situación peligrosa que se mete a menudo.`, vermas:"https://horadeaventura.fandom.com/es/wiki/Jake?so=search"},
    {imgurl:"img/princesa.png", titulo:"Dulce princesa",descripcion:`La Dulce Princesa ama a la mayoría de sus súbditos, y ha sido
    conocida por su defensa incansable cuando hay problemas en el Reino. En La Princesa 
    Galleta, su dedicación a su reino se muestra cuando visita el Dulce Orfanato y 
    pasa algún tiempo animando a los niños.`, vermas:"https://horadeaventura.fandom.com/es/wiki/Dulce_Princesa?so=search"},
    {imgurl:"img/mentita.png", titulo:"Mentita",descripcion:`Mentita es aficionado a la magia negra, pero le teme al
    Lich. También se puede ver que tiene un pasado oscuro y conexiones con 
    seres del otro mundo, como la Muerte y Hunson Abadeer. También es muy 
    leal a la Dulce Princesa.`, vermas:"https://horadeaventura.fandom.com/es/wiki/Mentita?so=search"},
    {imgurl:"img/marcelin.png", titulo:"Marceline",descripcion:`Marceline se autodescribe como una salvaje chica rockera. 
    Le gusta gastar bromas pesadas y molestar a la gente. Tras siglos de vagar
     por la Tierra de Ooo se ha convertido en una intrépida aventurera. Ella es 
     una amante de todas las cosas exóticas y todavía recorre la tierra a menudo.`, vermas:"https://horadeaventura.fandom.com/es/wiki/Marceline?so=search"}
]
   
const contenedor = document.querySelector('.contenedor-servicios')


function mostrarServicios(){
  for(let servicio of dataServicios){
      const{descripcion} = servicio;
      const servicioHtml = crearServicio(servicio);
    // contenedor.appendChild(servicioHtml);   
    contenedor.insertAdjacentHTML('beforeend', servicioHtml); 
  }
 
}
export{mostrarServicios}; 