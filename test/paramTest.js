const { Builder, By, Key } = require("selenium-webdriver");
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

  browsers = [
    { browser: "Chrome", bVersion: "93.0", os: "Windows 10" },
    { browser: "Firefox", bVersion: "91.0", os: "Windows 10" },
    { browser: "Firefox", bVersion: "90.0", os: "Windows 10" },
  ];

  browsers.forEach(({ browser, bVersion, os }) => {
    it(`successfully adds todo for browser ${browser}, ${bVersion}, ${os}`, async function () {
      ltCapabilities.capabilities["LT:Options"].platformName = os;
      ltCapabilities.capabilities.browserName = browser;
      ltCapabilities.capabilities.browserVersion = bVersion;
      ltCapabilities.capabilities["LT:Options"].username = this.test.title;
      //lauch the browser

      driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(ltCapabilities.capabilities)
        .build();

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

      await driver.quit();
    });
  });
});
