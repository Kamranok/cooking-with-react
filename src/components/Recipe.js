import React from 'react'
import IngredientList from './IngredientList'


const Recipe = ({ name, cookTime, servings, instructions, ingredients }) => {
  return (
    <>
      <div className='recipe'>
        <div className='recipe__header'>
          <h3 className='recipe__title'>{name}</h3>
          <div>
            <button className='btn btn--primary mr-1'>Edit</button>
            <button className='btn btn--danger'>Delete</button>
          </div>
        </div>
        <div>
          <span>Cook Time:</span>
          <span>{cookTime}</span>
        </div>
        <div>
          <span>Servings:</span>
          <span>{servings}</span>
        </div>

        <div>
          <span>Instructions:</span>
          <div>
            {instructions}
          </div>
        </div>
      </div>
      <div>
        <span>Ingredients:</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>


    </>
  )
}

export default Recipe
