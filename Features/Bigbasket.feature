Feature: Bigbasket Feature

  Scenario: Flow of Addchart
    Given I want to open browser
    And open url
    And Click on signup/signin 
    And Enter valid mobile number and OTP
    When Click on Verify and Continue
    And Enter firstname lastname and emailid
    And click on startshopping
    Then Goto search
    And Search for Onion
    And Select the Quantity and click on Add
    Then Print message Item is added successfully in the cart
