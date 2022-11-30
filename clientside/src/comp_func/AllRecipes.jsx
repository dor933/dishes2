import Recipe from "./Recipe"


export default function AllRecipes(props) {

    const disharray=props.dishes;
    const readydishes=props.readydishes;

    if(props.current==="dishes" && disharray.length>0) {


return (
    <div className="row" style={{marginBottom:"75px"}}>

     {disharray.map((dish) => {
         return <Recipe key={dish.id} recipe={dish} current="myclick" label="Prepare Dish" />
     })}
            
    </div>
       )
 }

    else if(props.current==="ready_dishes" && readydishes.length>0) {

        console.log('this props')
        console.log(readydishes);

        return (
            <div className="row" style={{marginBottom:"75px"}}>
        
             {readydishes.map((dish) => {
                 return <Recipe key={dish.id} recipe={dish} current="eat" label="Eat Dish" />
             })}
                    
            </div>
               )

    }
}