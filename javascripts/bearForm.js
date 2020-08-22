import { bearCards } from './river.js'

const bearArray = [];

const bearForm = () => {
    $("#submit-card").html(
      `   
          <form id="your-bears">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" id="nickName" placeholder="Bear Name">
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="bearIMG" placeholder="Bear URL">
              </div>
              <input type="button" id="submitBear" class="btn btn-info" value="Add My Bear"></input>
            </form>
      `
    );
  };

  

  const addBear = () => {
    $("#submitBear").click(() => {
      let bearNameAndImage = {};
      bearNameAndImage.name = $("#nickName").val();
      bearNameAndImage.image = $("#bearIMG").val();
      bearArray.push(bearNameAndImage);
      bearCards(bearArray);
      clearBear();
    });
  };
  
  
  const clearBear = () => {
      $('#nickName').val('');
      $('#bearIMG').val('');
  }

  export { bearForm, addBear }