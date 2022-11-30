
export default function Recipe (props){


  
//כדי לכתוב קוד באמצע הקטע של ההטמל, נפתח בלוק ובפנים נכתוב את הקוד
return(

<div id={props.recipe.id} class="col-12 col-lg-2 dishmaindiv"> 
<p class="dishespar">  Recipe details: </p>
<p class="dishespar"> <img src={props.recipe.imageurl} alt={"Image_url"} /> </p>
<p class="dishespar"> Recipe name: {props.recipe.dishname} </p>
<p class="dishespar"> cooking method:{props.recipe.cookingmethod} </p> 
<p class="dishespar"> Total cooking time:{props.recipe.time} </p>
<p class="dishespar"> Total calories:{props.recipe.calories} </p> 
<p class="dishespar"> 
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={() => props.recipe.myclick(props.recipe.id)}>  {props.label} </button>
</p> 

</div>
        );
    

    
}