const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();

describe("add todo tests", function () {
  it("successfully adds a todo to app", async function () {
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

/*const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

async function exampleTest() {
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

  //assert using node assertion
  assert.strictEqual(todoText, "Learn Selenium");

  //assert using chai should
  todoText.should.equal("Learn Selenium");

  //close the browser
  await driver.quit();
}
exampleTest();*/
