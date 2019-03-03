/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { DefaultsService } from './defaults.service';
export class SchemaService {
    /**
     * @param {?} _defaults
     */
    constructor(_defaults) {
        this._defaults = _defaults;
        this.initialize();
    }
    /**
     * @return {?}
     */
    initialize() {
        try {
            this._formSchema = {};
            this._formOriginalSchema = {};
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} schemaKey
     * @param {?} schema
     * @return {?}
     */
    addSchema(schemaKey, schema) {
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
    }
    /**
     * @protected
     * @param {?} schema
     * @return {?}
     */
    _modifyDef(schema) {
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
    }
    /**
     * @protected
     * @param {?} fieldsArr
     * @param {?} fieldDefaultProps
     * @return {?}
     */
    _addFieldsDefaultProps(fieldsArr, fieldDefaultProps) {
        try {
            if (!fieldsArr) {
                fieldsArr = [];
            }
            fieldsArr.forEach((/**
             * @param {?} def
             * @param {?} index
             * @return {?}
             */
            (def, index) => {
                if (def.type === 'FST') {
                    def.fields = this._addFieldsDefaultProps(def.fields, fieldDefaultProps);
                }
                else {
                    def.disabled = def.disabled || fieldDefaultProps.disabled || false;
                    /** @type {?} */
                    const fieldProps = _.assign({}, this._defaults.FIELD_DEFAULT_PROPS, fieldDefaultProps);
                    if (def.type in this._defaults.EXCEPTIONAL_STYLED_FIELDS) {
                        def.formColumns = fieldProps.columns;
                        def = _.assign(def, this._defaults.EXCEPTIONAL_STYLED_FIELDS[def.type]);
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
    }
    /**
     * @param {?} schemaKey
     * @return {?}
     */
    getSchemaFields(schemaKey) {
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
    }
    /**
     * @param {?} schemaKey
     * @return {?}
     */
    getSchemaBySchemaKey(schemaKey) {
        try {
            if (!this._formSchema[schemaKey]) {
                return {};
            }
            return this._formSchema[schemaKey];
        }
        catch (error) {
            console.log(error);
        }
    }
}
SchemaService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaService.ctorParameters = () => [
    { type: DefaultsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NjaGVtYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlyRCxNQUFNLE9BQU8sYUFBYTs7OztJQUt0QixZQUFzQixTQUEwQjtRQUExQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLFVBQVU7UUFDYixJQUFJO1lBQ0EsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztTQUNqQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7OztJQUVNLFNBQVMsQ0FBQyxTQUFpQixFQUFFLE1BQVc7UUFDM0MsSUFBSTtZQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFM0QsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxD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OztJQUMzQiw0Q0FBbUM7Ozs7O0lBRXZCLGtDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuL2RlZmF1bHRzLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjaGVtYVNlcnZpY2Uge1xyXG5cclxuICAgIHByb3RlY3RlZCBfZm9ybVNjaGVtYTogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9mb3JtT3JpZ2luYWxTY2hlbWE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2RlZmF1bHRzOiBEZWZhdWx0c1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JtU2NoZW1hID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1PcmlnaW5hbFNjaGVtYSA9IHt9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNjaGVtYShzY2hlbWFLZXk6IHN0cmluZywgc2NoZW1hOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Zvcm1PcmlnaW5hbFNjaGVtYVtzY2hlbWFLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JtT3JpZ2luYWxTY2hlbWFbc2NoZW1hS2V5XSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1PcmlnaW5hbFNjaGVtYVtzY2hlbWFLZXldID0gXy5hc3NpZ24oe30sIHNjaGVtYSk7XHJcblxyXG4gICAgICAgICAgICBzY2hlbWEgPSB0aGlzLl9tb2RpZnlEZWYoc2NoZW1hKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9mb3JtU2NoZW1hW3NjaGVtYUtleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1TY2hlbWFbc2NoZW1hS2V5XSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1TY2hlbWFbc2NoZW1hS2V5XSA9IHNjaGVtYTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX21vZGlmeURlZihzY2hlbWE6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghc2NoZW1hLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIHNjaGVtYS5jb2x1bW5zID0gdGhpcy5fZGVmYXVsdHMuRk9STV9DT0xVTU5TO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2NoZW1hLmZpZWxkc0RlZmF1bHRQcm9wcykge1xyXG4gICAgICAgICAgICAgICAgc2NoZW1hLmZpZWxkc0RlZmF1bHRQcm9wcyA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2NoZW1hLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIHNjaGVtYS5jb2x1bW5zID0gdGhpcy5fZGVmYXVsdHMuQ09MVU1OUztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0cy5DT0xVTU5TID0gc2NoZW1hLmNvbHVtbnM7XHJcbiAgICAgICAgICAgIHNjaGVtYS5maWVsZHNEZWZhdWx0UHJvcHMuY29sdW1ucyA9IHNjaGVtYS5jb2x1bW5zO1xyXG4gICAgICAgICAgICBzY2hlbWEuZmllbGRzRGVmYXVsdFByb3BzLmRpc2FibGVkID0gc2NoZW1hLmRpc2FibGVkO1xyXG4gICAgICAgICAgICBzY2hlbWEuZmllbGRzRGVmYXVsdFByb3BzLmZvcm1Db2RlID0gc2NoZW1hLmNvZGU7XHJcbiAgICAgICAgICAgIHNjaGVtYS5maWVsZHNEZWZhdWx0UHJvcHMuZm9ybU9yZGVyID0gc2NoZW1hLm9yZGVyIHx8IDE7XHJcbiAgICAgICAgICAgIHNjaGVtYS5maWVsZHMgPSB0aGlzLl9hZGRGaWVsZHNEZWZhdWx0UHJvcHMoc2NoZW1hLmZpZWxkcywgc2NoZW1hLmZpZWxkc0RlZmF1bHRQcm9wcyk7XHJcbiAgICAgICAgICAgIHNjaGVtYS5idXR0b25zID0gdGhpcy5fYWRkRmllbGRzRGVmYXVsdFByb3BzKHNjaGVtYS5idXR0b25zLCBzY2hlbWEuZmllbGRzRGVmYXVsdFByb3BzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNjaGVtYTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9hZGRGaWVsZHNEZWZhdWx0UHJvcHMoZmllbGRzQXJyOiBhbnlbXSwgZmllbGREZWZhdWx0UHJvcHM6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghZmllbGRzQXJyKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNBcnIgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWVsZHNBcnIuZm9yRWFjaCgoZGVmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZi50eXBlID09PSAnRlNUJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZi5maWVsZHMgPSB0aGlzLl9hZGRGaWVsZHNEZWZhdWx0UHJvcHMoZGVmLmZpZWxkcywgZmllbGREZWZhdWx0UHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWYuZGlzYWJsZWQgPSBkZWYuZGlzYWJsZWQgfHwgZmllbGREZWZhdWx0UHJvcHMuZGlzYWJsZWQgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRQcm9wcyA9IF8uYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0cy5GSUVMRF9ERUZBVUxUX1BST1BTLCBmaWVsZERlZmF1bHRQcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZi50eXBlIGluIHRoaXMuX2RlZmF1bHRzLkVYQ0VQVElPTkFMX1NUWUxFRF9GSUVMRFMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmLmZvcm1Db2x1bW5zID0gZmllbGRQcm9wcy5jb2x1bW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWYgPSBfLmFzc2lnbihkZWYsIHRoaXMuX2RlZmF1bHRzLkVYQ0VQVElPTkFMX1NUWUxFRF9GSUVMRFNbZGVmLnR5cGVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmID0gXy5hc3NpZ24oe30sIGZpZWxkUHJvcHMsIGRlZik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNBcnJbaW5kZXhdID0gZGVmO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkc0FycjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjaGVtYUZpZWxkcyhzY2hlbWFLZXk6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZm9ybVNjaGVtYVtzY2hlbWFLZXldIHx8ICF0aGlzLl9mb3JtU2NoZW1hW3NjaGVtYUtleV0uZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1TY2hlbWFbc2NoZW1hS2V5XS5maWVsZHM7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY2hlbWFCeVNjaGVtYUtleShzY2hlbWFLZXk6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZm9ybVNjaGVtYVtzY2hlbWFLZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1TY2hlbWFbc2NoZW1hS2V5XTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==