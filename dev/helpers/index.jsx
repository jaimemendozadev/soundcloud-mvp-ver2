var axios = require('axios');

module.exports = {
  axiosGET: function(callback, searchString = 'Zedd'){
    

    //search for track with searchString
    //current search query doesn't include a date range
    axios.get(`http://api.soundcloud.com/tracks?client_id=` + ENV['clientId'] + `&q=${searchString}&limit=200&linked_partitioning=1`)
      .then( (response) => {
        // console.log("results inside axios is ", JSON.stringify(response));
        // console.log("");

        callback(response);
        
      })
      .catch( (error) => {
        console.log(error);
      }); 


  },

  axiosPOSTPlaylist: function(newPlaylist){
    
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