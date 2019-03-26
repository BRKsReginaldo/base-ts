import {validateAll} from 'indicative'
import {pick} from 'lodash'
import {ValidationError} from '../errors'

type ValidationResult = {
    errors?: any
    data?: any
}

type ValidatorFunction = (payload: object, rules: object, message?: object, formatter?: Function) => Promise<ValidationResult>

type ValidationHandler = (data: object) => void


function onSuccessFn(resolve, _reject, rules): ValidationHandler {
    return function(data): void {
        resolve({
            data: pick(data, Object.keys(rules))
        })
    }
}

export function resolveErrors(resolve, errors): void {
    resolve({errors})
}

export function onErrorFn(resolve): ValidationHandler {
    return function(errors): void {
        resolveErrors(resolve, errors)
    }
}

export function rejectErrors(reject, errors): void {
    reject(new ValidationError(errors))
}

export function hardOnErrorFn(_resolve, reject): ValidationHandler {
    return function(errors): void {
        rejectErrors(reject, errors)
    }
}

function makeValidator(onSuccess, onError): ValidatorFunction {
    return function(payload: object, rules: object, message?, formatter?): Promise<ValidationResult> {
        return new Promise<ValidationResult>(function(resolve, reject) {
            validateAll(payload, rules, message, formatter)
                .then(onSuccess(resolve, reject, rules))
                .catch(onError(resolve, reject))
        })
    }
}

export const validate = makeValidator(onSuccessFn, onErrorFn);

export const hardValidate = makeValidator(onSuccessFn, hardOnErrorFn);
