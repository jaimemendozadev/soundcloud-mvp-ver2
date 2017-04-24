var axios = require('axios');
const scConfig = require('../../config.js');

module.exports = {
  axiosGET: function(callback, searchString = 'Zedd'){

    //I assume searchString will be a string

    console.log("Inside axios helper func");
   
    

    //search for track with searchString
    axios.get(`${scConfig.trackQuery}${scConfig.clientId}&q=${searchString}${scConfig.dateLimit}`)
      .then( (response) => {
        console.log("results inside axios is ", JSON.stringify(response));
        console.log("");

        callback(response);
        
      })
      .catch( (error) => {
        console.log(error);
      }); 


  }
}