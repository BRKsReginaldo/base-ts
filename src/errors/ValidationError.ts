import {i18n} from "../lib/i18n";

export class ValidationError {
    message: string;
    data: object;
    status: number;
    level: string;

    constructor(errors = []) {
        this.message = i18n.__(`validation_error`);
        this.data = {errors};
        this.status = 422;
        this.level = 'debug'
    }
}
