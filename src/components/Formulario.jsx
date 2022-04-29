import React,{Fragment, useState} from 'react';
import Registro from './Registro';
import Swal from 'sweetalert2'

const Formulario = () => {
    const [id,setID]=useState(0);
    const [nombre,setNombre]=useState('');
    const [apellido,setApe]=useState('');
    const [correo,setCorreo]=useState('');
    const [edad,setEdad]=useState('');
    const [lista,setLista]=useState([]);
   
    const guardar=(e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            messeg("nombre")
            setID(id-1)
            return
        }
        if(!apellido.trim()){
            messeg("apellido")
            setID(id-1)
            return
        }
        if(!correo.trim()){
            messeg("correo")
            setID(id-1)
            return
        }
        if(!edad.trim()){
            messeg("edad")
            setID(id-1)
            return
        }
        
        setLista([
            ...lista,
            {id:id,nombre:nombre,apellido:apellido,correo:correo,edad:edad}
        ]);
         mostrarTabla();
        e.target.reset();
        setNombre('');
        setApe('');
        setCorreo('');
        setEdad('');
       
       
    };
    const mostrarTabla=()=>{
      document.getElementById('datos').style='display: block';
    };
    const ocultarTabla=()=>{
        document.getElementById('datos').style='display: none';
    }
    const deleteRegis=(id)=>{
     const listcop = lista.filter((list)=> list.id !=id)
     setLista(listcop);
     if(listcop.length==0){
          ocultarTabla();
     }
    };
   const messeg=(dato)=>{
    Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'falta el '+dato,
        showConfirmButton: false,
        timer: 700
      })
   }
  return (
      <Fragment>
        <div className='secundario'>
        <h2>Formulario</h2>
        <form onSubmit={guardar} className='formu'>
           
            <input type="text" 
            className='form-control mb-2' 
            placeholder='Nombre'
            onChange={(e)=>setNombre(e.target.value)}
            />
            <input type="text" 
            className='form-control mb-2'
            placeholder='Apellido'
            onChange={(e)=>setApe(e.target.value)}
            />
            <input type="text" 
            className='form-control mb-2' 
            placeholder='Correo'
            onChange={(e)=>setCorreo(e.target.value)}
            />
            <input type="number" 
            className='form-control mb-2'
            placeholder='Edad'
            onChange={(e)=>setEdad(e.target.value)}
            />
            <button onClick={()=>setID(id+1)} className='btn btn-dark' type='submit'>Agregar</button>

        </form>
        </div>
       <div id="datos" className='last'>
       <table  className="table table-striped">
            <thead className='cabeza'>
                <tr>
                 <th>ID</th>
                 <th>NOMBRE</th>
                 <th>APELLIDO</th>
                 <th>CORREO</th>
                 <th>EDAD</th>
                 <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody>
             {lista.map((lis)=>(
                     <Registro key={lis.id} registro={lis} delete={deleteRegis} ocultar={ocultarTabla} ></Registro>
             ))}
            </tbody>
        </table>
       </div>
       </Fragment>
   
  )
}

export default Formulario