import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(data);
    res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};
let getAboutPage = (req, res) => {
  res.render("'test/test.ejs'");
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
