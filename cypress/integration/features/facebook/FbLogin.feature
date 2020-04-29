Feature: Facebook Login

    @smoke
    Scenario: User must be able to login in
        Given Open Facebook login page
        When Set username "username" and password "password"
        Then Click Sign in button