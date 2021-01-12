Feature: Booking functionality in the adactin application

@SmokeTest
Scenario Outline:: Verify the user is able to login the application
   Given User launches the application
   When User enter the valid "<username>" in the username field
   And User enter the valid "<password>" in the password field
   And User clicks on the login button
   Then User verifies whether the Homepage navigates to the Search Hotel Page
   
   Examples:
   |username|password|
   |AAA|111|
   |BBB|222|
   |manosh95|manosh95|