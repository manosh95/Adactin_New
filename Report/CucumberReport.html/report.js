$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking functionality in the adactin application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the valid \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-the-application;;1"
    },
    {
      "cells": [
        "AAA",
        "111"
      ],
      "line": 13,
      "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-the-application;;2"
    },
    {
      "cells": [
        "BBB",
        "222"
      ],
      "line": 14,
      "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-the-application;;3"
    },
    {
      "cells": [
        "manosh95",
        "manosh95"
      ],
      "line": 15,
      "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": ": Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid \"AAA\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the valid \"111\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 15651721394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 3648370682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 229046317,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1119081760,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 27858,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": ": Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid \"BBB\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the valid \"222\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 803738957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBB",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 114426636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 92741817,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 541388825,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 30301,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid \"manosh95\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the valid \"manosh95\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 407762060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manosh95",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 143987778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manosh95",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 112170182,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1351623453,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 20526,
  "status": "passed"
});
});