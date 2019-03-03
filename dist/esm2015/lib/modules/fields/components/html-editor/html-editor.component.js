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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL2h0bWwtZWRpdG9yL2h0bWwtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFTbEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLEtBQUs7SUFMOUM7O1FBUVMsd0JBQW1CLEdBQUc7WUFDN0IsT0FBTyxFQUFFO2dCQUNSLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDO2dCQUN6QyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7Z0JBRTVCLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xDLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzdDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzVDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBRXhCLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUMvQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxD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Q0FBMkM7O2FBRTVDOzs7Ozs7O0lBR0EseURBQTBDOzs7OztJQUMxQyxrREFzQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vLi4vZmllbGQuY2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFF1aWxsIGZyb20gJ3F1aWxsJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodG1sLWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9odG1sLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2h0bWwtZWRpdG9yLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIdG1sRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRmllbGQge1xuXG5cdHByb3RlY3RlZCBfZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZzogYW55O1xuXHRwcml2YXRlIF9kZWZhdWx0UXVpbGxDb25maWcgPSB7XG5cdFx0dG9vbGJhcjogW1xuXHRcdFx0Wydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcblx0XHRcdFsnYmxvY2txdW90ZScsICdjb2RlLWJsb2NrJ10sXG5cblx0XHRcdFt7ICdoZWFkZXInOiAxIH0sIHsgJ2hlYWRlcic6IDIgfV0sICAgICAgICAgICAgICAgLy8gY3VzdG9tIGJ1dHRvbiB2YWx1ZXNcblx0XHRcdFt7ICdsaXN0JzogJ29yZGVyZWQnIH0sIHsgJ2xpc3QnOiAnYnVsbGV0JyB9XSxcblx0XHRcdFt7ICdzY3JpcHQnOiAnc3ViJyB9LCB7ICdzY3JpcHQnOiAnc3VwZXInIH1dLCAgICAgIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxuXHRcdFx0W3sgJ2luZGVudCc6ICctMScgfSwgeyAnaW5kZW50JzogJysxJyB9XSwgICAgICAgICAgLy8gb3V0ZGVudC9pbmRlbnRcblx0XHRcdFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dCBkaXJlY3Rpb25cblxuXHRcdFx0W3sgJ3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ10gfV0sICAvLyBjdXN0b20gZHJvcGRvd25cblx0XHRcdFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxuXG5cdFx0XHRbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuXHRcdFx0W3sgJ2ZvbnQnOiBbXSB9XSxcblx0XHRcdFt7ICdhbGlnbic6IFtdIH1dLFxuXG5cdFx0XHRbJ2NsZWFuJ10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cblxuXHRcdFx0WydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10gICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGluayBhbmQgaW1hZ2UsIHZpZGVvXG5cdFx0XVxuXHR9O1xuXG5cblx0cHJvdGVjdGVkIF9hcHBseUV2ZW50cygpIHtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZyA9IHt9O1xuXHRcdFx0aWYgKHRoaXMuZmllbGREZWYuZXZlbnRzICYmIHRoaXMuZmllbGREZWYuZXZlbnRzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuXHRcdFx0XHR0aGlzLmZpZWxkRGVmLmV2ZW50cy5mb3JFYWNoKGV2ZW50RGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgZXZlbnROYW1lID0gZXZlbnREYXRhLm5hbWU7XG5cdFx0XHRcdFx0Y29uc3QgY2FsbGJhY2tzQXJyID0gZXZlbnREYXRhLmNhbGxiYWNrcztcblx0XHRcdFx0XHR0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0gPSBbXTtcblx0XHRcdFx0XHRjYWxsYmFja3NBcnIuZm9yRWFjaChjYWxiYWNrRGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBjYWxsYmFja0ZuID0gdGhpcy5fZ2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWUsIGNhbGJhY2tEYXRhKTtcblx0XHRcdFx0XHRcdGlmIChjYWxsYmFja0ZuKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2tGbik7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGNhbGxFdmVudENhbGxiYWNrcyhldmVudE5hbWU6IHN0cmluZywgZXZlbnREYXRhPzogYW55KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICh0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nICYmIHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXSAmJiB0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50RGF0YSkge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soZXZlbnREYXRhKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IG9wdGlvbnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGREZWYub3B0aW9ucztcblx0fVxuXG5cdGdldCBtdWx0aXBsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlID09PSAnTVNMJztcblx0fVxuXG5cdGdldCBxdWlsbENvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZERlZi5xdWlsbENvbmZpZyB8fCB0aGlzLl9kZWZhdWx0UXVpbGxDb25maWc7XG5cdH1cbn1cbiJdfQ==