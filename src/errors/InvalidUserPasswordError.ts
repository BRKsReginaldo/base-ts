import {i18n} from "../lib/i18n";

export class InvalidUserPasswordError {
    message: string;
    data: object;
    status: number;
    level: string;

    constructor() {
        this.message = i18n.__(`invalid_user_password`);
        this.data = {};
        this.status = 422;
        this.level = 'debug'
    }
}
