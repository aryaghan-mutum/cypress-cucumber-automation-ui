Feature: Facebook Login

    @smoke
    Scenario: User must be able to login in
    Given Open Facebook login page
    When I type in
        |  username  | password  |
        |  anurag.muthyam@rocketmail.com | ilovecosmos@123  |
    Then click on Sign in button
    Then "Facebook Home Page" should be shown