export default function Ingerdish(props) {

    
    return(
        <div class="col-12 col-lg-2" style={{border:"1px solid black"}}> 
        <label classname="checkbox-inline"> 
        <input id={props.ingerd.id} type="checkbox" value="" />Add
        </label>
        <p classname="dishespar"> ingredient details: </p> 
        <p classname="dishespar"> <img alt="" src={props.ingerd.imageurl} /> 
        </p>
         <p classname="dishespar"> 
         Recipe name: {props.ingerd.name}
        </p>
         <p classname="dishespar">
        calories: {props.ingerd.calories} 
        </p> 
         </div>

    )
}