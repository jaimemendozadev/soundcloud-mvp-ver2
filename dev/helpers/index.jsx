var axios = require('axios');
const scConfig = require('../../config.js');

module.exports = {
  axiosGET: function(callback, searchString = 'Zedd'){
    

    //search for track with searchString
    //current search query doesn't include a date range
    axios.get(`${scConfig.trackQuery}${scConfig.clientId}&q=${searchString}${scConfig.partion}`)
      .then( (response) => {
        console.log("results inside axios is ", JSON.stringify(response));
        console.log("");

        callback(response);
        
      })
      .catch( (error) => {
        console.log(error);
      }); 


  },

  axiosPOSTPlaylist: function(newPlaylist){
    

    //search for track with searchString
    //current search query doesn't include a date range
    axios.post('/api/aplaylist', newPlaylist)
      .then( (response) => {
        console.log("results inside axiosPOSTPlaylist is ", JSON.stringify(response));
        console.log("");
        
      })
      .catch( (error) => {
        console.log(error);
      }); 


  }
}