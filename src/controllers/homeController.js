import db from "../models/index";
import CRUDService from "../services/CRUDService";
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
  res.render("test.ejs");
};
let getCRUD = (req, res) => {
  res.render("crud.ejs");
};
let postCreateUser = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("psot crud from server");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log("****************************");
  console.log(data);
  console.log("****************************");

  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCreateUser: postCreateUser,
  displayGetCRUD,
  displayGetCRUD,
};
