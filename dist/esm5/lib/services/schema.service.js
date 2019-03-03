/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { DefaultsService } from './defaults.service';
var SchemaService = /** @class */ (function () {
    function SchemaService(_defaults) {
        this._defaults = _defaults;
        this.initialize();
    }
    /**
     * @return {?}
     */
    SchemaService.prototype.initialize = /**
     * @return {?}
     */
    function () {
        try {
            this._formSchema = {};
            this._formOriginalSchema = {};
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @param {?} schemaKey
     * @param {?} schema
     * @return {?}
     */
    SchemaService.prototype.addSchema = /**
     * @param {?} schemaKey
     * @param {?} schema
     * @return {?}
     */
    function (schemaKey, schema) {
        try {
            if (!this._formOriginalSchema[schemaKey]) {
                this._formOriginalSchema[schemaKey] = {};
            }
            this._formOriginalSchema[schemaKey] = _.assign({}, schema);
            schema = this._modifyDef(schema);
            if (!this._formSchema[schemaKey]) {
                this._formSchema[schemaKey] = {};
            }
            this._formSchema[schemaKey] = schema;
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @param {?} schema
     * @return {?}
     */
    SchemaService.prototype._modifyDef = /**
     * @protected
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        try {
            if (!schema.columns) {
                schema.columns = this._defaults.FORM_COLUMNS;
            }
            if (!schema.fieldsDefaultProps) {
                schema.fieldsDefaultProps = {};
            }
            if (!schema.columns) {
                schema.columns = this._defaults.COLUMNS;
            }
            this._defaults.COLUMNS = schema.columns;
            schema.fieldsDefaultProps.columns = schema.columns;
            schema.fieldsDefaultProps.disabled = schema.disabled;
            schema.fieldsDefaultProps.formCode = schema.code;
            schema.fieldsDefaultProps.formOrder = schema.order || 1;
            schema.fields = this._addFieldsDefaultProps(schema.fields, schema.fieldsDefaultProps);
            schema.buttons = this._addFieldsDefaultProps(schema.buttons, schema.fieldsDefaultProps);
            return schema;
        }
        catch (error) {
            console.log(error);
            return {};
        }
    };
    /**
     * @protected
     * @param {?} fieldsArr
     * @param {?} fieldDefaultProps
     * @return {?}
     */
    SchemaService.prototype._addFieldsDefaultProps = /**
     * @protected
     * @param {?} fieldsArr
     * @param {?} fieldDefaultProps
     * @return {?}
     */
    function (fieldsArr, fieldDefaultProps) {
        var _this = this;
        try {
            if (!fieldsArr) {
                fieldsArr = [];
            }
            fieldsArr.forEach((/**
             * @param {?} def
             * @param {?} index
             * @return {?}
             */
            function (def, index) {
                if (def.type === 'FST') {
                    def.fields = _this._addFieldsDefaultProps(def.fields, fieldDefaultProps);
                }
                else {
                    def.disabled = def.disabled || fieldDefaultProps.disabled || false;
                    /** @type {?} */
                    var fieldProps = _.assign({}, _this._defaults.FIELD_DEFAULT_PROPS, fieldDefaultProps);
                    if (def.type in _this._defaults.EXCEPTIONAL_STYLED_FIELDS) {
                        def.formColumns = fieldProps.columns;
                        def = _.assign(def, _this._defaults.EXCEPTIONAL_STYLED_FIELDS[def.type]);
                    }
                    def = _.assign({}, fieldProps, def);
                }
                fieldsArr[index] = def;
            }));
            return fieldsArr;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    };
    /**
     * @param {?} schemaKey
     * @return {?}
     */
    SchemaService.prototype.getSchemaFields = /**
     * @param {?} schemaKey
     * @return {?}
     */
    function (schemaKey) {
        try {
            if (!this._formSchema[schemaKey] || !this._formSchema[schemaKey].fields) {
                return [];
            }
            return this._formSchema[schemaKey].fields;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    };
    /**
     * @param {?} schemaKey
     * @return {?}
     */
    SchemaService.prototype.getSchemaBySchemaKey = /**
     * @param {?} schemaKey
     * @return {?}
     */
    function (schemaKey) {
        try {
            if (!this._formSchema[schemaKey]) {
                return {};
            }
            return this._formSchema[schemaKey];
        }
        catch (error) {
            console.log(error);
        }
    };
    SchemaService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaService.ctorParameters = function () { return [
        { type: DefaultsService }
    ]; };
    return SchemaService;
}());
export { SchemaService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SchemaService.prototype._formSchema;
    /**
     * @type {?}
     * @protected
     */
    SchemaService.prototype._formOriginalSchema;
    /**
     * @type {?}
     * @protected
     */
    SchemaService.prototype._defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY2hlbWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQ7SUFNSSx1QkFBc0IsU0FBMEI7UUFBMUIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFTSxrQ0FBVTs7O0lBQWpCO1FBQ0ksSUFBSTtZQUNBLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7U0FDakM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7Ozs7SUFFTSxpQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsU0FBaUIsRUFBRSxNQUFXO1FBQzNDLElBQUk7WUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQzVDO1lBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRTNELE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FB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Z0JBN0dKLFVBQVU7Ozs7Z0JBSEYsZUFBZTs7SUFrSHhCLG9CQUFDO0NBQUEsQUEvR0QsSUErR0M7U0E5R1ksYUFBYTs7Ozs7O0lBRXRCLG9DQUEyQjs7Ozs7SUFDM0IsNENBQW1DOzs7OztJQUV2QixrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9kZWZhdWx0cy5zZXJ2aWNlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY2hlbWFTZXJ2aWNlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2Zvcm1TY2hlbWE6IGFueTtcclxuICAgIHByb3RlY3RlZCBfZm9ybU9yaWdpbmFsU2NoZW1hOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9kZWZhdWx0czogRGVmYXVsdHNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5fZm9ybVNjaGVtYSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JtT3JpZ2luYWxTY2hlbWEgPSB7fTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTY2hlbWEoc2NoZW1hS2V5OiBzdHJpbmcsIHNjaGVtYTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9mb3JtT3JpZ2luYWxTY2hlbWFbc2NoZW1hS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9ybU9yaWdpbmFsU2NoZW1hW3NjaGVtYUtleV0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9mb3JtT3JpZ2luYWxTY2hlbWFbc2NoZW1hS2V5XSA9IF8uYXNzaWduKHt9LCBzY2hlbWEpO1xyXG5cclxuICAgICAgICAgICAgc2NoZW1hID0gdGhpcy5fbW9kaWZ5RGVmKHNjaGVtYSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZm9ybVNjaGVtYVtzY2hlbWFLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JtU2NoZW1hW3NjaGVtYUtleV0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9mb3JtU2NoZW1hW3NjaGVtYUtleV0gPSBzY2hlbWE7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9tb2RpZnlEZWYoc2NoZW1hOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICBzY2hlbWEuY29sdW1ucyA9IHRoaXMuX2RlZmF1bHRzLkZPUk1fQ09MVU1OUztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5maWVsZHNEZWZhdWx0UHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHNjaGVtYS5maWVsZHNEZWZhdWx0UHJvcHMgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICBzY2hlbWEuY29sdW1ucyA9IHRoaXMuX2RlZmF1bHRzLkNPTFVNTlM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdHMuQ09MVU1OUyA9IHNjaGVtYS5jb2x1bW5zO1xyXG4gICAgICAgICAgICBzY2hlbWEuZmllbGRzRGVmYXVsdFByb3BzLmNvbHVtbnMgPSBzY2hlbWEuY29sdW1ucztcclxuICAgICAgICAgICAgc2NoZW1hLmZpZWxkc0RlZmF1bHRQcm9wcy5kaXNhYmxlZCA9IHNjaGVtYS5kaXNhYmxlZDtcclxuICAgICAgICAgICAgc2NoZW1hLmZpZWxkc0RlZmF1bHRQcm9wcy5mb3JtQ29kZSA9IHNjaGVtYS5jb2RlO1xyXG4gICAgICAgICAgICBzY2hlbWEuZmllbGRzRGVmYXVsdFByb3BzLmZvcm1PcmRlciA9IHNjaGVtYS5vcmRlciB8fCAxO1xyXG4gICAgICAgICAgICBzY2hlbWEuZmllbGRzID0gdGhpcy5fYWRkRmllbGRzRGVmYXVsdFByb3BzKHNjaGVtYS5maWVsZHMsIHNjaGVtYS5maWVsZHNEZWZhdWx0UHJvcHMpO1xyXG4gICAgICAgICAgICBzY2hlbWEuYnV0dG9ucyA9IHRoaXMuX2FkZEZpZWxkc0RlZmF1bHRQcm9wcyhzY2hlbWEuYnV0dG9ucywgc2NoZW1hLmZpZWxkc0RlZmF1bHRQcm9wcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzY2hlbWE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfYWRkRmllbGRzRGVmYXVsdFByb3BzKGZpZWxkc0FycjogYW55W10sIGZpZWxkRGVmYXVsdFByb3BzOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIWZpZWxkc0Fycikge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzQXJyID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmllbGRzQXJyLmZvckVhY2goKGRlZiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWYudHlwZSA9PT0gJ0ZTVCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWYuZmllbGRzID0gdGhpcy5fYWRkRmllbGRzRGVmYXVsdFByb3BzKGRlZi5maWVsZHMsIGZpZWxkRGVmYXVsdFByb3BzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmLmRpc2FibGVkID0gZGVmLmRpc2FibGVkIHx8IGZpZWxkRGVmYXVsdFByb3BzLmRpc2FibGVkIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkUHJvcHMgPSBfLmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdHMuRklFTERfREVGQVVMVF9QUk9QUywgZmllbGREZWZhdWx0UHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWYudHlwZSBpbiB0aGlzLl9kZWZhdWx0cy5FWENFUFRJT05BTF9TVFlMRURfRklFTERTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZi5mb3JtQ29sdW1ucyA9IGZpZWxkUHJvcHMuY29sdW1ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmID0gXy5hc3NpZ24oZGVmLCB0aGlzLl9kZWZhdWx0cy5FWENFUFRJT05BTF9TVFlMRURfRklFTERTW2RlZi50eXBlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZiA9IF8uYXNzaWduKHt9LCBmaWVsZFByb3BzLCBkZWYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmllbGRzQXJyW2luZGV4XSA9IGRlZjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZHNBcnI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY2hlbWFGaWVsZHMoc2NoZW1hS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Zvcm1TY2hlbWFbc2NoZW1hS2V5XSB8fCAhdGhpcy5fZm9ybVNjaGVtYVtzY2hlbWFLZXldLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtU2NoZW1hW3NjaGVtYUtleV0uZmllbGRzO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NoZW1hQnlTY2hlbWFLZXkoc2NoZW1hS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Zvcm1TY2hlbWFbc2NoZW1hS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtU2NoZW1hW3NjaGVtYUtleV07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=