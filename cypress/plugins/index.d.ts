/// <reference types="Cypress"> />

declare namespace Cypress {
    interface Chainable<Subject> {
        xpath<E extends Node = HTMLElement>(selector: string, options?: Partial<Loggable & Timeoutable>): Chainable<JQuery<E>>
    }
}