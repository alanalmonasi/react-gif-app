import PropTypes from 'prop-types'
import { useState } from "react"


export const AddCategory = ({ onNewValue }) => {

   const [inputValue, setInputValue] = useState('');

   const onInputChange = (e) => {
      setInputValue(e.target.value);
   }
   
   const onSubmit = (e) => {
      e.preventDefault();

      if(inputValue.length <= 1) return; 
      
      setInputValue('');

      onNewValue(inputValue.trim().toLocaleUpperCase());
   }

   return (
      <form onSubmit={onSubmit} aria-label="form">

         <input 
            type="text"
            placeholder="Buscar gif"
            value={inputValue}
            onChange={onInputChange}
         />
      </form>
   )
}

AddCategory.propTypes = {
   onNewValue: PropTypes.func.isRequired,
}