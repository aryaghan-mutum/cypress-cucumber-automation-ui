Feature: Facebook Login

    @smoke
    Scenario: User must be able to login in

        Given Open Facebook login page
        When Set username and password
            | username                      | password        |
            | a | i |
        Then Click Sign in button