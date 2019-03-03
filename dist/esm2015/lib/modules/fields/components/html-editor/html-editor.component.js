/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from './../field.class';
import { Component } from '@angular/core';
export class HtmlEditorComponent extends Field {
    constructor() {
        super(...arguments);
        this._defaultQuillConfig = {
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
    }
    /**
     * @protected
     * @return {?}
     */
    _applyEvents() {
        try {
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                eventData => {
                    /** @type {?} */
                    const eventName = eventData.name;
                    /** @type {?} */
                    const callbacksArr = eventData.callbacks;
                    this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    calbackData => {
                        /** @type {?} */
                        const callbackFn = this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                this._eventsAndCallbacksMapping[eventName].push(callbackFn);
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
    }
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    callEventCallbacks(eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping && this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                callback => {
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
    }
    /**
     * @return {?}
     */
    get options() {
        return this.fieldDef.options;
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this.type === 'MSL';
    }
    /**
     * @return {?}
     */
    get quillConfig() {
        return this.fieldDef.quillConfig || this._defaultQuillConfig;
    }
}
HtmlEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'html-editor',
                template: "<!-- <script src=\"/quill-editor-files/quill.core.js\"></script>\n<script src=\"/quill-editor-files/quill.js\"></script> -->\n<!-- <script src=\"/quill-editor-files/quill.min.js\"></script> -->\n\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\"  [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <quill-editor #editor [formControlName]=\"name\" placeholder=\"{{placeholder}}\" [modules]=\"quillConfig\" (onEditorCreated)=\"callEventCallbacks('onEditorCreated', $event)\" (onContentChanged)=\"callEventCallbacks('onContentChanged', $event)\" (onSelectionChanged)=\"callEventCallbacks('onSelectionChanged', $event)\">\n    </quill-editor>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvY29tcG9uZW50cy9odG1sLWVkaXRvci9odG1sLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBU2xELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxLQUFLO0lBTDlDOztRQVFTLHdCQUFtQixHQUFHO1lBQzdCLE9BQU8sRUFBRTtnQkFDUixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQztnQkFDekMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUU1QixDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUM3QyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUM1QyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN4QyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUV4QixDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxF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OzthQUU1Qzs7Ozs7OztJQUdBLHlEQUEwQzs7Ozs7SUFDMUMsa0RBc0JFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBRdWlsbCBmcm9tICdxdWlsbCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHRtbC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vaHRtbC1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9odG1sLWVkaXRvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSHRtbEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEZpZWxkIHtcblxuXHRwcm90ZWN0ZWQgX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmc6IGFueTtcblx0cHJpdmF0ZSBfZGVmYXVsdFF1aWxsQ29uZmlnID0ge1xuXHRcdHRvb2xiYXI6IFtcblx0XHRcdFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLCAgICAgICAgLy8gdG9nZ2xlZCBidXR0b25zXG5cdFx0XHRbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxuXG5cdFx0XHRbeyAnaGVhZGVyJzogMSB9LCB7ICdoZWFkZXInOiAyIH1dLCAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXG5cdFx0XHRbeyAnbGlzdCc6ICdvcmRlcmVkJyB9LCB7ICdsaXN0JzogJ2J1bGxldCcgfV0sXG5cdFx0XHRbeyAnc2NyaXB0JzogJ3N1YicgfSwgeyAnc2NyaXB0JzogJ3N1cGVyJyB9XSwgICAgICAvLyBzdXBlcnNjcmlwdC9zdWJzY3JpcHRcblx0XHRcdFt7ICdpbmRlbnQnOiAnLTEnIH0sIHsgJ2luZGVudCc6ICcrMScgfV0sICAgICAgICAgIC8vIG91dGRlbnQvaW5kZW50XG5cdFx0XHRbeyAnZGlyZWN0aW9uJzogJ3J0bCcgfV0sICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHQgZGlyZWN0aW9uXG5cblx0XHRcdFt7ICdzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddIH1dLCAgLy8gY3VzdG9tIGRyb3Bkb3duXG5cdFx0XHRbeyAnaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXSB9XSxcblxuXHRcdFx0W3sgJ2NvbG9yJzogW10gfSwgeyAnYmFja2dyb3VuZCc6IFtdIH1dLCAgICAgICAgICAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcblx0XHRcdFt7ICdmb250JzogW10gfV0sXG5cdFx0XHRbeyAnYWxpZ24nOiBbXSB9XSxcblxuXHRcdFx0WydjbGVhbiddLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZvcm1hdHRpbmcgYnV0dG9uXG5cblx0XHRcdFsnbGluaycsICdpbWFnZScsICd2aWRlbyddICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpbmsgYW5kIGltYWdlLCB2aWRlb1xuXHRcdF1cblx0fTtcblxuXG5cdHByb3RlY3RlZCBfYXBwbHlFdmVudHMoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmcgPSB7fTtcblx0XHRcdGlmICh0aGlzLmZpZWxkRGVmLmV2ZW50cyAmJiB0aGlzLmZpZWxkRGVmLmV2ZW50cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdFx0dGhpcy5maWVsZERlZi5ldmVudHMuZm9yRWFjaChldmVudERhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50RGF0YS5uYW1lO1xuXHRcdFx0XHRcdGNvbnN0IGNhbGxiYWNrc0FyciA9IGV2ZW50RGF0YS5jYWxsYmFja3M7XG5cdFx0XHRcdFx0dGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdID0gW107XG5cdFx0XHRcdFx0Y2FsbGJhY2tzQXJyLmZvckVhY2goY2FsYmFja0RhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgY2FsbGJhY2tGbiA9IHRoaXMuX2dldEV2ZW50Q2FsbGJhY2soZXZlbnROYW1lLCBjYWxiYWNrRGF0YSk7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tGbikge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrRm4pO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjYWxsRXZlbnRDYWxsYmFja3MoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50RGF0YT86IGFueSkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZyAmJiB0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0gJiYgdGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuXHRcdFx0XHRcdGlmIChldmVudERhdGEpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGV2ZW50RGF0YSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBvcHRpb25zKCkge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkRGVmLm9wdGlvbnM7XG5cdH1cblxuXHRnZXQgbXVsdGlwbGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZSA9PT0gJ01TTCc7XG5cdH1cblxuXHRnZXQgcXVpbGxDb25maWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGREZWYucXVpbGxDb25maWcgfHwgdGhpcy5fZGVmYXVsdFF1aWxsQ29uZmlnO1xuXHR9XG59XG4iXX0=