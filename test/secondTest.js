const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();

describe("add another todo tests", function () {
  it("successfully adds another todo to app", async function () {
    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our app
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai should
    todoText.should.equal("Learn Selenium");

    //close the browser
    await driver.quit();
  });
});

//How to do test with online server

/*const { Builder, By, Key } = require("selenium-webdriver");
const ltCapabilities = require("../capabilities");
var should = require("chai").should();

describe("add another todo tests", function () {
  var driver;
  //username
  const USERNAME = ltCapabilities.capabilities["LT:Options"].username;
  //key
  const KEY = ltCapabilities.capabilities["LT:Options"].accessKey;
  //host
  const GRID_HOST = "hub.lambdatest.com/wd/hub";
  const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;

  beforeEach(function () {
    ltCapabilities.capabilities["LT:Options"].project = this.currentTest.title;
    driver = new Builder()
      .usingServer(gridUrl)
      .withCapabilities(ltCapabilities.capabilities)
      .build();
  });

  afterEach(async function () {
    await driver.quit();
  });

  it("successfully adds another todo to app", async function () {
    //launch the browser
    //let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our app
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai should
    todoText.should.equal("Learn Selenium");

    //close the browser
    //await driver.quit();
  });
  it("successfully adds another todo to app", async function () {
    //launch the browser
    // let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our app
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai should
    todoText.should.equal("Learn Selenium");

    //close the browser
    //await driver.quit();
  });
});*/
