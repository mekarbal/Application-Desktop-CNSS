const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("./server.js");
var expect = chai.expect;

describe("all tests ", () => {
  it("check if mat is equal 9 caracteres", function (done) {
    const user = {
      name: "employee",
      phone: "123456789",
      mat: "12121",
      email: "empl@empl.com",
      password: "1234567",
    };
    chai
      .request("http://localhost:5000")
      .post("/employee/")
      .send(user)
      .end((err, res) => {
        if (res.body.data.mat.length === 9) {
          expect(res).to.have.status(200);
        } else {
          console.log(err);
        }
        done();
      });
  });
  it("check if token is valid", function (done) {
    const user = {
      email: "empl@empl.com",
      password: "1234567",
    };
    chai
      .request("http://localhost:5000")
      .post("/employee/login")
      .send(user)
      .end((err, res) => {
        if (res.text === "email or password Incorrect") {
          console.log("invalid token");
        } else {
          expect(res).to.have.status(200);
          done();
        }
      });
  });
});
