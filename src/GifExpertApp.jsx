import { useState } from 'react';
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(
        [
            'final space'
        ]            
    );

    const onAddCategory = (newCategory) => {

        //con includes validas qeu no se repita el mismo componente
        if ( categories.includes( newCategory) ) return;
        //...'operador spred(copia array)'
        setCategories([newCategory,...categories]);
        // console.log(newCategory);  
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
                <AddCategory 
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
                />
            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory} >Agregar</button> */}
            
                {
                    categories.map( (category) => (
                        <GifGrid 
                                key={category} 
                                category={category} 
                        />
                    ))
                }
            
            {/* Gif item */}

        </>
    )
}
