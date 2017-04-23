var axios = require('axios');
const scConfig = require('../../config.js');

module.exports = {
  axiosGET: function(reference = this, searchString = 'awooga'){
    axios.get(`${scConfig.query}&q=${searchString}`)
      .then( (response) => {
        var data = response.data;
        var playSong = data.shift();

        console.log("data is ", data);
        console.log("playSong is ", playSong)  

        reference.setState({
          firstSong: playSong,
          songs: data
        });
      })
      .catch( (error) => {
        console.log(error);
      }); 
  }
}