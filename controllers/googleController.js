const axios = require("axios");
const db = require("../models");

// findAll searches the Google Books API and returns only the entries we haven't already saved

module.exports = {
  findAll: function(req, res) {
    const { query } = req;
    console.log("in google controller", req);

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query.q}&key=${query.key}`
      )
      .then(results => {
        console.log(results.data.items);
        res.json(results.data.items);
      })
      .catch(err => res.status(422).json(err));
  }
};
