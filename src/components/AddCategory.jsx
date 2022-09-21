import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

  //Declarar useStat
  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit  = (event) => {
    event.preventDefault(); 
    if(inputValue.trim().length <= 1) return;

    // console.log(inputValue);
    // setCategories(categories => [inputValue, ...categories]);   
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  
  return (
    <form onSubmit={(event) => onSubmit(event)}>

      <input type="text"
            placeholder="Buscar gifs" 
            value ={ inputValue }
            onChange = {onInputChange}
      />
    </form>
  )
}
