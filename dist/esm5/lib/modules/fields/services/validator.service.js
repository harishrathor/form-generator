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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9zZXJ2aWNlcy92YWxpZGF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzVDLDRCQUdDOzs7SUFGRyw2QkFBYTs7SUFDYiw4QkFBWTs7QUFHaEI7SUFBQTtRQUdjLHVCQUFrQixHQUFHO1lBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoRCxTQUFTLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEQsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVDLFFBQVEsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QyxXQUFXLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDcEQsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFDLFVBQVUsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNsRCxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU0s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QWEsQ0FBQzthQUNyRCxDQUFBO1NBQ0o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7Ozs7SUFFUyxnREFBcUI7Ozs7O0lBQS9CLFVBQWdDLGFBQTRCO1FBQ3hELElBQUk7O2dCQUNNLE1BQUksR0FBRyxhQUFhLENBQUMsSUFBSTs7Z0JBQ3pCLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSzs7Z0JBQzdCLGlCQUFpQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFJLENBQUM7WUFDNUQsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLE1BQU0sRUFBRTtnQkFDOUIsS0FBSyxJQUFJLFlBQVksSUFBSSxLQUFLLEVBQUU7O3dCQUN0QixhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztvQkFDekMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQUssWUFBWSxPQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7aUJBQ3ZGO2FBQ0o7aUJBQU07Z0JBQ0gsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyRTtZQUNELE9BQU8saUJBQWlCLENBQUM7U0FDNUI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxPQUFPLENBQUM7U0FDbEI7SUFDTCxDQUFDOztnQkE3WEosVUFBVTs7SUE4WFgsdUJBQUM7Q0FBQSxBQTlYRCxJQThYQztTQTdYWSxnQkFBZ0I7Ozs7OztJQUV6Qiw4Q0E4QkU7Ozs7O0lBRUYscURBOEJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IEN1c3RvbVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmd4LWN1c3RvbS12YWxpZGF0b3JzJztcclxuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9ycyB9IGZyb20gJ25neC1jdXN0b20tdmFsaWRhdG9ycyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuaW50ZXJmYWNlIFZhbGlkYXRvckRhdGEge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2Uge1xyXG5cclxuICAgIHByb3RlY3RlZCBfdmFsaWRhdG9yc01hcHBpbmcgPSB7XHJcbiAgICAgICAgbWF4bGVuZ3RoOiB0aGlzLmdldE1heGxlbmd0aFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG1pbmxlbmd0aDogdGhpcy5nZXRNaW5sZW5ndGhWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBwYXR0ZXJuOiB0aGlzLmdldFBhdHRlcm5WYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICByZXF1aXJlZDogdGhpcy5nZXRSZXF1aXJlZFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGFycmF5TGVuZ3RoOiB0aGlzLmdldEFycmF5TGVuZ3RoVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgYmFzZTY0OiB0aGlzLmdldEJhc2U2NFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGNyZWRpdENhcmQ6IHRoaXMuZ2V0Q3JlZGl0Q2FyZFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGRhdGU6IHRoaXMuZ2V0RGF0ZVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGRhdGVJU086IHRoaXMuZ2V0RGF0ZUlTT1ZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGRpZ2l0czogdGhpcy5nZXREaWdpdHNWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBlbWFpbDogdGhpcy5nZXRFbWFpbFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGVxdWFsOiB0aGlzLmdldEVxdWFsVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbm90RXF1YWw6IHRoaXMuZ2V0Tm90RXF1YWxWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBlcXVhbFRvOiB0aGlzLmdldEVxdWFsVG9WYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBub3RFcXVhbFRvOiB0aGlzLmdldE5vdEVxdWFsVG9WYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBsdDogdGhpcy5nZXRMdFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGd0ZTogdGhpcy5nZXRHdGVWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBqc29uOiB0aGlzLmdldEpzb25WYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBsdGU6IHRoaXMuZ2V0THRlVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgbWF4OiB0aGlzLmdldE1heFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG1heERhdGU6IHRoaXMuZ2V0TWF4RGF0ZVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG1pbjogdGhpcy5nZXRNaW5WYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBtaW5EYXRlOiB0aGlzLmdldE1pbkRhdGVWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICBudW1iZXI6IHRoaXMuZ2V0TnVtYmVyVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgcHJvcGVydHk6IHRoaXMuZ2V0UHJvcGVydHlWYWxpZGF0b3IuYmluZCh0aGlzKSxcclxuICAgICAgICByYW5nZTogdGhpcy5nZXRSYW5nZVZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHJhbmdlTGVuZ3RoOiB0aGlzLmdldFJhbmdlTGVuZ3RoVmFsaWRhdG9yLmJpbmQodGhpcyksXHJcbiAgICAgICAgdXJsOiB0aGlzLmdldFVybFZhbGlkYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHV1aWQ6IHRoaXMuZ2V0VXVpZFZhbGlkYXRvci5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCBfdmFsaWRhdGlvbk1lc3NhZ2VNYXBwaW5nID0ge1xyXG4gICAgICAgIG1heGxlbmd0aDogJ0xlbmd0aCBjYW4gbm90IGJlIGdyZWF0ZXIgdGhhbiBYWFZBTFVFWFguJyxcclxuICAgICAgICBtaW5sZW5ndGg6ICdMZW5ndGggY2FuIG5vdCBiZSBsZXNzIHRoYW4gWFhWQUxVRVhYLicsXHJcbiAgICAgICAgcGF0dGVybjogJ0ludmFsaWQgdmFsdWUuJyxcclxuICAgICAgICByZXF1aXJlZDogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcclxuICAgICAgICBhcnJheUxlbmd0aDogJ0xlbmdodCBzaG91bGQgYmUgWFhWQUxVRVhYLicsXHJcbiAgICAgICAgYmFzZTY0OiAnSW52YWxpZCBiYXNlNjQgdmFsdWUuJyxcclxuICAgICAgICBjcmVkaXRDYXJkOiAnSW52YWxpZCBjcmVkaXQgY2FyZCBudW1iZXIuJyxcclxuICAgICAgICBkYXRlOiAnSW52YWxpZCBkYXRlLicsXHJcbiAgICAgICAgZGF0ZUlTTzogJ0ludmFsaWQgSVNPIGRhdGUuJyxcclxuICAgICAgICBkaWdpdHM6ICdSZXF1aXJlZCBudW1iZXJzIG9ubHkuJyxcclxuICAgICAgICBlbWFpbDogJ0ludmFsaWQgZW1haWwuJyxcclxuICAgICAgICBlcXVhbDogJ1ZhbHVlIHNob3VsZCBiZSBlcXVhbCB0byBYWFZBTFVFWFguJyxcclxuICAgICAgICBub3RFcXVhbDogJ1ZhbHVlIHNob3VsZCBub3QgYmUgZXF1YWwgdG8gWFhWQUxVRVhYLicsXHJcbiAgICAgICAgZXF1YWxUbzogJ1ZhbHVlIHNob3VsZCBiZSBlcXVhbCB0byBYWFZBTFVFWFguJyxcclxuICAgICAgICBub3RFcXVhbFRvOiAnVmFsdWUgc2hvdWxkIG5vdCBiZSBlcXVhbCB0byBYWFZBTFVFWFguJyxcclxuICAgICAgICBsdDogJ1BsZWFzZSBmaWxsIHZhbHVlIGxlc3MgdGhhbiBYWFZBTFVFWFgnLFxyXG4gICAgICAgIGd0ZTogJ1BsZWFzZSBmaWxsIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBYWFZBTFVFWFgnLFxyXG4gICAgICAgIGpzb246ICdJbnZhbGlkIGpzb24uJyxcclxuICAgICAgICBsdGU6ICdQbGVhc2UgZmlsbCB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gWFhWQUxVRVhYJyxcclxuICAgICAgICBtYXg6ICdNYXggdmFsdWUgWFhWQUxVRVhYIGlzIGFsbG93ZWQnLFxyXG4gICAgICAgIG1heERhdGU6ICdNYXggZGF0ZSBYWFZBTFVFWFggaXMgYWxsb3dlZC4nLFxyXG4gICAgICAgIG1pbjogJ01pbiB2YWx1ZSBYWFZBTFVFWFggaXMgYWxsb3dlZCcsXHJcbiAgICAgICAgbWluRGF0ZTogJ01pbiBkYXRlIFhYVkFMVUVYWCBpcyBhbGxvd2VkLicsXHJcbiAgICAgICAgbnVtYmVyOiAnTnVtYmVycyBvbmx5IHJlcXVpcmVkLicsXHJcbiAgICAgICAgcHJvcGVydHk6ICdJbnZhbGlkIHByb3BlcnR5LicsXHJcbiAgICAgICAgcmFuZ2U6ICdWYWx1ZSBzaG91bGQgYmUgYmV0d2VlbiBYWG1pblhYIGFuZCBYWG1heFhYLicsXHJcbiAgICAgICAgcmFuZ2VMZW5ndGg6ICdSYW5nZSBzaG91bGQgYmUgYmV0d2VlbiBYWG1pblhYIGFuZCBYWG1heFhYLicsXHJcbiAgICAgICAgdXJsOiAnSW52YWxpZCBVUkwuJyxcclxuICAgICAgICB1dWlkOiAnSW52YWxpZCBVVUlELidcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldE1heGxlbmd0aFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMubWF4TGVuZ3RoKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWlubGVuZ3RoVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5taW5MZW5ndGgodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQYXR0ZXJuVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5wYXR0ZXJuKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVxdWlyZWRWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLnJlcXVpcmVkO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBcnJheUxlbmd0aFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuYXJyYXlMZW5ndGgodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCYXNlNjRWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmJhc2U2NDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3JlZGl0Q2FyZFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuY3JlZGl0Q2FyZDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF0ZVZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGVJU09WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmRhdGVJU087XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERpZ2l0c1ZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZGlnaXRzO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFbWFpbFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMuZW1haWw7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVxdWFsVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5lcXVhbCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRFcXVhbFRvVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5lcXVhbFRvKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRMdFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubHQodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRHdGVWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmd0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEpzb25WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLmpzb247XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEx0ZVZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubHRlKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4VmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5tYXgodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXhEYXRlVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5tYXhEYXRlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNaW5WYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm1pbih2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1pbkRhdGVWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLm1pbkRhdGUodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3RFcXVhbFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMubm90RXF1YWwodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3RFcXVhbFRvVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5ub3RFcXVhbFRvKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TnVtYmVyVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5udW1iZXI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFByb3BlcnR5VmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5wcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJhbmdlVmFsaWRhdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3VzdG9tVmFsaWRhdG9ycy5yYW5nZShbdmFsdWUubWluLCB2YWx1ZS5tYXhdKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmFuZ2VMZW5ndGhWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLnJhbmdlTGVuZ3RoKFt2YWx1ZS5taW4sIHZhbHVlLm1heF0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVcmxWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDdXN0b21WYWxpZGF0b3JzLnVybDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VXVpZFZhbGlkYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEN1c3RvbVZhbGlkYXRvcnMudXVpZCh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbGlkYXRvcih2YWxpZGF0b3JEYXRhOiBWYWxpZGF0b3JEYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhbGlkYXRvckRhdGEubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxpZGF0b3JEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsaWRhdG9yc01hcHBpbmdbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25GbiA9IHRoaXMuX3ZhbGlkYXRvcnNNYXBwaW5nW25hbWVdKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURhdGU6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlRGF0YSh2YWxpZGF0b3JEYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBWYWxpZGF0aW9uICcke25hbWV9JyBpcyBub3Qgc3VwcG9ydGVkLmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXJyb3JNZXNzYWdlRGF0YSh2YWxpZGF0b3JEYXRhOiBWYWxpZGF0b3JEYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhbGlkYXRvckRhdGEubmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0b3JEYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2dldFZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRvckRhdGE6IFZhbGlkYXRvckRhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFsaWRhdG9yRGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbGlkYXRvckRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9IHRoaXMuX3ZhbGlkYXRpb25NZXNzYWdlTWFwcGluZ1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSB2YWx1ZVtwcm9wZXJ0eU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gdmFsaWRhdGlvbk1lc3NhZ2UucmVwbGFjZShgWFgke3Byb3BlcnR5TmFtZX1YWGAsIHByb3BlcnR5VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSB2YWxpZGF0aW9uTWVzc2FnZS5yZXBsYWNlKGBYWFZBTFVFWFhgLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuICdFcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=