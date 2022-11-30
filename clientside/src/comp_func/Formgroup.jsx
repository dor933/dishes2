export default function Formgroup(props) {

    function addindegr(){
        
        const indname=document.getElementById("indname").value;
        const indimage=document.getElementById("indimg").value;
        const indcal=document.getElementById("indcal").value;

        props.addind(indname,indimage,indcal)
    }

    return(
        <div id="indegfrm" class="row" style={{display:"none"}}>
        <div class="col-12">
        <form>
            <div class="form-group">
              <label for="ind">ingredient name:</label>
              <input type="text" class="form-control" id="indname" />
            </div>
            <div class="form-group">
              <label for="indimg">ingredient image (url):</label>
              <input type="text" class="form-control" id="indimg" />
            </div>

            <div class="form-group">
                <label for="indcal">ingredient calories:</label>
                <input type="text" class="form-control" id="indcal" />
              </div>

              <div class="form-group">
                <button id="createind" class="btn btn-primary" style={{marginRight:"5px"}} onClick={() => addindegr()}>Create ingredient</button>
                <button id="closeind" class="btn btn-danger">Close</button>
              </div>
          </form>
        </div>
        </div>
    )
}