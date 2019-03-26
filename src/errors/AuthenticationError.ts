import {i18n} from "../lib/i18n";

export class AuthenticationError {
    message: string;
    data: object;
    status: number;
    level: string;

    constructor() {
        this.message = i18n.__(`authentication_error`);
        this.data = {};
        this.status = 401;
        this.level = 'debug'
    }
}
