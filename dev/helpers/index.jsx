var axios = require('axios');
const scConfig = require('../../config.js');

module.exports = {
  axiosGET: function(reference = this, searchString = 'Zedd'){

    //I assume searchString will be a string

    console.log("Inside axios helper func");
    var counter = 0;
    var results = [];

    //search for track with searchString
    axios.get(`${scConfig.trackQuery}${scConfig.clientId}&q=${searchString}`)
      .then( (response) => {
        counter++;
        console.log("results inside axios is ", JSON.stringify(response));
        console.log("");
        results.push(response);

        if (counter == 2){
          console.log("Do something inside axios then");
          reference(results);
        } 


      })
      .catch( (error) => {
        console.log(error);
      }); 

    //search for a user with searchString
    axios.get(`${scConfig.userQuery}${scConfig.clientId}&q=${searchString}`)
      .then( (response) => {
        counter++;
        console.log("results inside axios is ", JSON.stringify(response));
        console.log("");
        results.push(response);
        
        if (counter == 2){
          console.log("Do something inside axios then");
          reference(results)
        }
      })
      .catch( (error) => {
        console.log(error);
      }); 

  }
}