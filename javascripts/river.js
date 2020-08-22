// import { bearForm, addBear } from "./bearForm.js"


  
  const bearCards = (heyBear) => {
    $("#bear-card").html("");
    heyBear.forEach((yourBear) => {
      $("#bear-card").append(`
              <div class="card" style="width: 18rem;">
              <img id="bearPic" src="${yourBear.image}" class="card-img-top" alt="...">
                  <div class="bear-card-body">
                   <p class="card-text">Bear Name: ${yourBear.name}</p>
                  </div>
              </div>
          `);
    });
  };

  export { bearCards }