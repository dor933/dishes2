import Ingerdish from "./Ingerdish";

export default function Adddish(props) {

const myingerdient=props.ingerd;

function createnewdish(){

    const dishingerarray=[];
    const checkboxinger=document.querySelectorAll("input[type='checkbox']");
    const mydishname=document.getElementById("dishname").value;
    const dishcookmet=document.getElementById("dishcookingmethod").value;
    const dishcookingtime=document.getElementById("dishtime").value;
    const dishimgurl=document.getElementById("dishimg").value;

    for(let i=0; i<checkboxinger.length; i++) {
        if(checkboxinger[i].checked){
            const ingertoadd=props.ingerdient.find(x => x.id==checkboxinger[i].id)
            dishingerarray.push(ingertoadd);
        }
    }

    props.adddish(mydishname,dishcookmet,dishimgurl,dishcookingtime,dishingerarray);

}
  
    return(
        <div id="dishfrm" class="row" style={{display:"none"}}>
        <div class="col-12">
        <form>
            <div class="form-group">
              <label for="dishname">Recipe name:</label>
              <input type="text" class="form-control" id="dishname" />
            </div>
            <div class="form-group">
              <label for="dishcook">Recipe cooking method:</label>
              <input type="text" class="form-control" id="dishcookingmethod" />
            </div>

            <div class="form-group">
                <label for="dishtime">Recipe cooking time:</label>
                <input type="text" class="form-control" id="dishtime" />
              </div>

        

              <div class="form-group">
                <label for="dishimg">Recipe image (url):</label>
                <input type="text" class="form-control" id="dishimg" />
              </div>

              <h3>Choose Ingredients:</h3>

              <div className="form-group">

                 <div class="row">

                {myingerdient.map((ingerd) => {
                    return <Ingerdish key={ingerd.id} ingerd={ingerd} />

                })}

              </div>
              </div>

              <div class="form-group">
                <button id="createdish" class="btn btn-primary" style={{marginRight:"5px"}} onClick={()=> createnewdish()}>Create Dish</button>
                <button id="closedish" class="btn btn-danger">Close</button>
              </div>
          </form>
        </div>
        </div>
    )
}