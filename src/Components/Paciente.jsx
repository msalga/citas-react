

const Paciente = ({paciente,setPaciente,eliminarPacientes}) => {
  const {nombre,propietario,email,fecha,sintoma,id} = paciente
  
const handleEliminar=()=>{

    const respuesta = confirm("Desea eliminar el paciente?");

    if(respuesta){

        eliminarPacientes(id)
    }
}

    return (

    

<div className="m-3 bg-white shadow-md px-5 py-10 rounded-b-xl">
      <p className="font-bold mb-3 text-grey-700 uppercase ">Nombre {''}
      <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-grey-700 uppercase ">Propietario {''}
      <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-grey-700 uppercase ">Email {''}
      <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-grey-700 uppercase ">Fecha Alta {''}
      <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-grey-700 uppercase ">Sintoma {''}
      <span className="font-normal normal-case">{sintoma}</span>
      </p>
      <div className="flex justify-between mt-10">

            <button type="button" 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase font-bold text-white rounded-lg"
            onClick={()=> setPaciente(paciente)}
            >Editar</button>          
            <button type="button" 
            className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase font-bold text-white rounded-lg"
            onClick= {handleEliminar}>Eliminar</button>          
      </div>
      
</div>
    )
}

export default Paciente