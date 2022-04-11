$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Bigbasket.feature");
formatter.feature({
  "name": "Bigbasket Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Flow of Addchart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I want to open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleSteps.i_want_to_open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "open url",
  "keyword": "And "
});
formatter.match({
  "location": "SampleSteps.open_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on signup/signin",
  "keyword": "And "
});
formatter.match({
  "location": "SampleSteps.click_on_signup_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid mobile number and OTP",
  "keyword": "And "
});
formatter.match({
  "location": "SampleSteps.enter_valid_mobile_number_and_OTP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Verify and Continue",
  "keyword": "When "
});
formatter.match({
  "location": "SampleSteps.click_on_Verify_and_Continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter firstname lastname and emailid",
  "keyword": "And "
});
formatter.match({
  "location": "SampleSteps.enter_firstname_lastname_and_emailid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on startshopping",
  "keyword": "And "
});
formatter.match({
  "location": "SampleSteps.click_on_startshopping()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Goto search",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleSteps.goto_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search for Onion",
  "keyword": "And "
});
formatter.match({
  "location": "SampleSteps.search_for_Onion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the Quantity and click on Add",
  "keyword": "And "
});
formatter.match({
  "location": "SampleSteps.select_the_Quantity_and_click_on_Add()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d100.0.4896.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KH9NLD2V\u0027, ip: \u0027192.168.150.64\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.75, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\KIRANA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ade522f5da3c68cfc466b9b916729e43\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Steps.SampleSteps.select_the_Quantity_and_click_on_Add(SampleSteps.java:88)\r\n\tat ✽.Select the Quantity and click on Add(file:Features/Bigbasket.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Print message Item is added successfully in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleSteps.print_message_Item_is_added_successfully_in_the_cart()"
});
formatter.result({
  "status": "skipped"
});
});