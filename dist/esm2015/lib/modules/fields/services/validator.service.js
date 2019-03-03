/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
//import { CustomValidators } from '../../../../../../../node_modules/ngx-custom-validators';
import { CustomValidators } from 'ngx-custom-validators';
import { Validators } from '@angular/forms';
/**
 * @record
 */
function ValidatorData() { }
if (false) {
    /** @type {?} */
    ValidatorData.prototype.name;
    /** @type {?|undefined} */
    ValidatorData.prototype.value;
}
export class ValidatorService {
    constructor() {
        this._validatorsMapping = {
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
        this._validationMessageMapping = {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMaxlengthValidator(value) {
        try {
            return Validators.maxLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMinlengthValidator(value) {
        try {
            return Validators.minLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getPatternValidator(value) {
        try {
            return Validators.pattern(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getRequiredValidator(value) {
        try {
            return Validators.required;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getArrayLengthValidator(value) {
        try {
            return CustomValidators.arrayLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getBase64Validator(value) {
        try {
            return CustomValidators.base64;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getCreditCardValidator(value) {
        try {
            return CustomValidators.creditCard;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDateValidator(value) {
        try {
            return CustomValidators.date(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDateISOValidator(value) {
        try {
            return CustomValidators.dateISO;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDigitsValidator(value) {
        try {
            return CustomValidators.digits;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getEmailValidator(value) {
        try {
            return CustomValidators.email;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getEqualValidator(value) {
        try {
            return CustomValidators.equal(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getEqualToValidator(value) {
        try {
            return CustomValidators.equalTo(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getLtValidator(value) {
        try {
            return CustomValidators.lt(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getGteValidator(value) {
        try {
            return CustomValidators.gte(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getJsonValidator(value) {
        try {
            return CustomValidators.json;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getLteValidator(value) {
        try {
            return CustomValidators.lte(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMaxValidator(value) {
        try {
            return CustomValidators.max(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMaxDateValidator(value) {
        try {
            return CustomValidators.maxDate;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMinValidator(value) {
        try {
            return CustomValidators.min(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMinDateValidator(value) {
        try {
            return CustomValidators.minDate(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getNotEqualValidator(value) {
        try {
            return CustomValidators.notEqual(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getNotEqualToValidator(value) {
        try {
            return CustomValidators.notEqualTo(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getNumberValidator(value) {
        try {
            return CustomValidators.number;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getPropertyValidator(value) {
        try {
            return CustomValidators.property(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getRangeValidator(value) {
        try {
            return CustomValidators.range([value.min, value.max]);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getRangeLengthValidator(value) {
        try {
            return CustomValidators.rangeLength([value.min, value.max]);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getUrlValidator(value) {
        try {
            return CustomValidators.url;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getUuidValidator(value) {
        try {
            return CustomValidators.uuid(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} validatorData
     * @return {?}
     */
    getValidator(validatorData) {
        try {
            /** @type {?} */
            const name = validatorData.name;
            /** @type {?} */
            const value = validatorData.value;
            if (this._validatorsMapping[name]) {
                /** @type {?} */
                const validationFn = this._validatorsMapping[name](value);
                return {
                    messageDate: this.getErrorMessageData(validatorData),
                    validationFn
                };
            }
            else {
                console.log(`Validation '${name}' is not supported.`);
                return null;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} validatorData
     * @return {?}
     */
    getErrorMessageData(validatorData) {
        try {
            /** @type {?} */
            const name = validatorData.name;
            return {
                name,
                message: this._getValidationMessage(validatorData)
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @param {?} validatorData
     * @return {?}
     */
    _getValidationMessage(validatorData) {
        try {
            /** @type {?} */
            const name = validatorData.name;
            /** @type {?} */
            const value = validatorData.value;
            /** @type {?} */
            let validationMessage = this._validationMessageMapping[name];
            if (value.constructor === Object) {
                for (let propertyName in value) {
                    /** @type {?} */
                    const propertyValue = value[propertyName];
                    validationMessage = validationMessage.replace(`XX${propertyName}XX`, propertyValue);
                }
            }
            else {
                validationMessage = validationMessage.replace(`XXVALUEXX`, value);
            }
            return validationMessage;
        }
        catch (error) {
            console.log(error);
            return 'Error';
        }
    }
}
ValidatorService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ValidatorService.prototype._validatorsMapping;
    /**
     * @type {?}
     * @protected
     */
    ValidatorService.prototype._validationMessageMapping;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL3NlcnZpY2VzL3ZhbGlkYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHNUMsNEJBR0M7OztJQUZHLDZCQUFhOztJQUNiLDhCQUFZOztBQUloQixNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBR2MsdUJBQWtCLEdBQUc7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hELFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoRCxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUMsUUFBUSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzlDLFdBQVcsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNwRCxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUMsVUFBVSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUMsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEMsUUFBUSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzlDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QyxVQUFVLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDbEQsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNsQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVDLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDOUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hDLFdBQVcsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNwRCxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN6QyxDQUFDO1FBRVEsOEJBQXlCLEdBQUc7WUFDbEMsU0FBUyxFQUFFLDJDQUEyQztZQUN0RCxTQUFTLEVBQUUsd0NBQXdDO1lBQ25ELE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0IsVUFBVSxFQUFFLDZCQUE2QjtZQUN6QyxJQUFJLEVBQUUsZUFBZTtZQUNyQixPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixLQUFLLEVBQUUscUNBQXFDO1lBQzVDLFFBQVEsRUFBRSx5Q0FBeUM7WUFDbkQsT0FBTyxFQUFFLHFDQUFxQztZQUM5QyxVQUFVLEVBQUUseUNBQXlDO1lBQ3JELEVBQUUsRUFBRSx3Q0FBd0M7WUFDNUMsR0FBRyxFQUFFLHNEQUFzRDtZQUMzRCxJQUFJLEVBQUUsZUFBZTtZQUNyQixHQUFHLEVBQUUsbURBQW1EO1lBQ3hELEdBQUcsRUFBRSxnQ0FBZ0M7WUFDckMsT0FBTyxFQUFFLGdDQUFnQztZQUN6QyxHQUFHLEVBQUUsaUNBQWlDO1lBQ3RDLE9BQU8sRUFBRSxnQ0FBZ0M7WUFDekMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLEtBQUssRUFBRSw4Q0FBOEM7WUFDckQsV0FBVyxFQUFFLDhDQUE4QztZQUMzRCxHQUFHLEVBQUUsY0FBYztZQUNuQixJQUFJLEVBQUUsZUFBZTtTQUN4QixDQUFDO0lBNlROLENBQUM7Ozs7O0lBM1RVLHFCQUFxQixDQUFDLEtBQVU7UUFDbkMsSUFBSTtZQUNBLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxLQUFVO1FBQ25DLElBQUk7WUFDQSxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7Ozs7O0lBRU0sbUJBQW1CLENBQUMsS0FBVTtRQUNqQyxJQUFJO1lBQ0EsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLG9CQUFvQixDQUFDLEtBQVU7UUFDbEMsSUFBSTtZQUNBLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUM5QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSx1QkFBdUIsQ0FBQyxLQUFVO1FBQ3JDLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxLQUFVO1FBQ2hDLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztTQUNsQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxzQkFBc0IsQ0FBQyxLQUFVO1FBQ3BDLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztTQUN0QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxLQUFVO1FBQzlCLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxtQkFBbUIsQ0FBQyxLQUFVO1FBQ2pDLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztTQUNuQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxLQUFVO1FBQ2hDLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztTQUNsQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxpQkFBaUIsQ0FBQyxLQUFVO1FBQy9CLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQztTQUNqQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxpQkFBaUIsQ0FBQyxLQUFVO1FBQy9CLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFHTSxtQkFBbUIsQ0FBQyxLQUFVO1FBQ2pDLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFJTSxjQUFjLENBQUMsS0FBVTtRQUM1QixJQUFJO1lBQ0EsT0FBTyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLEtBQVU7UUFDN0IsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLEtBQVU7UUFDOUIsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1NBQ2hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxLQUFVO1FBQzdCLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxlQUFlLENBQUMsS0FBVTtRQUM3QixJQUFJO1lBQ0EsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7Ozs7O0lBRU0sbUJBQW1CLENBQUMsS0FBVTtRQUNqQyxJQUFJO1lBQ0EsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7U0FDbkM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLEtBQVU7UUFDN0IsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLG1CQUFtQixDQUFDLEtBQVU7UUFDakMsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLG9CQUFvQixDQUFDLEtBQVU7UUFDbEMsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLHNCQUFzQixDQUFDLEtBQVU7UUFDcEMsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLGtCQUFrQixDQUFDLEtBQVU7UUFDaEMsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1NBQ2xDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLG9CQUFvQixDQUFDLEtBQVU7UUFDbEMsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLEtBQVU7UUFDL0IsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFTSx1QkFBdUIsQ0FBQyxLQUFVO1FBQ3JDLElBQUk7WUFDQSxPQUFPLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLEtBQVU7UUFDN0IsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1NBQy9CO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLEtBQVU7UUFDOUIsSUFBSTtZQUNBLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxhQUE0QjtRQUM1QyxJQUFJOztrQkFDTSxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUk7O2tCQUN6QixLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUs7WUFDakMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7O3NCQUN6QixZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDekQsT0FBTztvQkFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztvQkFDcEQsWUFBWTtpQkFDZixDQUFBO2FBQ0o7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLElBQUkscUJBQXFCLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7OztJQUVNLG1CQUFtQixDQUFDLGFBQTRCO1FBQ25ELElBQUk7O2tCQUNNLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSTtZQUMvQixPQUFPO2dCQUNILElBQUk7Z0JBQ0osT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7YUFDckQsQ0FBQTtTQUNKO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7Ozs7O0lBRVMscUJBQXFCLENBQUMsYUFBNEI7UUFDeEQsSUFBSTs7a0JBQ00sSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJOztrQkFDekIsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLOztnQkFDN0IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQztZQUM1RCxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssTUFBTSxFQUFFO2dCQUM5QixLQUFLLElBQUksWUFBWSxJQUFJLEtBQUssRUFBRTs7MEJBQ3RCLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO29CQUN6QyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxZQUFZLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztpQkFDdkY7YUFDSjtpQkFBTTtnQkFDSCxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JFO1lBQ0QsT0FBTyxpQkFBaUIsQ0FBQztTQUM1QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLE9BQU8sQ0FBQztTQUNsQjtJQUNMLENBQUM7OztZQTdYSixVQUFVOzs7Ozs7O0lBR1AsOENBOEJFOzs7OztJQUVGLHFEQThCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25neC1jdXN0b20tdmFsaWRhdG9ycyc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvcnMgfSBmcm9tICduZ3gtY3VzdG9tLXZhbGlkYXRvcnMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcbmludGVyZmFjZSBWYWxpZGF0b3JEYXRhIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlPzogYW55O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3ZhbGlkYXRvcnNNYXBwaW5nID0ge1xyXG4gICAgICAgIG1heGxlbmd0aDogdGhpcy5nZXRNYXhsZW5ndGhWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBtaW5sZW5ndGg6IHRoaXMuZ2V0TWlubGVuZ3RoVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgcGF0dGVybjogdGhpcy5nZXRQYXR0ZXJuVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRoaXMuZ2V0UmVxdWlyZWRWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBhcnJheUxlbmd0aDogdGhpcy5nZXRBcnJheUxlbmd0aFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGJhc2U2NDogdGhpcy5nZXRCYXNlNjRWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBjcmVkaXRDYXJkOiB0aGlzLmdldENyZWRpdENhcmRWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBkYXRlOiB0aGlzLmdldERhdGVWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBkYXRlSVNPOiB0aGlzLmdldERhdGVJU09WYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBkaWdpdHM6IHRoaXMuZ2V0RGlnaXRzVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZW1haWw6IHRoaXMuZ2V0RW1haWxWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBlcXVhbDogdGhpcy5nZXRFcXVhbFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG5vdEVxdWFsOiB0aGlzLmdldE5vdEVxdWFsVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZXF1YWxUbzogdGhpcy5nZXRFcXVhbFRvVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbm90RXF1YWxUbzogdGhpcy5nZXROb3RFcXVhbFRvVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbHQ6IHRoaXMuZ2V0THRWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBndGU6IHRoaXMuZ2V0R3RlVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAganNvbjogdGhpcy5nZXRKc29uVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbHRlOiB0aGlzLmdldEx0ZVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG1heDogdGhpcy5nZXRNYXhWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBtYXhEYXRlOiB0aGlzLmdldE1heERhdGVWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBtaW46IHRoaXMuZ2V0TWluVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbWluRGF0ZTogdGhpcy5nZXRNaW5EYXRlVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbnVtYmVyOiB0aGlzLmdldE51bWJlclZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHByb3BlcnR5OiB0aGlzLmdldFByb3BlcnR5VmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgcmFuZ2U6IHRoaXMuZ2V0UmFuZ2VWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICByYW5nZUxlbmd0aDogdGhpcy5nZXRSYW5nZUxlbmd0aFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHVybDogdGhpcy5nZXRVcmxWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICB1dWlkOiB0aGlzLmdldFV1aWRWYWxpZGF0b3IuYmluZCh0aGlzKVxyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3ZhbGlkYXRpb25NZXNzYWdlTWFwcGluZyA9IHtcclxuICAgICAgICBtYXhsZW5ndGg6ICdMZW5ndGggY2FuIG5vdCBiZSBncmVhdGVyIHRoYW4gWFhWQUxVRVhYLicsXHJcbiAgICAgICAgbWlubGVuZ3RoOiAnTGVuZ3RoIGNhbiBub3QgYmUgbGVzcyB0aGFuIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIHBhdHRlcm46ICdJbnZhbGlkIHZhbHVlLicsXHJcbiAgICAgICAgcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicsXHJcbiAgICAgICAgYXJyYXlMZW5ndGg6ICdMZW5naHQgc2hvdWxkIGJlIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIGJhc2U2NDogJ0ludmFsaWQgYmFzZTY0IHZhbHVlLicsXHJcbiAgICAgICAgY3JlZGl0Q2FyZDogJ0ludmFsaWQgY3JlZGl0IGNhcmQgbnVtYmVyLicsXHJcbiAgICAgICAgZGF0ZTogJ0ludmFsaWQgZGF0ZS4nLFxyXG4gICAgICAgIGRhdGVJU086ICdJbnZhbGlkIElTTyBkYXRlLicsXHJcbiAgICAgICAgZGlnaXRzOiAnUmVxdWlyZWQgbnVtYmVycyBvbmx5LicsXHJcbiAgICAgICAgZW1haWw6ICdJbnZhbGlkIGVtYWlsLicsXHJcbiAgICAgICAgZXF1YWw6ICdWYWx1ZSBzaG91bGQgYmUgZXF1YWwgdG8gWFhWQUxVRVhYLicsXHJcbiAgICAgICAgbm90RXF1YWw6ICdWYWx1ZSBzaG91bGQgbm90IGJlIGVxdWFsIHRvIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIGVxdWFsVG86ICdWYWx1ZSBzaG91bGQgYmUgZXF1YWwgdG8gWFhWQUxVRVhYLicsXHJcbiAgICAgICAgbm90RXF1YWxUbzogJ1ZhbHVlIHNob3VsZCBub3QgYmUgZXF1YWwgdG8gWFhWQUxVRVhYLicsXHJcbiAgICAgICAgbHQ6ICdQbGVhc2UgZmlsbCB2YWx1ZSBsZXNzIHRoYW4gWFhWQUxVRVhYLicsXHJcbiAgICAgICAgZ3RlOiAnUGxlYXNlIGZpbGwgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIFhYVkFMVUVYWCcsXHJcbiAgICAgICAganNvbjogJ0ludmFsaWQganNvbi4nLFxyXG4gICAgICAgIGx0ZTogJ1BsZWFzZSBmaWxsIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBYWFZBTFVFWFgnLFxyXG4gICAgICAgIG1heDogJ01heCB2YWx1ZSBYWFZBTFVFWFggaXMgYWxsb3dlZCcsXHJcbiAgICAgICAgbWF4RGF0ZTogJ01heCBkYXRlIFhYVkFMVUVYWCBpcyBhbGxvd2VkLicsXHJcbiAgICAgICAgbWluOiAnTWluIHZhbHVlIFhYVkFMVUVYWCBpcyBhbGxvd2VkLicsXHJcbiAgICAgICAgbWluRGF0ZTogJ01pbiBkYXRlIFhYVkFMVUVYWCBpcyBhbGxvd2VkLicsXHJcbiAgICAgICAgbnVtYmVyOiAnTnVtYmVycyBvbmx5IHJlcXVpcmVkLicsXHJcbiAgICAgICAgcHJvcGVydHk6ICdJbnZhbGlkIHByb3BlcnR5LicsXHJcbiAgICAgICAgcmFuZ2U6ICdWYWx1ZSBzaG91bGQgYmUgYmV0d2VlbiBYWG1pblhYIGFuZCBYWG1heFhYLicsXHJcbiAgICAgICAgcmFuZ2VMZW5ndGg6ICdSYW5nZSBzaG91bGQgYmUgYmV0d2VlbiBYWG1pblhYIGFuZCBYWG1heFhYLicsXHJcbiAgICAgICAgdXJsOiAnSW52YWxpZCBVUkwuJyxcclxuICAgICAgICB1dWlkOiAnSW52YWxpZCBVVUlELidcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldE1heGxlbmd0aFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMubWF4TGVuZ3RoKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWlubGVuZ3RoVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5taW5MZW5ndGgodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQYXR0ZXJuVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5wYXR0ZXJuKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVxdWlyZWRWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLnJlcXVpcmVkO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBcnJheUxlbmd0aFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuYXJyYXlMZW5ndGgodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCYXNlNjRWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmJhc2U2NDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3JlZGl0Q2FyZFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuY3JlZGl0Q2FyZDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF0ZVZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGVJU09WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmRhdGVJU087XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERpZ2l0c1ZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZGlnaXRzO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFbWFpbFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZW1haWw7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVxdWFsVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5lcXVhbCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRFcXVhbFRvVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5lcXVhbFRvKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRMdFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubHQodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRHdGVWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmd0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEpzb25WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmpzb247XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEx0ZVZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubHRlKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4VmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5tYXgodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXhEYXRlVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5tYXhEYXRlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNaW5WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm1pbih2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1pbkRhdGVWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm1pbkRhdGUodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3RFcXVhbFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubm90RXF1YWwodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3RFcXVhbFRvVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5ub3RFcXVhbFRvKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TnVtYmVyVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5udW1iZXI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFByb3BlcnR5VmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5wcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJhbmdlVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5yYW5nZShbdmFsdWUubWluLCB2YWx1ZS5tYXhdKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmFuZ2VMZW5ndGhWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLnJhbmdlTGVuZ3RoKFt2YWx1ZS5taW4sIHZhbHVlLm1heF0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVcmxWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLnVybDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VXVpZFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMudXVpZCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbGlkYXRvcih2YWxpZGF0b3JEYXRhOiBWYWxpZGF0b3JEYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhbGlkYXRvckRhdGEubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxpZGF0b3JEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsaWRhdG9yc01hcHBpbmdbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25GbiA9IHRoaXMuX3ZhbGlkYXRvcnNNYXBwaW5nW25hbWVdKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURhdGU6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlRGF0YSh2YWxpZGF0b3JEYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBWYWxpZGF0aW9uICcke25hbWV9JyBpcyBub3Qgc3VwcG9ydGVkLmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXJyb3JNZXNzYWdlRGF0YSh2YWxpZGF0b3JEYXRhOiBWYWxpZGF0b3JEYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhbGlkYXRvckRhdGEubmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0b3JEYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2dldFZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRvckRhdGE6IFZhbGlkYXRvckRhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFsaWRhdG9yRGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbGlkYXRvckRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9IHRoaXMuX3ZhbGlkYXRpb25NZXNzYWdlTWFwcGluZ1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSB2YWx1ZVtwcm9wZXJ0eU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gdmFsaWRhdGlvbk1lc3NhZ2UucmVwbGFjZShgWFgke3Byb3BlcnR5TmFtZX1YWGAsIHByb3BlcnR5VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSB2YWxpZGF0aW9uTWVzc2FnZS5yZXBsYWNlKGBYWFZBTFVFWFhgLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuICdFcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=