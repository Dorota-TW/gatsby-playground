const fetch = require("node-fetch")

const fetchCatFacts = () =>
  fetch("https://cat-fact.herokuapp.com/facts").then(res => res.json())

exports.createPages = async ({ actions: { createPage } }) => {}
