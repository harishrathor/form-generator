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
            lt: 'Please fill value less than XXVALUEXX',
            gte: 'Please fill value greater than or equal to XXVALUEXX',
            json: 'Invalid json.',
            lte: 'Please fill value less than or equal to XXVALUEXX',
            max: 'Max value XXVALUEXX is allowed',
            maxDate: 'Max date XXVALUEXX is allowed.',
            min: 'Min value XXVALUEXX is allowed',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9zZXJ2aWNlcy92YWxpZGF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzVDLDRCQUdDOzs7SUFGRyw2QkFBYTs7SUFDYiw4QkFBWTs7QUFJaEIsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUdjLHVCQUFrQixHQUFHO1lBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoRCxTQUFTLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEQsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVDLFFBQVEsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QyxXQUFXLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDcEQsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFDLFVBQVUsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNsRCxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFB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QUFJLFlBQVksSUFBSSxLQUFLLEVBQUU7OzBCQUN0QixhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztvQkFDekMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssWUFBWSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7aUJBQ3ZGO2FBQ0o7aUJBQU07Z0JBQ0gsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyRTtZQUNELE9BQU8saUJBQWlCLENBQUM7U0FDNUI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxPQUFPLENBQUM7U0FDbEI7SUFDTCxDQUFDOzs7WUE3WEosVUFBVTs7Ozs7OztJQUdQLDhDQThCRTs7Ozs7SUFFRixxREE4QkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZ3gtY3VzdG9tLXZhbGlkYXRvcnMnO1xyXG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3JzIH0gZnJvbSAnbmd4LWN1c3RvbS12YWxpZGF0b3JzJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5pbnRlcmZhY2UgVmFsaWRhdG9yRGF0YSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF92YWxpZGF0b3JzTWFwcGluZyA9IHtcclxuICAgICAgICBtYXhsZW5ndGg6IHRoaXMuZ2V0TWF4bGVuZ3RoVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbWlubGVuZ3RoOiB0aGlzLmdldE1pbmxlbmd0aFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHBhdHRlcm46IHRoaXMuZ2V0UGF0dGVyblZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0aGlzLmdldFJlcXVpcmVkVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgYXJyYXlMZW5ndGg6IHRoaXMuZ2V0QXJyYXlMZW5ndGhWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBiYXNlNjQ6IHRoaXMuZ2V0QmFzZTY0VmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgY3JlZGl0Q2FyZDogdGhpcy5nZXRDcmVkaXRDYXJkVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZGF0ZTogdGhpcy5nZXREYXRlVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZGF0ZUlTTzogdGhpcy5nZXREYXRlSVNPVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZGlnaXRzOiB0aGlzLmdldERpZ2l0c1ZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGVtYWlsOiB0aGlzLmdldEVtYWlsVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZXF1YWw6IHRoaXMuZ2V0RXF1YWxWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBub3RFcXVhbDogdGhpcy5nZXROb3RFcXVhbFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGVxdWFsVG86IHRoaXMuZ2V0RXF1YWxUb1ZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG5vdEVxdWFsVG86IHRoaXMuZ2V0Tm90RXF1YWxUb1ZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGx0OiB0aGlzLmdldEx0VmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZ3RlOiB0aGlzLmdldEd0ZVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGpzb246IHRoaXMuZ2V0SnNvblZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGx0ZTogdGhpcy5nZXRMdGVWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBtYXg6IHRoaXMuZ2V0TWF4VmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbWF4RGF0ZTogdGhpcy5nZXRNYXhEYXRlVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbWluOiB0aGlzLmdldE1pblZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG1pbkRhdGU6IHRoaXMuZ2V0TWluRGF0ZVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG51bWJlcjogdGhpcy5nZXROdW1iZXJWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBwcm9wZXJ0eTogdGhpcy5nZXRQcm9wZXJ0eVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHJhbmdlOiB0aGlzLmdldFJhbmdlVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgcmFuZ2VMZW5ndGg6IHRoaXMuZ2V0UmFuZ2VMZW5ndGhWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICB1cmw6IHRoaXMuZ2V0VXJsVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgdXVpZDogdGhpcy5nZXRVdWlkVmFsaWRhdG9yLmJpbmQodGhpcylcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIF92YWxpZGF0aW9uTWVzc2FnZU1hcHBpbmcgPSB7XHJcbiAgICAgICAgbWF4bGVuZ3RoOiAnTGVuZ3RoIGNhbiBub3QgYmUgZ3JlYXRlciB0aGFuIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIG1pbmxlbmd0aDogJ0xlbmd0aCBjYW4gbm90IGJlIGxlc3MgdGhhbiBYWFZBTFVFWFguJyxcclxuICAgICAgICBwYXR0ZXJuOiAnSW52YWxpZCB2YWx1ZS4nLFxyXG4gICAgICAgIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nLFxyXG4gICAgICAgIGFycmF5TGVuZ3RoOiAnTGVuZ2h0IHNob3VsZCBiZSBYWFZBTFVFWFguJyxcclxuICAgICAgICBiYXNlNjQ6ICdJbnZhbGlkIGJhc2U2NCB2YWx1ZS4nLFxyXG4gICAgICAgIGNyZWRpdENhcmQ6ICdJbnZhbGlkIGNyZWRpdCBjYXJkIG51bWJlci4nLFxyXG4gICAgICAgIGRhdGU6ICdJbnZhbGlkIGRhdGUuJyxcclxuICAgICAgICBkYXRlSVNPOiAnSW52YWxpZCBJU08gZGF0ZS4nLFxyXG4gICAgICAgIGRpZ2l0czogJ1JlcXVpcmVkIG51bWJlcnMgb25seS4nLFxyXG4gICAgICAgIGVtYWlsOiAnSW52YWxpZCBlbWFpbC4nLFxyXG4gICAgICAgIGVxdWFsOiAnVmFsdWUgc2hvdWxkIGJlIGVxdWFsIHRvIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIG5vdEVxdWFsOiAnVmFsdWUgc2hvdWxkIG5vdCBiZSBlcXVhbCB0byBYWFZBTFVFWFguJyxcclxuICAgICAgICBlcXVhbFRvOiAnVmFsdWUgc2hvdWxkIGJlIGVxdWFsIHRvIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIG5vdEVxdWFsVG86ICdWYWx1ZSBzaG91bGQgbm90IGJlIGVxdWFsIHRvIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIGx0OiAnUGxlYXNlIGZpbGwgdmFsdWUgbGVzcyB0aGFuIFhYVkFMVUVYWCcsXHJcbiAgICAgICAgZ3RlOiAnUGxlYXNlIGZpbGwgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIFhYVkFMVUVYWCcsXHJcbiAgICAgICAganNvbjogJ0ludmFsaWQganNvbi4nLFxyXG4gICAgICAgIGx0ZTogJ1BsZWFzZSBmaWxsIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBYWFZBTFVFWFgnLFxyXG4gICAgICAgIG1heDogJ01heCB2YWx1ZSBYWFZBTFVFWFggaXMgYWxsb3dlZCcsXHJcbiAgICAgICAgbWF4RGF0ZTogJ01heCBkYXRlIFhYVkFMVUVYWCBpcyBhbGxvd2VkLicsXHJcbiAgICAgICAgbWluOiAnTWluIHZhbHVlIFhYVkFMVUVYWCBpcyBhbGxvd2VkJyxcclxuICAgICAgICBtaW5EYXRlOiAnTWluIGRhdGUgWFhWQUxVRVhYIGlzIGFsbG93ZWQuJyxcclxuICAgICAgICBudW1iZXI6ICdOdW1iZXJzIG9ubHkgcmVxdWlyZWQuJyxcclxuICAgICAgICBwcm9wZXJ0eTogJ0ludmFsaWQgcHJvcGVydHkuJyxcclxuICAgICAgICByYW5nZTogJ1ZhbHVlIHNob3VsZCBiZSBiZXR3ZWVuIFhYbWluWFggYW5kIFhYbWF4WFguJyxcclxuICAgICAgICByYW5nZUxlbmd0aDogJ1JhbmdlIHNob3VsZCBiZSBiZXR3ZWVuIFhYbWluWFggYW5kIFhYbWF4WFguJyxcclxuICAgICAgICB1cmw6ICdJbnZhbGlkIFVSTC4nLFxyXG4gICAgICAgIHV1aWQ6ICdJbnZhbGlkIFVVSUQuJ1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4bGVuZ3RoVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNaW5sZW5ndGhWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm1pbkxlbmd0aCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhdHRlcm5WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLnBhdHRlcm4odmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXF1aXJlZFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMucmVxdWlyZWQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFycmF5TGVuZ3RoVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5hcnJheUxlbmd0aCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJhc2U2NFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuYmFzZTY0O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDcmVkaXRDYXJkVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5jcmVkaXRDYXJkO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRlVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5kYXRlKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF0ZUlTT1ZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZGF0ZUlTTztcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGlnaXRzVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5kaWdpdHM7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVtYWlsVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5lbWFpbDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXF1YWxWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmVxdWFsKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldEVxdWFsVG9WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmVxdWFsVG8odmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGdldEx0VmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5sdCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEd0ZVZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZ3RlKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SnNvblZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuanNvbjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0THRlVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5sdGUodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXhWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm1heCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1heERhdGVWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm1heERhdGU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1pblZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubWluKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWluRGF0ZVZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubWluRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vdEVxdWFsVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5ub3RFcXVhbCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vdEVxdWFsVG9WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm5vdEVxdWFsVG8odmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROdW1iZXJWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm51bWJlcjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHJvcGVydHlWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLnByb3BlcnR5KHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmFuZ2VWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLnJhbmdlKFt2YWx1ZS5taW4sIHZhbHVlLm1heF0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSYW5nZUxlbmd0aFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMucmFuZ2VMZW5ndGgoW3ZhbHVlLm1pbiwgdmFsdWUubWF4XSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVybFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMudXJsO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVdWlkVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy51dWlkKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsaWRhdG9yKHZhbGlkYXRvckRhdGE6IFZhbGlkYXRvckRhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFsaWRhdG9yRGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbGlkYXRvckRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92YWxpZGF0b3JzTWFwcGluZ1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbkZuID0gdGhpcy5fdmFsaWRhdG9yc01hcHBpbmdbbmFtZV0odmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGF0ZTogdGhpcy5nZXRFcnJvck1lc3NhZ2VEYXRhKHZhbGlkYXRvckRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFZhbGlkYXRpb24gJyR7bmFtZX0nIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFcnJvck1lc3NhZ2VEYXRhKHZhbGlkYXRvckRhdGE6IFZhbGlkYXRvckRhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFsaWRhdG9yRGF0YS5uYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuX2dldFZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRvckRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdG9yRGF0YTogVmFsaWRhdG9yRGF0YSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB2YWxpZGF0b3JEYXRhLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsaWRhdG9yRGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gdGhpcy5fdmFsaWRhdGlvbk1lc3NhZ2VNYXBwaW5nW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IHZhbHVlW3Byb3BlcnR5TmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSB2YWxpZGF0aW9uTWVzc2FnZS5yZXBsYWNlKGBYWCR7cHJvcGVydHlOYW1lfVhYYCwgcHJvcGVydHlWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IHZhbGlkYXRpb25NZXNzYWdlLnJlcGxhY2UoYFhYVkFMVUVYWGAsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gJ0Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==