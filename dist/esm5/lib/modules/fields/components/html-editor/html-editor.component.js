/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from './../field.class';
import { Component } from '@angular/core';
var HtmlEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HtmlEditorComponent, _super);
    function HtmlEditorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._defaultQuillConfig = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
                ['link', 'image', 'video'] // link and image, video
            ]
        };
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    HtmlEditorComponent.prototype._applyEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                function (eventData) {
                    /** @type {?} */
                    var eventName = eventData.name;
                    /** @type {?} */
                    var callbacksArr = eventData.callbacks;
                    _this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    function (calbackData) {
                        /** @type {?} */
                        var callbackFn = _this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                _this._eventsAndCallbacksMapping[eventName].push(callbackFn);
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                    }));
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    HtmlEditorComponent.prototype.callEventCallbacks = /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    function (eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping && this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                function (callback) {
                    if (eventData) {
                        callback(eventData);
                    }
                    else {
                        callback();
                    }
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    Object.defineProperty(HtmlEditorComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlEditorComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === 'MSL';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlEditorComponent.prototype, "quillConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.quillConfig || this._defaultQuillConfig;
        },
        enumerable: true,
        configurable: true
    });
    HtmlEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'html-editor',
                    template: "<!-- <script src=\"/quill-editor-files/quill.core.js\"></script>\n<script src=\"/quill-editor-files/quill.js\"></script> -->\n<!-- <script src=\"/quill-editor-files/quill.min.js\"></script> -->\n\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\"  [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <quill-editor #editor [formControlName]=\"name\" placeholder=\"{{placeholder}}\" [modules]=\"quillConfig\" (onEditorCreated)=\"callEventCallbacks('onEditorCreated', $event)\" (onContentChanged)=\"callEventCallbacks('onContentChanged', $event)\" (onSelectionChanged)=\"callEventCallbacks('onSelectionChanged', $event)\">\n    </quill-editor>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return HtmlEditorComponent;
}(Field));
export { HtmlEditorComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HtmlEditorComponent.prototype._eventsAndCallbacksMapping;
    /**
     * @type {?}
     * @private
     */
    HtmlEditorComponent.prototype._defaultQuillConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL2h0bWwtZWRpdG9yL2h0bWwtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSWxEO0lBS3lDLCtDQUFLO0lBTDlDO1FBQUEscUVBcUZDO1FBN0VRLHlCQUFtQixHQUFHO1lBQzdCLE9BQU8sRUFBRTtnQkFDUixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQztnQkFDekMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUU1QixDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUM3QyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUM1QyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN4QyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUV4QixDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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QUFDOzs7T0FBQTs7Z0JBcEZELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsb3BDQUEyQzs7aUJBRTVDOztJQWlGRCwwQkFBQztDQUFBLEFBckZELENBS3lDLEtBQUssR0FnRjdDO1NBaEZZLG1CQUFtQjs7Ozs7O0lBRS9CLHlEQUEwQzs7Ozs7SUFDMUMsa0RBc0JFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBRdWlsbCBmcm9tICdxdWlsbCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHRtbC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vaHRtbC1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9odG1sLWVkaXRvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSHRtbEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEZpZWxkIHtcblxuXHRwcm90ZWN0ZWQgX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmc6IGFueTtcblx0cHJpdmF0ZSBfZGVmYXVsdFF1aWxsQ29uZmlnID0ge1xuXHRcdHRvb2xiYXI6IFtcblx0XHRcdFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLCAgICAgICAgLy8gdG9nZ2xlZCBidXR0b25zXG5cdFx0XHRbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxuXG5cdFx0XHRbeyAnaGVhZGVyJzogMSB9LCB7ICdoZWFkZXInOiAyIH1dLCAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXG5cdFx0XHRbeyAnbGlzdCc6ICdvcmRlcmVkJyB9LCB7ICdsaXN0JzogJ2J1bGxldCcgfV0sXG5cdFx0XHRbeyAnc2NyaXB0JzogJ3N1YicgfSwgeyAnc2NyaXB0JzogJ3N1cGVyJyB9XSwgICAgICAvLyBzdXBlcnNjcmlwdC9zdWJzY3JpcHRcblx0XHRcdFt7ICdpbmRlbnQnOiAnLTEnIH0sIHsgJ2luZGVudCc6ICcrMScgfV0sICAgICAgICAgIC8vIG91dGRlbnQvaW5kZW50XG5cdFx0XHRbeyAnZGlyZWN0aW9uJzogJ3J0bCcgfV0sICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHQgZGlyZWN0aW9uXG5cblx0XHRcdFt7ICdzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddIH1dLCAgLy8gY3VzdG9tIGRyb3Bkb3duXG5cdFx0XHRbeyAnaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXSB9XSxcblxuXHRcdFx0W3sgJ2NvbG9yJzogW10gfSwgeyAnYmFja2dyb3VuZCc6IFtdIH1dLCAgICAgICAgICAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcblx0XHRcdFt7ICdmb250JzogW10gfV0sXG5cdFx0XHRbeyAnYWxpZ24nOiBbXSB9XSxcblxuXHRcdFx0WydjbGVhbiddLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZvcm1hdHRpbmcgYnV0dG9uXG5cblx0XHRcdFsnbGluaycsICdpbWFnZScsICd2aWRlbyddICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpbmsgYW5kIGltYWdlLCB2aWRlb1xuXHRcdF1cblx0fTtcblxuXG5cdHByb3RlY3RlZCBfYXBwbHlFdmVudHMoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmcgPSB7fTtcblx0XHRcdGlmICh0aGlzLmZpZWxkRGVmLmV2ZW50cyAmJiB0aGlzLmZpZWxkRGVmLmV2ZW50cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdFx0dGhpcy5maWVsZERlZi5ldmVudHMuZm9yRWFjaChldmVudERhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50RGF0YS5uYW1lO1xuXHRcdFx0XHRcdGNvbnN0IGNhbGxiYWNrc0FyciA9IGV2ZW50RGF0YS5jYWxsYmFja3M7XG5cdFx0XHRcdFx0dGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdID0gW107XG5cdFx0XHRcdFx0Y2FsbGJhY2tzQXJyLmZvckVhY2goY2FsYmFja0RhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgY2FsbGJhY2tGbiA9IHRoaXMuX2dldEV2ZW50Q2FsbGJhY2soZXZlbnROYW1lLCBjYWxiYWNrRGF0YSk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tGbikge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrRm4pO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjYWxsRXZlbnRDYWxsYmFja3MoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50RGF0YT86IGFueSkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZyAmJiB0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0gJiYgdGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuXHRcdFx0XHRcdGlmIChldmVudERhdGEpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGV2ZW50RGF0YSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBvcHRpb25zKCkge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkRGVmLm9wdGlvbnM7XG5cdH1cblxuXHRnZXQgbXVsdGlwbGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZSA9PT0gJ01TTCc7XG5cdH1cblxuXHRnZXQgcXVpbGxDb25maWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGREZWYucXVpbGxDb25maWcgfHwgdGhpcy5fZGVmYXVsdFF1aWxsQ29uZmlnO1xuXHR9XG59XG4iXX0=