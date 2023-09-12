$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Adactin.feature");
formatter.feature({
  "name": "Adactin Hotel Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user Launchs The Adactin Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionAda.user_Launchs_The_Adactin_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Enters The Username In The InputBox",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAda.user_Enters_The_Username_In_The_InputBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Enters The Password In The InputBox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Enters_The_Password_In_The_InputBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Clicks The LoginButton And It Navigates To the SearchHotelPage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAda.user_Clicks_The_LoginButton_And_It_Navigates_To_the_SearchHotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SearchHotel Functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user Selects The Location From The Dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_Location_From_The_Dropdown()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d116.0.5845.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-LTHFSPB6\u0027, ip: \u0027192.168.29.18\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.182, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\RAVIDH~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50597}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 40cb21d58a695b4b3fb2996b2549e464\n*** Element info: {Using\u003did, value\u003dlocation}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.bas.BaseClass.singleDropDown(BaseClass.java:175)\r\n\tat com.stepdefinitionada.StepDefinitionAda.user_Selects_The_Location_From_The_Dropdown(StepDefinitionAda.java:58)\r\n\tat ✽.user Selects The Location From The Dropdown(src/test/resources/Adactin.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user Selects The Hotels From The Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_Hotels_From_The_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Selects The RoomType From The Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_RoomType_From_The_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Selects The NumberOfRooms From The Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_NumberOfRooms_From_The_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enters The CheckInDate In The InputBox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Enters_The_CheckInDate_In_The_InputBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enters The CheckOutDate In The InputBox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Enters_The_CheckOutDate_In_The_InputBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Selects The AdultsPerRoom From The Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_AdultsPerRoom_From_The_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Selects The ChildrenPerRoom From The Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_ChildrenPerRoom_From_The_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Clicks The SearchButton And It Navigates To The SelectHotelPage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAda.user_Clicks_The_SearchButton_And_It_Navigates_To_The_SelectHotelPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "SelectHotel Functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user Selects The RadioButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_RadioButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d116.0.5845.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-LTHFSPB6\u0027, ip: \u0027192.168.29.18\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.182, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\RAVIDH~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50597}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 40cb21d58a695b4b3fb2996b2549e464\n*** Element info: {Using\u003did, value\u003dradiobutton_0}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.click(Unknown Source)\r\n\tat com.bas.BaseClass.clickOnElement(BaseClass.java:63)\r\n\tat com.stepdefinitionada.StepDefinitionAda.user_Selects_The_RadioButton(StepDefinitionAda.java:114)\r\n\tat ✽.user Selects The RadioButton(src/test/resources/Adactin.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user Clicks The ContinueButton And It Navigates To The BookAHotelPage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAda.user_Clicks_The_ContinueButton_And_It_Navigates_To_The_BookAHotelPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "BookAHotel Functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user Enters The Firstname In The InputBox",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAda.user_Enters_The_Firstname_In_The_InputBox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d116.0.5845.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-LTHFSPB6\u0027, ip: \u0027192.168.29.18\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.182, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\RAVIDH~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50597}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 40cb21d58a695b4b3fb2996b2549e464\n*** Element info: {Using\u003dname, value\u003dfirst_name}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.bas.BaseClass.sendValues(BaseClass.java:68)\r\n\tat com.stepdefinitionada.StepDefinitionAda.user_Enters_The_Firstname_In_The_InputBox(StepDefinitionAda.java:126)\r\n\tat ✽.user Enters The Firstname In The InputBox(src/test/resources/Adactin.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user Enters The Lastname In The InputBox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Enters_The_Lastname_In_The_InputBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enters The BillingAddress In The InputBox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Enters_The_BillingAddress_In_The_InputBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enters The CreditCardNo In The InputBox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Enters_The_CreditCardNo_In_The_InputBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Selects The CreditCardType From The Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_CreditCardType_From_The_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Selects The ExpiryMonth From The Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_ExpiryMonth_From_The_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Selects The ExpiryYear From The Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Selects_The_ExpiryYear_From_The_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enters The CVVNumber In The InputBox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAda.user_Enters_The_CVVNumber_In_The_InputBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Clicks The BookNowButton And It Navigates To The BookingConfirmationPage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAda.user_Clicks_The_BookNowButton_And_It_Navigates_To_The_BookingConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "BookingConfirmation Functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user Clicks The MyItineraryButton And It Navigates To The BookedItineraryPage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAda.user_Clicks_The_MyItineraryButton_And_It_Navigates_To_The_BookedItineraryPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d116.0.5845.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-LTHFSPB6\u0027, ip: \u0027192.168.29.18\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.182, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\RAVIDH~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50597}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 40cb21d58a695b4b3fb2996b2549e464\n*** Element info: {Using\u003did, value\u003dmy_itinerary}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.click(Unknown Source)\r\n\tat com.bas.BaseClass.clickOnElement(BaseClass.java:63)\r\n\tat com.stepdefinitionada.StepDefinitionAda.user_Clicks_The_MyItineraryButton_And_It_Navigates_To_The_BookedItineraryPage(StepDefinitionAda.java:181)\r\n\tat ✽.user Clicks The MyItineraryButton And It Navigates To The BookedItineraryPage(src/test/resources/Adactin.feature:38)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "BookedItinerary Functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user Clicks The LogoutButton And Nagivates To The LoginAgainPage",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAda.user_Clicks_The_LogoutButton_And_Nagivates_To_The_LoginAgainPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d116.0.5845.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-LTHFSPB6\u0027, ip: \u0027192.168.29.18\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.182, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\RAVIDH~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50597}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 40cb21d58a695b4b3fb2996b2549e464\n*** Element info: {Using\u003did, value\u003dlogout}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.click(Unknown Source)\r\n\tat com.bas.BaseClass.clickOnElement(BaseClass.java:63)\r\n\tat com.stepdefinitionada.StepDefinitionAda.user_Clicks_The_LogoutButton_And_Nagivates_To_The_LoginAgainPage(StepDefinitionAda.java:187)\r\n\tat ✽.user Clicks The LogoutButton And Nagivates To The LoginAgainPage(src/test/resources/Adactin.feature:41)\r\n",
  "status": "failed"
});
});