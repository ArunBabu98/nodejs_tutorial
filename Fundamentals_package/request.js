const axios = require("axios");

axios
  .get("http://wwwww.google.com")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(()=>{
    console.log('Function executed.')
  });
