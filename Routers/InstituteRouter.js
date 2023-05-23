const express = require("express");
const route = express.Router();
const InstituteModel = require("../Model/instituteModel");
const { SendResponse } = require("../helper");

// Get Method:

route.get("/", async (req, res) => {
  try {
    const result = await InstituteModel.find();

    if (!result) {
      res.send(SendResponse(false, null, "No Data Found")).status(404);
    } else {
      res.send(SendResponse(true, result)).status(200);
    }
  } catch (e) {
    console.log(e);
    res.send(SendResponse(false, null, "Internal Server Error")).status(400);
  }
});

// Get By Id Method:

route.get("/:id", (req, res) => {
  res.send("Get Institute Data by Id ");
});

// Post Method:

route.post("/", async (req, res) => {
  const { Name, Address, ShortName, Contact } = req.body;
  const errorArray = [];

  try {
    if (!Name) {
      errorArray.push("Name : Required");
    }
    if (!Address) {
      errorArray.push("Address : Required");
    }
    if (!Contact) {
      errorArray.push("Contact : Required");
    }
    if (!ShortName) {
      errorArray.push("ShortName : Required");
    }
    if (errorArray.length > 0) {
      res
        .send(SendResponse(false, errorArray, null, "All Fields Required"))
        .status(400);
      return;
    } else {
      let Obj = { Name, Address, Contact, ShortName };
      let Institute = new InstituteModel(Obj);
      await Institute.save();

      if (!Institute) {
        res
          .send(SendResponse(false, null, "Internal Server Error"))
          .status(400);
      } else {
        res
          .send(SendResponse(true, Institute, "Data Send Successfully"))
          .status(200);
      }
    }
  } catch (e) {
    res.send(SendResponse(false, null, "Internal Server Error")).status(400);
  }
});

// Put Method:

route.put("/:id", (req, res) => {
  res.send("Update Institute Data by Id ");
});

// Delete Method:

route.delete("/:id", (req, res) => {
  res.send("Delete Institute Data ");
});

module.exports = route;
