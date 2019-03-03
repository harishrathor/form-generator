/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class CFieldsetComponent {
    /**
     * @param {?} _eleRef
     * @param {?} _renderer
     */
    constructor(_eleRef, _renderer) {
        this._eleRef = _eleRef;
        this._renderer = _renderer;
        this.isCollapsed = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        try {
            this._renderer.setStyle(this._eleRef.nativeElement, 'width', '100%');
            this._renderer.addClass(this._eleRef.nativeElement, 'm-3');
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @return {?}
     */
    get label() {
        return this.fieldDef.label;
    }
    /**
     * @return {?}
     */
    get fields() {
        return this.fieldDef.fields;
    }
    /**
     * @return {?}
     */
    get code() {
        return this.fieldDef.code;
    }
    /**
     * @return {?}
     */
    get collapse() {
        return this.fieldDef.collpase || true;
    }
    /**
     * @return {?}
     */
    get collapseBodyHidden() {
        return (this.collapse && this.isCollapsed);
    }
    /**
     * @return {?}
     */
    get hideLabel() {
        return this.fieldDef.hideLabel || false;
    }
}
CFieldsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-fieldset',
                template: "<div class=\"simple-fieldset-container fieldset-container\">\n\n  <div class=\"card \">\n<div class=\"card-header display-flex justify-space-between\" [ngClass]=\"{'hidden': hideLabel}\">\n      <div class=\"fieldset-label\">\n        {{label}}\n      </div>\n      <div class=\"fieldset-collapse\">\n        <div class=\"fieldset-collapse-icons cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\" *ngIf=\"collapse\">\n          <i class=\"material-icons\" *ngIf=\"isCollapsed\">\n            expand_more\n          </i>\n          <i class=\"material-icons\" *ngIf=\"!isCollapsed\">\n            expand_less\n          </i>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\" style=\"padding-bottom:0% !important\" [ngClass]=\"{'hidden': collapseBodyHidden}\">\n      <div class=\"fieldset-form-container fieldset-container ml-3 mr-3 mt-3\">\n        <div class=\"simple-form\" [attr.id]=\"code\">\n          <div class=\"fields-container \">\n            <ng-container class=\"field-wrapper\" *ngFor=\"let fldDef of fields\">\n              <text *ngIf=\"fldDef.type=='TXT'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></text>\n              <hidden *ngIf=\"fldDef.type=='HID'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></hidden>\n              <blank *ngIf=\"fldDef.type=='BLK'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></blank>\n              <anchor *ngIf=\"fldDef.type=='ANC'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></anchor>\n              <radio *ngIf=\"fldDef.type=='RAD'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></radio>\n              <checkbox *ngIf=\"fldDef.type=='CHK'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></checkbox>\n              <text-area *ngIf=\"fldDef.type=='TXA'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></text-area>\n              <c-select *ngIf=\"fldDef.type=='SEL'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-select>\n              <multiselect *ngIf=\"fldDef.type=='MSL'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></multiselect>\n              <c-button *ngIf=\"fldDef.type=='BTN'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-button>\n              <html-editor *ngIf=\"fldDef.type=='HTML'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></html-editor>\n              <c-fieldset *ngIf=\"fldDef.type=='FST'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-fieldset>\n              <month *ngIf=\"fldDef.type=='MONTH'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </month>\n              <date-time *ngIf=\"fldDef.type=='DATETIME'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </date-time>\n              <time *ngIf=\"fldDef.type=='TIME'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </time>\n              <number *ngIf=\"fldDef.type=='NUM'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </number>\n              <password *ngIf=\"fldDef.type=='PWD'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </password>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CFieldsetComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
CFieldsetComponent.propDecorators = {
    fieldDef: [{ type: Input }],
    group: [{ type: Input }],
    formComponent: [{ type: Input }],
    pageComponent: [{ type: Input }],
    parent: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1maWVsZHNldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvYy1maWVsZHNldC9jLWZpZWxkc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBbUIzQixZQUFzQixPQUFtQixFQUFZLFNBQW9CO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRmxFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRzNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSTtZQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5RDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsSUFBSSxrQkFBa0I7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7WUExREosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix3dEpBQTBDOzthQUUzQzs7OztZQVBrQyxVQUFVO1lBQWlCLFNBQVM7Ozt1QkFVbEUsS0FBSztvQkFHTCxLQUFLOzRCQUdMLEtBQUs7NEJBR0wsS0FBSztxQkFHTCxLQUFLOzs7O0lBWk4sc0NBQ2M7O0lBRWQsbUNBQ2lCOztJQUVqQiwyQ0FDbUI7O0lBRW5CLDJDQUNtQjs7SUFFbkIsb0NBQ1k7O0lBRVoseUNBQTJCOzs7OztJQUVmLHFDQUE2Qjs7Ozs7SUFBRSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWZpZWxkc2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2MtZmllbGRzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jLWZpZWxkc2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDRmllbGRzZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgpXG4gICAgZmllbGREZWY6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgZ3JvdXA6IEZvcm1Hcm91cDtcblxuICAgIEBJbnB1dCgpXG4gICAgZm9ybUNvbXBvbmVudDogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBwYWdlQ29tcG9uZW50OiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIHBhcmVudDogYW55O1xuXG4gICAgcHVibGljIGlzQ29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZVJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcxMDAlJyk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVSZWYubmF0aXZlRWxlbWVudCwgJ20tMycpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5sYWJlbDtcbiAgICB9XG5cbiAgICBnZXQgZmllbGRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5maWVsZHM7XG4gICAgfVxuXG4gICAgZ2V0IGNvZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmNvZGU7XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxhcHNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5jb2xscGFzZSB8fCB0cnVlO1xuICAgIH1cblxuICAgIGdldCBjb2xsYXBzZUJvZHlIaWRkZW4oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb2xsYXBzZSAmJiB0aGlzLmlzQ29sbGFwc2VkKTtcbiAgICB9XG5cbiAgICBnZXQgaGlkZUxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5oaWRlTGFiZWwgfHwgZmFsc2U7XG4gICAgfVxuXG59XG4iXX0=