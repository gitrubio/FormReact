import React, {Fragment} from 'react';

export default function Registro({registro,delete:d,ocultar:ocu}) {
    const {id,nombre,apellido,correo,edad} = registro; 
    const borrar=()=>{
   d(id);
    };
   
  return (
    
    <tr>
       <td>{id}</td>
       <td>{nombre}</td>
       <td>{apellido}</td>
       <td>{correo}</td>
       <td>{edad}</td>
       <td><button onClick={borrar} className='btn btn-danger'>Eliminar</button></td>
    </tr>
   
  )
  
}
