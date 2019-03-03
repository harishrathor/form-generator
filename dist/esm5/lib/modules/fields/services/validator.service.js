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
var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
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
    ValidatorService.prototype.getMaxlengthValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return Validators.maxLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMinlengthValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return Validators.minLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getPatternValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return Validators.pattern(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getRequiredValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return Validators.required;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getArrayLengthValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.arrayLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getBase64Validator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.base64;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getCreditCardValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.creditCard;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getDateValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.date(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getDateISOValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.dateISO;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getDigitsValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.digits;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getEmailValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.email;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getEqualValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.equal(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getEqualToValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.equalTo(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getLtValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.lt(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getGteValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.gte(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getJsonValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.json;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getLteValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.lte(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMaxValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.max(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMaxDateValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.maxDate;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMinValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.min(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMinDateValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.minDate(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getNotEqualValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.notEqual(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getNotEqualToValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.notEqualTo(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getNumberValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.number;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getPropertyValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.property(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getRangeValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.range([value.min, value.max]);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getRangeLengthValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.rangeLength([value.min, value.max]);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getUrlValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.url;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getUuidValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.uuid(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} validatorData
     * @return {?}
     */
    ValidatorService.prototype.getValidator = /**
     * @param {?} validatorData
     * @return {?}
     */
    function (validatorData) {
        try {
            /** @type {?} */
            var name_1 = validatorData.name;
            /** @type {?} */
            var value = validatorData.value;
            if (this._validatorsMapping[name_1]) {
                /** @type {?} */
                var validationFn = this._validatorsMapping[name_1](value);
                return {
                    messageDate: this.getErrorMessageData(validatorData),
                    validationFn: validationFn
                };
            }
            else {
                console.log("Validation '" + name_1 + "' is not supported.");
                return null;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} validatorData
     * @return {?}
     */
    ValidatorService.prototype.getErrorMessageData = /**
     * @param {?} validatorData
     * @return {?}
     */
    function (validatorData) {
        try {
            /** @type {?} */
            var name_2 = validatorData.name;
            return {
                name: name_2,
                message: this._getValidationMessage(validatorData)
            };
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @param {?} validatorData
     * @return {?}
     */
    ValidatorService.prototype._getValidationMessage = /**
     * @protected
     * @param {?} validatorData
     * @return {?}
     */
    function (validatorData) {
        try {
            /** @type {?} */
            var name_3 = validatorData.name;
            /** @type {?} */
            var value = validatorData.value;
            /** @type {?} */
            var validationMessage = this._validationMessageMapping[name_3];
            if (value.constructor === Object) {
                for (var propertyName in value) {
                    /** @type {?} */
                    var propertyValue = value[propertyName];
                    validationMessage = validationMessage.replace("XX" + propertyName + "XX", propertyValue);
                }
            }
            else {
                validationMessage = validationMessage.replace("XXVALUEXX", value);
            }
            return validationMessage;
        }
        catch (error) {
            console.log(error);
            return 'Error';
        }
    };
    ValidatorService.decorators = [
        { type: Injectable }
    ];
    return ValidatorService;
}());
export { ValidatorService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL3NlcnZpY2VzL3ZhbGlkYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHNUMsNEJBR0M7OztJQUZHLDZCQUFhOztJQUNiLDhCQUFZOztBQUdoQjtJQUFBO1FBR2MsdUJBQWtCLEdBQUc7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hELFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoRCxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUMsUUFBUSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzlDLFdBQVcsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNwRCxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUMsVUFBVSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUMs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QUMsYUFBYSxDQUFDO2FBQ3JELENBQUE7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7OztJQUVTLGdEQUFxQjs7Ozs7SUFBL0IsVUFBZ0MsYUFBNEI7UUFDeEQsSUFBSTs7Z0JBQ00sTUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJOztnQkFDekIsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLOztnQkFDN0IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQUksQ0FBQztZQUM1RCxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssTUFBTSxFQUFFO2dCQUM5QixLQUFLLElBQUksWUFBWSxJQUFJLEtBQUssRUFBRTs7d0JBQ3RCLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO29CQUN6QyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsT0FBSyxZQUFZLE9BQUksRUFBRSxhQUFhLENBQUMsQ0FBQztpQkFDdkY7YUFDSjtpQkFBTTtnQkFDSCxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JFO1lBQ0QsT0FBTyxpQkFBaUIsQ0FBQztTQUM1QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLE9BQU8sQ0FBQztTQUNsQjtJQUNMLENBQUM7O2dCQTdYSixVQUFVOztJQThYWCx1QkFBQztDQUFBLEFBOVhELElBOFhDO1NBN1hZLGdCQUFnQjs7Ozs7O0lBRXpCLDhDQThCRTs7Ozs7SUFFRixxREE4QkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZ3gtY3VzdG9tLXZhbGlkYXRvcnMnO1xyXG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3JzIH0gZnJvbSAnbmd4LWN1c3RvbS12YWxpZGF0b3JzJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5pbnRlcmZhY2UgVmFsaWRhdG9yRGF0YSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF92YWxpZGF0b3JzTWFwcGluZyA9IHtcclxuICAgICAgICBtYXhsZW5ndGg6IHRoaXMuZ2V0TWF4bGVuZ3RoVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbWlubGVuZ3RoOiB0aGlzLmdldE1pbmxlbmd0aFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHBhdHRlcm46IHRoaXMuZ2V0UGF0dGVyblZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0aGlzLmdldFJlcXVpcmVkVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgYXJyYXlMZW5ndGg6IHRoaXMuZ2V0QXJyYXlMZW5ndGhWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBiYXNlNjQ6IHRoaXMuZ2V0QmFzZTY0VmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgY3JlZGl0Q2FyZDogdGhpcy5nZXRDcmVkaXRDYXJkVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZGF0ZTogdGhpcy5nZXREYXRlVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZGF0ZUlTTzogdGhpcy5nZXREYXRlSVNPVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZGlnaXRzOiB0aGlzLmdldERpZ2l0c1ZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGVtYWlsOiB0aGlzLmdldEVtYWlsVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZXF1YWw6IHRoaXMuZ2V0RXF1YWxWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBub3RFcXVhbDogdGhpcy5nZXROb3RFcXVhbFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGVxdWFsVG86IHRoaXMuZ2V0RXF1YWxUb1ZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG5vdEVxdWFsVG86IHRoaXMuZ2V0Tm90RXF1YWxUb1ZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGx0OiB0aGlzLmdldEx0VmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgZ3RlOiB0aGlzLmdldEd0ZVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGpzb246IHRoaXMuZ2V0SnNvblZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGx0ZTogdGhpcy5nZXRMdGVWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBtYXg6IHRoaXMuZ2V0TWF4VmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbWF4RGF0ZTogdGhpcy5nZXRNYXhEYXRlVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbWluOiB0aGlzLmdldE1pblZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG1pbkRhdGU6IHRoaXMuZ2V0TWluRGF0ZVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG51bWJlcjogdGhpcy5nZXROdW1iZXJWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBwcm9wZXJ0eTogdGhpcy5nZXRQcm9wZXJ0eVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHJhbmdlOiB0aGlzLmdldFJhbmdlVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgcmFuZ2VMZW5ndGg6IHRoaXMuZ2V0UmFuZ2VMZW5ndGhWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICB1cmw6IHRoaXMuZ2V0VXJsVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgdXVpZDogdGhpcy5nZXRVdWlkVmFsaWRhdG9yLmJpbmQodGhpcylcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIF92YWxpZGF0aW9uTWVzc2FnZU1hcHBpbmcgPSB7XHJcbiAgICAgICAgbWF4bGVuZ3RoOiAnTGVuZ3RoIGNhbiBub3QgYmUgZ3JlYXRlciB0aGFuIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIG1pbmxlbmd0aDogJ0xlbmd0aCBjYW4gbm90IGJlIGxlc3MgdGhhbiBYWFZBTFVFWFguJyxcclxuICAgICAgICBwYXR0ZXJuOiAnSW52YWxpZCB2YWx1ZS4nLFxyXG4gICAgICAgIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nLFxyXG4gICAgICAgIGFycmF5TGVuZ3RoOiAnTGVuZ2h0IHNob3VsZCBiZSBYWFZBTFVFWFguJyxcclxuICAgICAgICBiYXNlNjQ6ICdJbnZhbGlkIGJhc2U2NCB2YWx1ZS4nLFxyXG4gICAgICAgIGNyZWRpdENhcmQ6ICdJbnZhbGlkIGNyZWRpdCBjYXJkIG51bWJlci4nLFxyXG4gICAgICAgIGRhdGU6ICdJbnZhbGlkIGRhdGUuJyxcclxuICAgICAgICBkYXRlSVNPOiAnSW52YWxpZCBJU08gZGF0ZS4nLFxyXG4gICAgICAgIGRpZ2l0czogJ1JlcXVpcmVkIG51bWJlcnMgb25seS4nLFxyXG4gICAgICAgIGVtYWlsOiAnSW52YWxpZCBlbWFpbC4nLFxyXG4gICAgICAgIGVxdWFsOiAnVmFsdWUgc2hvdWxkIGJlIGVxdWFsIHRvIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIG5vdEVxdWFsOiAnVmFsdWUgc2hvdWxkIG5vdCBiZSBlcXVhbCB0byBYWFZBTFVFWFguJyxcclxuICAgICAgICBlcXVhbFRvOiAnVmFsdWUgc2hvdWxkIGJlIGVxdWFsIHRvIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIG5vdEVxdWFsVG86ICdWYWx1ZSBzaG91bGQgbm90IGJlIGVxdWFsIHRvIFhYVkFMVUVYWC4nLFxyXG4gICAgICAgIGx0OiAnUGxlYXNlIGZpbGwgdmFsdWUgbGVzcyB0aGFuIFhYVkFMVUVYWCcsXHJcbiAgICAgICAgZ3RlOiAnUGxlYXNlIGZpbGwgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIFhYVkFMVUVYWCcsXHJcbiAgICAgICAganNvbjogJ0ludmFsaWQganNvbi4nLFxyXG4gICAgICAgIGx0ZTogJ1BsZWFzZSBmaWxsIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBYWFZBTFVFWFgnLFxyXG4gICAgICAgIG1heDogJ01heCB2YWx1ZSBYWFZBTFVFWFggaXMgYWxsb3dlZCcsXHJcbiAgICAgICAgbWF4RGF0ZTogJ01heCBkYXRlIFhYVkFMVUVYWCBpcyBhbGxvd2VkLicsXHJcbiAgICAgICAgbWluOiAnTWluIHZhbHVlIFhYVkFMVUVYWCBpcyBhbGxvd2VkJyxcclxuICAgICAgICBtaW5EYXRlOiAnTWluIGRhdGUgWFhWQUxVRVhYIGlzIGFsbG93ZWQuJyxcclxuICAgICAgICBudW1iZXI6ICdOdW1iZXJzIG9ubHkgcmVxdWlyZWQuJyxcclxuICAgICAgICBwcm9wZXJ0eTogJ0ludmFsaWQgcHJvcGVydHkuJyxcclxuICAgICAgICByYW5nZTogJ1ZhbHVlIHNob3VsZCBiZSBiZXR3ZWVuIFhYbWluWFggYW5kIFhYbWF4WFguJyxcclxuICAgICAgICByYW5nZUxlbmd0aDogJ1JhbmdlIHNob3VsZCBiZSBiZXR3ZWVuIFhYbWluWFggYW5kIFhYbWF4WFguJyxcclxuICAgICAgICB1cmw6ICdJbnZhbGlkIFVSTC4nLFxyXG4gICAgICAgIHV1aWQ6ICdJbnZhbGlkIFVVSUQuJ1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4bGVuZ3RoVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNaW5sZW5ndGhWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm1pbkxlbmd0aCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhdHRlcm5WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLnBhdHRlcm4odmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXF1aXJlZFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMucmVxdWlyZWQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFycmF5TGVuZ3RoVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5hcnJheUxlbmd0aCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJhc2U2NFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuYmFzZTY0O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDcmVkaXRDYXJkVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5jcmVkaXRDYXJkO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRlVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5kYXRlKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF0ZUlTT1ZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZGF0ZUlTTztcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGlnaXRzVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5kaWdpdHM7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVtYWlsVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5lbWFpbDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXF1YWxWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmVxdWFsKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldEVxdWFsVG9WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmVxdWFsVG8odmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGdldEx0VmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5sdCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEd0ZVZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZ3RlKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SnNvblZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuanNvbjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0THRlVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5sdGUodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXhWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm1heCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1heERhdGVWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm1heERhdGU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1pblZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubWluKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWluRGF0ZVZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubWluRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vdEVxdWFsVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5ub3RFcXVhbCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vdEVxdWFsVG9WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm5vdEVxdWFsVG8odmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROdW1iZXJWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm51bWJlcjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHJvcGVydHlWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLnByb3BlcnR5KHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmFuZ2VWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLnJhbmdlKFt2YWx1ZS5taW4sIHZhbHVlLm1heF0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSYW5nZUxlbmd0aFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMucmFuZ2VMZW5ndGgoW3ZhbHVlLm1pbiwgdmFsdWUubWF4XSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVybFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMudXJsO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVdWlkVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy51dWlkKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsaWRhdG9yKHZhbGlkYXRvckRhdGE6IFZhbGlkYXRvckRhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFsaWRhdG9yRGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbGlkYXRvckRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92YWxpZGF0b3JzTWFwcGluZ1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbkZuID0gdGhpcy5fdmFsaWRhdG9yc01hcHBpbmdbbmFtZV0odmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGF0ZTogdGhpcy5nZXRFcnJvck1lc3NhZ2VEYXRhKHZhbGlkYXRvckRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFZhbGlkYXRpb24gJyR7bmFtZX0nIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFcnJvck1lc3NhZ2VEYXRhKHZhbGlkYXRvckRhdGE6IFZhbGlkYXRvckRhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFsaWRhdG9yRGF0YS5uYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuX2dldFZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRvckRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdG9yRGF0YTogVmFsaWRhdG9yRGF0YSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB2YWxpZGF0b3JEYXRhLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsaWRhdG9yRGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gdGhpcy5fdmFsaWRhdGlvbk1lc3NhZ2VNYXBwaW5nW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IHZhbHVlW3Byb3BlcnR5TmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSB2YWxpZGF0aW9uTWVzc2FnZS5yZXBsYWNlKGBYWCR7cHJvcGVydHlOYW1lfVhYYCwgcHJvcGVydHlWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IHZhbGlkYXRpb25NZXNzYWdlLnJlcGxhY2UoYFhYVkFMVUVYWGAsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gJ0Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==