function crearColaborador({imgurl,nombre, cargo}){
    return `
    <div class="contenedor-principal">
    <div class="img-user">
        <img  class="user" src=${imgurl.toString()} alt="imagen usuario">
    </div>
    <h2 class="nombre">${nombre}</h2>
    <h2 class="nombre">${cargo}</h2>   
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


const data = [
    { imgurl:"img/img2.png",nombre:"Manuela Osorio Monsalve",cargo:"Gerente"

    },
    { imgurl:"img/img1.png",nombre:"Andres  Montoya",cargo:"Analista de desarrollo"

    },
    { imgurl:"img/img3.png",nombre:"Mauro Rivero",cargo:"Arquitecto de software"

    }
]
   
const contenedor2 = document.querySelector('.contenedor-colaboradores')


function mostrarColaboradores(){
  for(let colaborador of data){
      const{nombre} = colaborador;
      console.log(nombre);
      const servicioHtml = crearColaborador(colaborador);
    // contenedor.appendChild(servicioHtml);   
    contenedor2.insertAdjacentHTML('beforeend', servicioHtml); 
  }
 
}
export{mostrarColaboradores};