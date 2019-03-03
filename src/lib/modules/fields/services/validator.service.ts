import { Injectable } from '@angular/core';
//import { CustomValidators } from '../../../../../../../node_modules/ngx-custom-validators';
import { CustomValidators } from 'ngx-custom-validators';
import { Validators } from '@angular/forms';


interface ValidatorData {
    name: string;
    value?: any;
}

@Injectable()
export class ValidatorService {

    protected _validatorsMapping = {
        maxlength: this.getMaxlengthValidator.bind(this),
        minlength: this.getMinlengthValidator.bind(this),
        pattern: this.getPatternValidator.bind(this),
        required: this.getRequiredValidator.bind(this),
        arrayLength: this.getArrayLengthValidator.bind(this),
        base64: this.getBase64Validator.bind(this),
        creditCard: this.getCreditCardValidator.bind(this),
        date: this.getDateValidator.bind(this),
        dateISO: this.getDateISOValidator.bind(this),
        digits: this.getDigitsValidator.bind(this),
        email: this.getEmailValidator.bind(this),
        equal: this.getEqualValidator.bind(this),
        notEqual: this.getNotEqualValidator.bind(this),
        equalTo: this.getEqualToValidator.bind(this),
        notEqualTo: this.getNotEqualToValidator.bind(this),
        lt: this.getLtValidator.bind(this),
        gte: this.getGteValidator.bind(this),
        json: this.getJsonValidator.bind(this),
        lte: this.getLteValidator.bind(this),
        max: this.getMaxValidator.bind(this),
        maxDate: this.getMaxDateValidator.bind(this),
        min: this.getMinValidator.bind(this),
        minDate: this.getMinDateValidator.bind(this),
        number: this.getNumberValidator.bind(this),
        property: this.getPropertyValidator.bind(this),
        range: this.getRangeValidator.bind(this),
        rangeLength: this.getRangeLengthValidator.bind(this),
        url: this.getUrlValidator.bind(this),
        uuid: this.getUuidValidator.bind(this)
    };

    protected _validationMessageMapping = {
        maxlength: 'Length can not be greater than XXVALUEXX.',
        minlength: 'Length can not be less than XXVALUEXX.',
        pattern: 'Invalid value.',
        required: 'This field is required.',
        arrayLength: 'Lenght should be XXVALUEXX.',
        base64: 'Invalid base64 value.',
        creditCard: 'Invalid credit card number.',
        date: 'Invalid date.',
        dateISO: 'Invalid ISO date.',
        digits: 'Required numbers only.',
        email: 'Invalid email.',
        equal: 'Value should be equal to XXVALUEXX.',
        notEqual: 'Value should not be equal to XXVALUEXX.',
        equalTo: 'Value should be equal to XXVALUEXX.',
        notEqualTo: 'Value should not be equal to XXVALUEXX.',
        lt: 'Please fill value less than XXVALUEXX.',
        gte: 'Please fill value greater than or equal to XXVALUEXX',
        json: 'Invalid json.',
        lte: 'Please fill value less than or equal to XXVALUEXX',
        max: 'Max value XXVALUEXX is allowed',
        maxDate: 'Max date XXVALUEXX is allowed.',
        min: 'Min value XXVALUEXX is allowed.',
        minDate: 'Min date XXVALUEXX is allowed.',
        number: 'Numbers only required.',
        property: 'Invalid property.',
        range: 'Value should be between XXminXX and XXmaxXX.',
        rangeLength: 'Range should be between XXminXX and XXmaxXX.',
        url: 'Invalid URL.',
        uuid: 'Invalid UUID.'
    };

    public getMaxlengthValidator(value: any) {
        try {
            return Validators.maxLength(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getMinlengthValidator(value: any) {
        try {
            return Validators.minLength(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getPatternValidator(value: any) {
        try {
            return Validators.pattern(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getRequiredValidator(value: any) {
        try {
            return Validators.required;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getArrayLengthValidator(value: any) {
        try {
            return CustomValidators.arrayLength(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getBase64Validator(value: any) {
        try {
            return CustomValidators.base64;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getCreditCardValidator(value: any) {
        try {
            return CustomValidators.creditCard;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getDateValidator(value: any) {
        try {
            return CustomValidators.date(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getDateISOValidator(value: any) {
        try {
            return CustomValidators.dateISO;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getDigitsValidator(value: any) {
        try {
            return CustomValidators.digits;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getEmailValidator(value: any) {
        try {
            return CustomValidators.email;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getEqualValidator(value: any) {
        try {
            return CustomValidators.equal(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }


    public getEqualToValidator(value: any) {
        try {
            return CustomValidators.equalTo(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }



    public getLtValidator(value: any) {
        try {
            return CustomValidators.lt(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getGteValidator(value: any) {
        try {
            return CustomValidators.gte(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getJsonValidator(value: any) {
        try {
            return CustomValidators.json;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getLteValidator(value: any) {
        try {
            return CustomValidators.lte(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getMaxValidator(value: any) {
        try {
            return CustomValidators.max(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getMaxDateValidator(value: any) {
        try {
            return CustomValidators.maxDate;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getMinValidator(value: any) {
        try {
            return CustomValidators.min(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getMinDateValidator(value: any) {
        try {
            return CustomValidators.minDate(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getNotEqualValidator(value: any) {
        try {
            return CustomValidators.notEqual(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getNotEqualToValidator(value: any) {
        try {
            return CustomValidators.notEqualTo(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getNumberValidator(value: any) {
        try {
            return CustomValidators.number;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getPropertyValidator(value: any) {
        try {
            return CustomValidators.property(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getRangeValidator(value: any) {
        try {
            return CustomValidators.range([value.min, value.max]);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getRangeLengthValidator(value: any) {
        try {
            return CustomValidators.rangeLength([value.min, value.max]);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getUrlValidator(value: any) {
        try {
            return CustomValidators.url;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getUuidValidator(value: any) {
        try {
            return CustomValidators.uuid(value);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getValidator(validatorData: ValidatorData) {
        try {
            const name = validatorData.name;
            const value = validatorData.value;
            if (this._validatorsMapping[name]) {
                const validationFn = this._validatorsMapping[name](value);
                return {
                    messageDate: this.getErrorMessageData(validatorData),
                    validationFn
                }
            } else {
                console.log(`Validation '${name}' is not supported.`);
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public getErrorMessageData(validatorData: ValidatorData) {
        try {
            const name = validatorData.name;
            return {
                name,
                message: this._getValidationMessage(validatorData)
            }
        } catch (error) {
            console.log(error);
        }
    }

    protected _getValidationMessage(validatorData: ValidatorData) {
        try {
            const name = validatorData.name;
            const value = validatorData.value;
            let validationMessage = this._validationMessageMapping[name];
            if (value.constructor === Object) {
                for (let propertyName in value) {
                    const propertyValue = value[propertyName];
                    validationMessage = validationMessage.replace(`XX${propertyName}XX`, propertyValue);
                }
            } else {
                validationMessage = validationMessage.replace(`XXVALUEXX`, value);
            }
            return validationMessage;
        } catch (error) {
            console.log(error);
            return 'Error';
        }
    }
}

