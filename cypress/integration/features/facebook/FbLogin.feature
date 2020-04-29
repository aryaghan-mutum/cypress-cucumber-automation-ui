Feature: Facebook Login

    @smoke
    Scenario: User must be able to login in
        Given Open Facebook login page
        When Set credentials and login
            | username                      | password        |
            | your username                 | your password |
        Then Click Sign in button