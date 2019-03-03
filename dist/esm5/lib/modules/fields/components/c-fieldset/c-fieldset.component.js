/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
var CFieldsetComponent = /** @class */ (function () {
    function CFieldsetComponent(_eleRef, _renderer) {
        this._eleRef = _eleRef;
        this._renderer = _renderer;
        this.isCollapsed = false;
    }
    /**
     * @return {?}
     */
    CFieldsetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        try {
            this._renderer.setStyle(this._eleRef.nativeElement, 'width', '100%');
            this._renderer.addClass(this._eleRef.nativeElement, 'm-3');
        }
        catch (error) {
            console.log(error);
        }
    };
    Object.defineProperty(CFieldsetComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "code", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "collapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.collpase || true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "collapseBodyHidden", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.collapse && this.isCollapsed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "hideLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.hideLabel || false;
        },
        enumerable: true,
        configurable: true
    });
    CFieldsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-fieldset',
                    template: "<div class=\"simple-fieldset-container fieldset-container\">\n\n  <div class=\"card \">\n<div class=\"card-header display-flex justify-space-between\" [ngClass]=\"{'hidden': hideLabel}\">\n      <div class=\"fieldset-label\">\n        {{label}}\n      </div>\n      <div class=\"fieldset-collapse\">\n        <div class=\"fieldset-collapse-icons cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\" *ngIf=\"collapse\">\n          <i class=\"material-icons\" *ngIf=\"isCollapsed\">\n            expand_more\n          </i>\n          <i class=\"material-icons\" *ngIf=\"!isCollapsed\">\n            expand_less\n          </i>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\" style=\"padding-bottom:0% !important\" [ngClass]=\"{'hidden': collapseBodyHidden}\">\n      <div class=\"fieldset-form-container fieldset-container ml-3 mr-3 mt-3\">\n        <div class=\"simple-form\" [attr.id]=\"code\">\n          <div class=\"fields-container \">\n            <ng-container class=\"field-wrapper\" *ngFor=\"let fldDef of fields\">\n              <text *ngIf=\"fldDef.type=='TXT'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></text>\n              <hidden *ngIf=\"fldDef.type=='HID'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></hidden>\n              <blank *ngIf=\"fldDef.type=='BLK'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></blank>\n              <anchor *ngIf=\"fldDef.type=='ANC'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></anchor>\n              <radio *ngIf=\"fldDef.type=='RAD'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></radio>\n              <checkbox *ngIf=\"fldDef.type=='CHK'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></checkbox>\n              <text-area *ngIf=\"fldDef.type=='TXA'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></text-area>\n              <c-select *ngIf=\"fldDef.type=='SEL'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-select>\n              <multiselect *ngIf=\"fldDef.type=='MSL'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></multiselect>\n              <c-button *ngIf=\"fldDef.type=='BTN'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-button>\n              <html-editor *ngIf=\"fldDef.type=='HTML'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></html-editor>\n              <c-fieldset *ngIf=\"fldDef.type=='FST'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-fieldset>\n              <month *ngIf=\"fldDef.type=='MONTH'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </month>\n              <date-time *ngIf=\"fldDef.type=='DATETIME'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </date-time>\n              <time *ngIf=\"fldDef.type=='TIME'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </time>\n              <number *ngIf=\"fldDef.type=='NUM'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </number>\n              <password *ngIf=\"fldDef.type=='PWD'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </password>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CFieldsetComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CFieldsetComponent.propDecorators = {
        fieldDef: [{ type: Input }],
        group: [{ type: Input }],
        formComponent: [{ type: Input }],
        pageComponent: [{ type: Input }],
        parent: [{ type: Input }]
    };
    return CFieldsetComponent;
}());
export { CFieldsetComponent };
if (false) {
    /** @type {?} */
    CFieldsetComponent.prototype.fieldDef;
    /** @type {?} */
    CFieldsetComponent.prototype.group;
    /** @type {?} */
    CFieldsetComponent.prototype.formComponent;
    /** @type {?} */
    CFieldsetComponent.prototype.pageComponent;
    /** @type {?} */
    CFieldsetComponent.prototype.parent;
    /** @type {?} */
    CFieldsetComponent.prototype.isCollapsed;
    /**
     * @type {?}
     * @protected
     */
    CFieldsetComponent.prototype._eleRef;
    /**
     * @type {?}
     * @protected
     */
    CFieldsetComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1maWVsZHNldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvYy1maWVsZHNldC9jLWZpZWxkc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBd0JJLDRCQUFzQixPQUFtQixFQUFZLFNBQW9CO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRmxFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRzNCLENBQUM7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7UUFDSSxJQUFJO1lBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELHNCQUFJLHFDQUFLOzs7O1FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQU07Ozs7UUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBSTs7OztRQUFSO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFROzs7O1FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFrQjs7OztRQUF0QjtZQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFTOzs7O1FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTs7Z0JBMURKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsd3RKQUEwQzs7aUJBRTNDOzs7O2dCQVBrQyxVQUFVO2dCQUFpQixTQUFTOzs7MkJBVWxFLEtBQUs7d0JBR0wsS0FBSztnQ0FHTCxLQUFLO2dDQUdMLEtBQUs7eUJBR0wsS0FBSzs7SUF5Q1YseUJBQUM7Q0FBQSxBQTVERCxJQTREQztTQXZEWSxrQkFBa0I7OztJQUUzQixzQ0FDYzs7SUFFZCxtQ0FDaUI7O0lBRWpCLDJDQUNtQjs7SUFFbkIsMkNBQ21COztJQUVuQixvQ0FDWTs7SUFFWix5Q0FBMkI7Ozs7O0lBRWYscUNBQTZCOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtZmllbGRzZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYy1maWVsZHNldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2MtZmllbGRzZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENGaWVsZHNldENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KClcbiAgICBmaWVsZERlZjogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBncm91cDogRm9ybUdyb3VwO1xuXG4gICAgQElucHV0KClcbiAgICBmb3JtQ29tcG9uZW50OiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIHBhZ2VDb21wb25lbnQ6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgcGFyZW50OiBhbnk7XG5cbiAgICBwdWJsaWMgaXNDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlUmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZVJlZi5uYXRpdmVFbGVtZW50LCAnbS0zJyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmxhYmVsO1xuICAgIH1cblxuICAgIGdldCBmaWVsZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmZpZWxkcztcbiAgICB9XG5cbiAgICBnZXQgY29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuY29kZTtcbiAgICB9XG5cbiAgICBnZXQgY29sbGFwc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmNvbGxwYXNlIHx8IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxhcHNlQm9keUhpZGRlbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbGxhcHNlICYmIHRoaXMuaXNDb2xsYXBzZWQpO1xuICAgIH1cblxuICAgIGdldCBoaWRlTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmhpZGVMYWJlbCB8fCBmYWxzZTtcbiAgICB9XG5cbn1cbiJdfQ==