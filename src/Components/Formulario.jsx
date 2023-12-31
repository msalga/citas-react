import { useState, useEffect} from 'react'
import  Error from './Error'

const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

const [nombre,setNombre] = useState('');
const [propietario,setPropietario] = useState('');
const [email,setEmail] = useState('');
const [fecha,setFecha] = useState('');
const [sintoma,setSintoma] = useState('');
const [error,setError] = useState(false);

useEffect(()=>  {

 if(Object.keys(paciente).length > 0)
 {
  setNombre(paciente.nombre)
  setPropietario(paciente.propietario)
  setEmail(paciente.email)
  setFecha(paciente.fecha)
  setSintoma(paciente.sintoma)
   } 
},[paciente])



const generarId = ()=>{

  const random = Math.random().toString(36).substring(2);
  const fecha  = Date.now().toString(36);

  return random+fecha;
}

const handleSubmit = (e)=>{
  e.preventDefault();
  if([nombre,propietario,email,fecha,sintoma].includes('')){

      setError(true);
      return;
  }
setError(false);

const objetoPaciente = {
  nombre,
  propietario,
  email,
  fecha,
  sintoma
}

if(paciente.id)
{
// editando paciente
objetoPaciente.id = paciente.id
const  pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id  ? objetoPaciente : pacienteState)

console.log(pacientesActualizados)

setPacientes(pacientesActualizados) 
setPaciente({})

} else {

// nuevo paciente
objetoPaciente.id = generarId()
setPacientes([... pacientes,objetoPaciente])  


} 






setNombre ('');
setPropietario('')
setEmail('')
setFecha('')
setSintoma('')



}


    return (
      <div className="md:w-1/2  lg:w:2/5">
          <h2  className="font-black  text-3xl  text-center">Seguimiento
           Pacientes</h2>
           <p className="text-lg mt-5 text-center mb-10">
           Añadee Paciente y {''}
           <span className="text-indigo-600 font-bold">Administralos</span>
           </p>

          <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-s-lg py-10 px-5 mb-10"  >
            {error && <Error mensaje='Todos los campos son obligatorios'/>}
            <div className="mb-5">
              <label htmlFor="mascota"  className="block text-gray-700 uppercase font-bold ">Nombre mascota</label>
              <input
              id="mascota"
              type="text" 
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={ (e) => setNombre(e.target.value)}
              />

            </div>

            <div className="mb-5">
              <label htmlFor="propietario"  className="block text-gray-700 uppercase font-bold ">Nombre propietario</label>
              <input
              id="propietario"
              type="text" 
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value)}
              />

            </div>
            <div className="mb-5">
              <label htmlFor="email"  className="block text-gray-700 uppercase font-bold ">Email</label>
              <input
              id="email"
              type="email" 
              placeholder="Ingrese email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
              />

            </div>

            <div className="mb-5">
              <label htmlFor="fecha"  className="block text-gray-700 uppercase font-bold ">Fecha Alta</label>
              <input
              id="fecha"
              type="date" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={ (e) => setFecha(e.target.value)}
              />

            </div>
          
            <div className="mb-5">
              <label htmlFor="sintomas"  className="block text-gray-700 uppercase font-bold ">Síntoma</label>
              <textarea name="" id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los síntomas"
              value={sintoma}
              onChange={ (e) => setSintoma(e.target.value)}
              ></textarea>
            </div>
     
            <input type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"   } 
            
            />
          </form>


          </div>
    )
     }
  
  export default Formulario