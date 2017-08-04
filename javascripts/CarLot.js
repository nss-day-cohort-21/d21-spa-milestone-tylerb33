console.log ("CarLot.js");

let _car_inventory = [];  

var CarLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  // let inventory = Object.create(null, {
 
/*LOAD IN THE DATA FROM THE JSON FILE*/
  let loadCars = new XMLHttpRequest();

  loadCars.addEventListener("load", dataRequestComplete);
  loadCars.addEventListener("error", dataRequestFailed);

  function dataRequestComplete(event) {
      if (event.target.status === 200) {
        console.log ("cars loaded");
        _car_inventory = JSON.parse(event.target.responseText).cars; 
        console.log ("_car_inventory", _car_inventory);
        showData(_car_inventory);

  
      } else {console.log("Check the spelling of your file!")}
    }

  function dataRequestFailed(event) {
      console.log ("Load Cars: Failed");
    }

  function showData(myCarInventory) {
    let outputDiv = document.getElementById("output");
    let finalCarOutput = "";
/************************************************************/

/*PRINTING CARDS TO THE PAGE (ADDING IN EVENT LISTENERS BEFORE*/
    for (let i = 0; i < myCarInventory.length; i++) {
        finalCarOutput +=
                               
        `<div class="col-md-4 blackbrdr carCards flexitem mycards">
          <div class="card">
            <div class="card-block">
              <h3 class="card-title">${myCarInventory[i].year} ${myCarInventory[i].make} ${myCarInventory[i].model}</h3>
              <p class="card-text">${myCarInventory[i].price}</p>
              <p class="card-text" id="description">${myCarInventory[i].description}</p>
              <a href="#" class="btn btn-primary">MORE DETAILS</a>
            </div>
          </div>
        </div>`;


        // if ((i + 1) % 3 === 0) {
        //   let fullRow = `<div class="row">${rowLoading}</div>`;
        //   console.log ("fullRow", fullRow);
        //   finalCarOutput = fullRow;
        //   fullRow = "";
        // }
    }
      console.log ("finalCarOutput", finalCarOutput);
      outputDiv.innerHTML = finalCarOutput;
        
  /*****ADD EVENT LISTENER TO INPUT FIELD******/
  var cardDescriptionChange = "";
  let userinput = document.getElementById("userinput");

  function mirrorText(){
      cardDescriptionChange.innerText = document.getElementById("userinput").value;
      // console.log (cardDescriptionChange);
      // console.log (document.getElementById("userinput").value); - THIS IS CORRECT
  }



  userinput.addEventListener("keyup", mirrorText)




  /*****FUNCTION TO ADD THICK BORDER AND FOCUS INPUT FIELD*****/
var cardDescriptionChange = '';
  
  function toggleBorder() {
      event.currentTarget.classList.toggle("thickBorder");
      event.currentTarget.classList.toggle("greenBkgrd");
      document.getElementById("userinput").value = "";
      // console.log (document.getElementById("userinput").value);
      document.getElementById("userinput").focus();
      cardDescriptionChange = event.currentTarget.children[0].children[0].children[2];
      console.log ("cardDescriptionChange", cardDescriptionChange);
      // console.log ("event", event.currentTarget);
  };






  /*****ADD EVENT LISTENERS TO ALL CARDS*****/
  let cardsForListeners = document.getElementsByClassName("mycards");
  // console.log ("cardsForListeners", cardsForListeners);
  for (let i = 0; i < cardsForListeners.length; i++) {
    cardsForListeners[i].addEventListener("click", toggleBorder); 
  };




  }

/************************************************************/

  loadCars.open("GET", "inventory.json");
  loadCars.send();
  
  // });

  // globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(CarLot || {});
  


