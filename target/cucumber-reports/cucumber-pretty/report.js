$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Google Search",
  "description": "As a web user\r\nI want to find information on google\r\nSo that I get a better understanding of the topic",
  "id": "google-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleSearch"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Search result page contains search query",
  "description": "",
  "id": "google-search;search-result-page-contains-search-query",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I\u0027m on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for \"Cucumber\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the page title should contain word \"cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_m_on_google_search_page()"
});
formatter.result({
  "duration": 3076492121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 14
    }
  ],
  "location": "LoginSteps.i_search_for(String)"
});
formatter.result({
  "duration": 1283494788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber",
      "offset": 36
    }
  ],
  "location": "LoginSteps.the_page_title_should_contain_word(String)"
});
formatter.result({
  "duration": 87273,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Google first result description contains searched query",
  "description": "",
  "id": "google-search;google-first-result-description-contains-searched-query",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I\u0027m on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I search for \"Java\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the first line on the result page should contain \"Java\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_m_on_google_search_page()"
});
formatter.result({
  "duration": 3452880000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 14
    }
  ],
  "location": "LoginSteps.i_search_for(String)"
});
formatter.result({
  "duration": 1711712000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 50
    }
  ],
  "location": "LoginSteps.the_first_line_on_the_result_page_should_contain(String)"
});
formatter.result({
  "duration": 124606,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Google first result description contains searched query",
  "description": "",
  "id": "google-search;google-first-result-description-contains-searched-query",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I\u0027m on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "i navigate to \"URL\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "i enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "i click on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_m_on_google_search_page()"
});
formatter.result({
  "duration": 3382560000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 15
    }
  ],
  "location": "LoginSteps.i_navigate_to(String)"
});
formatter.result({
  "duration": 721138425,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_enter_username_and_password()"
});
formatter.result({
  "duration": 388201697,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_Login_button()"
});
formatter.result({
  "duration": 1346241454,
  "status": "passed"
});
});