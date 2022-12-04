import './App.css';
import React from "react";
import AllRecipes from './comp_func/AllRecipes';
import Formgroup from './comp_func/Formgroup';
import Footer from './comp_func/Footer';
import Adddish from './comp_func/Adddish';
let counter=0;
let counterind=0;




class Mykitchen extends React.Component{

  

 

  constructor(props){
    super(props);
    this.state={
      dishes:[],
      ingerdient:[] ,
      dishes_ready:[]
    }
  }
   
  componentDidMount() {

    fetch("http://localhost:8000/")
    .then((response) => response.json())
    .then( (data) => {

      counter=data.dishcount;
      data.mydishs.forEach(dish => {
        dish.myclick=this.btnClicked;
        let caloriesdish=0;
        dish.ingredients.forEach(ingerd => {
          caloriesdish+=ingerd.calories;
        });
        dish.calories=caloriesdish;

        
      });

        this.setState({ ingerdient: data.ingerdients, dishes:data.mydishs });
        console.log(this.state);
    });
  }


  
  
 btnClicked = (dishid) => {

  const currentdishes=this.state.dishes;
  const readydishes=this.state.dishes_ready;
  const dishind=this.state.dishes.findIndex(dish => dish.id===dishid);
  readydishes.push(currentdishes.splice(dishind,1)[0]);
  readydishes[readydishes.length-1].myclick=this.eatbtnClicked;
  this.setState({dishes:currentdishes,dishes_ready:readydishes});
 }

 eatbtnClicked = (dishid) => {

  const currentdishes=this.state.dishes;
  const readydishes=this.state.dishes_ready;
  const dishind=this.state.dishes_ready.findIndex(dish => dish.id===dishid);
  currentdishes.push(readydishes.splice(dishind,1)[0]);
  currentdishes[currentdishes.length-1].myclick=this.btnClicked;
  this.setState({dishes:currentdishes,dishes_ready:readydishes});
 }
  


    changevisi(){
      const mydiv=document.getElementById('indegfrm');
      mydiv.style.display="";
      const mydiv2=document.getElementById('dishfrm');
      mydiv2.style.display="none";


      console.log(this)

    }

    showaddrecipe(){
      const mydiv=document.getElementById('dishfrm');
      mydiv.style.display="";
      const mydiv2=document.getElementById('indegfrm');
      mydiv2.style.display="none";
    }

 adddish = (dishname,dishmethod,dishimg,dishtime,dishingarray) =>{
 const newdish={id:++counter, name:dishname, cookingmethod:dishmethod, imageurl:dishimg,time:dishtime, ingredients:dishingarray}
    fetch('http://localhost:8000/adddish', {
      method:'post',
      headers: {
          "Content-Type": "application/json"
        },
      body:JSON.stringify(newdish)}).then((response) => {
        console.log(response);
        return response.json();
                
          }).then((data) => {

            console.log(data)
            this.setState({ ingerdient: data.ingerdients, dishes:data.mydishs });}) 
  }

  addingerd=(name,imageurl,calories) => {

   const newind={id:++counterind,name:name,imageurl:imageurl,calories:calories}
    
   fetch('http://localhost:8000/addingerdient', {
    method:'post',
    headers: {
        "Content-Type": "application/json"
      },
    body:JSON.stringify(newind)}).then((response) => {
        response.json().then((data)=> {
          this.setState({ ingerdient: data.ingerdients, dishes:data.mydishs }); 
        })
    })
}

  
 
          
    

    

  

  
render(){
  return (
    <div>
    <div className="contanier-fluid">
    <div style={{height:"100%" ,textAlign:"center" }} id="maindiv">
            <div class="row">
            <div class="col-12">
                <h1> Dishs</h1>
            </div>
            </div>
            <div style={{paddingTop:"20px" , paddingBottom:"20px"}} class="row" >

                <div class="col-12">
                  
                    <button id="addrecbtn" class="button" onClick={this.showaddrecipe}> Add recipe</button>
                    <button id="addindbtn" class="button" onClick={this.changevisi}> Add ingredient</button>

                </div>
                                   
                </div>

                <Formgroup addind={this.addingerd} />
                <Adddish ingerd={this.state.ingerdient} adddish={this.adddish} ingerdient={this.state.ingerdient} />
                
           

                   <div className='row'>
                    <div className='col-12'>

            <AllRecipes dishes={this.state.dishes} readydishes={this.state.dishes_ready} current="dishes" />
            <AllRecipes dishes={this.state.dishes} readydishes={this.state.dishes_ready} current="ready_dishes" />
            </div>
            </div>

                </div>


                </div>

                <Footer />

                </div>

  );
}




}





export default Mykitchen;
