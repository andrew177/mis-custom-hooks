import  {useState} from 'react'

//hook que evalúa campos de texto
export const useForm = (initialState = {} ) => {
   
    const [values , setValues] = useState(initialState)

    const reset = () =>{
       setValues(initialState);
   }

    const handleInputChange = ({target}) =>{

        setValues({
            ...values, 
            [target.name] : target.value
        });

    }

    return[values, handleInputChange, reset]


}
