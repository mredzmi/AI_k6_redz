Feature: Saucedemo User Login

  Scenario: Successful Login with standard_user
    Given the user is on the Saucedemo login page
    When the user enters "standard_user" and "secret_sauce"
    And clicks the login button
    Then the user should be redirected to the inventory page
    And should see the products listing

  Scenario: Failed Login with locked_out_user
    Given the user is on the Saucedemo login page
    When the user enters "locked_out_user" and "secret_sauce"
    And clicks the login button
    Then the user should see an error message "Epic sadface: Sorry, this user has been locked out."
