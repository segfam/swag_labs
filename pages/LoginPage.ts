import { Locator, Page } from "@playwright/test";
import { PassThrough } from "stream";

export default class LoginPage {

    userNameField : Locator;
    passwordField : Locator;

    constructor (protected page : Page) {
        this.userNameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
    }

    public async loginToApp () {
        await this.userNameField.click();
        await this.userNameField.fill('standard_user');
        await this.passwordField.click();
        await this.passwordField.fill ('secret_sauce');

    }
}