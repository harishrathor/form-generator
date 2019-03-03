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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvY29tcG9uZW50cy9odG1sLWVkaXRvci9odG1sLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUlsRDtJQUt5QywrQ0FBSztJQUw5QztRQUFBLHFFQXFGQztRQTdFUSx5QkFBbUIsR0FBRztZQUM3QixPQUFPLEVBQUU7Z0JBQ1IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUM7Z0JBQ3pDLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztnQkFFNUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDN0MsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDNUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFFeEIsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFB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O09BQUE7O2dCQXBGRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLG9wQ0FBMkM7O2lCQUU1Qzs7SUFpRkQsMEJBQUM7Q0FBQSxBQXJGRCxDQUt5QyxLQUFLLEdBZ0Y3QztTQWhGWSxtQkFBbUI7Ozs7OztJQUUvQix5REFBMEM7Ozs7O0lBQzFDLGtEQXNCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9maWVsZC5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgUXVpbGwgZnJvbSAncXVpbGwnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0bWwtZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2h0bWwtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaHRtbC1lZGl0b3IuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEh0bWxFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBGaWVsZCB7XG5cblx0cHJvdGVjdGVkIF9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nOiBhbnk7XG5cdHByaXZhdGUgX2RlZmF1bHRRdWlsbENvbmZpZyA9IHtcblx0XHR0b29sYmFyOiBbXG5cdFx0XHRbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnXSwgICAgICAgIC8vIHRvZ2dsZWQgYnV0dG9uc1xuXHRcdFx0WydibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snXSxcblxuXHRcdFx0W3sgJ2hlYWRlcic6IDEgfSwgeyAnaGVhZGVyJzogMiB9XSwgICAgICAgICAgICAgICAvLyBjdXN0b20gYnV0dG9uIHZhbHVlc1xuXHRcdFx0W3sgJ2xpc3QnOiAnb3JkZXJlZCcgfSwgeyAnbGlzdCc6ICdidWxsZXQnIH1dLFxuXHRcdFx0W3sgJ3NjcmlwdCc6ICdzdWInIH0sIHsgJ3NjcmlwdCc6ICdzdXBlcicgfV0sICAgICAgLy8gc3VwZXJzY3JpcHQvc3Vic2NyaXB0XG5cdFx0XHRbeyAnaW5kZW50JzogJy0xJyB9LCB7ICdpbmRlbnQnOiAnKzEnIH1dLCAgICAgICAgICAvLyBvdXRkZW50L2luZGVudFxuXHRcdFx0W3sgJ2RpcmVjdGlvbic6ICdydGwnIH1dLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0IGRpcmVjdGlvblxuXG5cdFx0XHRbeyAnc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXSB9XSwgIC8vIGN1c3RvbSBkcm9wZG93blxuXHRcdFx0W3sgJ2hlYWRlcic6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV0gfV0sXG5cblx0XHRcdFt7ICdjb2xvcic6IFtdIH0sIHsgJ2JhY2tncm91bmQnOiBbXSB9XSwgICAgICAgICAgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXG5cdFx0XHRbeyAnZm9udCc6IFtdIH1dLFxuXHRcdFx0W3sgJ2FsaWduJzogW10gfV0sXG5cblx0XHRcdFsnY2xlYW4nXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuXG5cdFx0XHRbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsaW5rIGFuZCBpbWFnZSwgdmlkZW9cblx0XHRdXG5cdH07XG5cblxuXHRwcm90ZWN0ZWQgX2FwcGx5RXZlbnRzKCkge1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nID0ge307XG5cdFx0XHRpZiAodGhpcy5maWVsZERlZi5ldmVudHMgJiYgdGhpcy5maWVsZERlZi5ldmVudHMuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG5cdFx0XHRcdHRoaXMuZmllbGREZWYuZXZlbnRzLmZvckVhY2goZXZlbnREYXRhID0+IHtcblx0XHRcdFx0XHRjb25zdCBldmVudE5hbWUgPSBldmVudERhdGEubmFtZTtcblx0XHRcdFx0XHRjb25zdCBjYWxsYmFja3NBcnIgPSBldmVudERhdGEuY2FsbGJhY2tzO1xuXHRcdFx0XHRcdHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXSA9IFtdO1xuXHRcdFx0XHRcdGNhbGxiYWNrc0Fyci5mb3JFYWNoKGNhbGJhY2tEYXRhID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGNhbGxiYWNrRm4gPSB0aGlzLl9nZXRFdmVudENhbGxiYWNrKGV2ZW50TmFtZSwgY2FsYmFja0RhdGEpO1xuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrRm4pIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFja0ZuKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgY2FsbEV2ZW50Q2FsbGJhY2tzKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudERhdGE/OiBhbnkpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmcgJiYgdGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdICYmIHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcblx0XHRcdFx0XHRpZiAoZXZlbnREYXRhKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhldmVudERhdGEpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgb3B0aW9ucygpIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZERlZi5vcHRpb25zO1xuXHR9XG5cblx0Z2V0IG11bHRpcGxlKCkge1xuXHRcdHJldHVybiB0aGlzLnR5cGUgPT09ICdNU0wnO1xuXHR9XG5cblx0Z2V0IHF1aWxsQ29uZmlnKCkge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkRGVmLnF1aWxsQ29uZmlnIHx8IHRoaXMuX2RlZmF1bHRRdWlsbENvbmZpZztcblx0fVxufVxuIl19