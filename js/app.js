
const INPUT_DATA = document.querySelector('#input_data')
const BTN_AÑADIR = document.querySelector('#btn__añadir')
const BTN_REALIZADO = document.querySelector('.btn__realizado')
const BTN_ELIMINAR = document.querySelector('.btn__borrar')
const containerTarea = document.querySelector('.container__tareas')

const icon = document.querySelector('.icon__tarea')


BTN_AÑADIR.addEventListener('click', () => {
    let dataTarea = INPUT_DATA.value
    if (dataTarea.trim() != '') {
        containerTarea.insertAdjacentHTML('beforeend', `  <div class="nota">
            <div class="card__tarea">
            <svg class="icon__tarea" fill="#ff0000" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-2A6 6 0 1 1 8 2a6 6 0 0 1 0 12zM7 9h2V4H7v5zm0 3h2v-2H7v2z" fill-rule="evenodd"/>
            </svg>
            <p class="texto_Nota"> ${dataTarea} </p>
            </div> 
            <button class="btn__realizado" onclick="cambiar(event)">realizado</button>
            <button class="btn__borrar" onclick="eliminar(event)" >borrar</button>
            </div>`)
        } else {
            alert('completa el campo de tarea')
        }
        
    })
    
function cambiar(event){
   const nodoPadre = event.target.parentNode
   nodoPadre.innerHTML=`      <div class="card__tarea">
            <svg class="icon__tarea" fill="#008000" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8c0 4.418 3.59 8 8 8 4.418 0 8-3.59 8-8 0-4.418-3.59-8-8-8-4.418 0-8 3.59-8 8zm2 0c0-3.307 2.686-6 6-6 3.307 0 6 2.686 6 6 0 3.307-2.686 6-6 6-3.307 0-6-2.686-6-6zm9.778-1.672l-1.414-1.414L6.828 8.45 5.414 7.036 4 8.45l2.828 2.828 3.182-3.182 1.768-1.768z" fill-rule="evenodd"/>
            </svg>
            <p class="texto_Nota"> completado </p>
            </div> 
            <button class="btn__realizado" onclick="cambiar(event)">realizado</button>
            <button class="btn__borrar" onclick="eliminar(event)" >borrar</button>`
  
}
function eliminar(event) {
    event.target.parentNode.remove()
}









