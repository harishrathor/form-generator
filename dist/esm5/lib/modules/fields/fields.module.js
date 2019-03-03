/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';
import { ValidatorService } from './services/validator.service';
import { TextComponent } from './components/text/text.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { DateComponent } from './components/date/date.component';
import { PasswordComponent } from './components/password/password.component';
import { NumberComponent } from './components/number/number.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CSelectComponent } from './components/c-select/c-select.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { RadioComponent } from './components/radio/radio.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { CButtonComponent } from './components/c-button/c-button.component';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { TimeComponent } from './components/time/time.component';
import { MonthComponent } from './components/month/month.component';
import { FileComponent } from './components/file/file.component';
import { HiddenComponent } from './components/hidden/hidden.component';
import { BlankComponent } from './components/blank/blank.component';
import { HtmlEditorComponent } from './components/html-editor/html-editor.component';
import { AnchorComponent } from './components/anchor/anchor.component';
import { CFieldsetComponent } from './components/c-fieldset/c-fieldset.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
var FieldsModule = /** @class */ (function () {
    function FieldsModule() {
    }
    FieldsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TextComponent,
                        ErrorsComponent,
                        DateComponent,
                        PasswordComponent,
                        NumberComponent,
                        CSelectComponent,
                        MultiselectComponent,
                        RadioComponent,
                        CheckboxComponent,
                        TextAreaComponent,
                        CButtonComponent,
                        DateTimeComponent,
                        TimeComponent,
                        MonthComponent,
                        FileComponent,
                        HiddenComponent,
                        BlankComponent,
                        HtmlEditorComponent,
                        AnchorComponent,
                        CFieldsetComponent,
                        AutocompleteComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        BsDatepickerModule.forRoot(),
                        NgSelectModule,
                        TimepickerModule.forRoot(),
                        QuillModule
                    ],
                    exports: [
                        TextComponent,
                        ErrorsComponent,
                        DateComponent,
                        PasswordComponent,
                        NumberComponent,
                        CSelectComponent,
                        MultiselectComponent,
                        RadioComponent,
                        CheckboxComponent,
                        TextAreaComponent,
                        CButtonComponent,
                        DateTimeComponent,
                        TimeComponent,
                        MonthComponent,
                        FileComponent,
                        HiddenComponent,
                        BlankComponent,
                        HtmlEditorComponent,
                        AnchorComponent,
                        CFieldsetComponent,
                        AutocompleteComponent
                    ],
                    providers: [
                        ValidatorService
                    ],
                    schemas: [
                    // NO_ERRORS_SCHEMA,
                    // CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] }
    ];
    return FieldsModule;
}());
export { FieldsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvZmllbGRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBSXhDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQ7SUFBQTtJQWlFMkIsQ0FBQzs7Z0JBakUzQixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixxQkFBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7d0JBQzVCLGNBQWM7d0JBQ2QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUMxQixXQUFXO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDTCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIscUJBQXFCO3FCQUN4QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsZ0JBQWdCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUM7b0JBRU4sb0JBQW9CO29CQUNwQix5QkFBeUI7cUJBQzFCO2lCQUNKOztJQUMwQixtQkFBQztDQUFBLEFBakU1QixJQWlFNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xyXG5pbXBvcnQgeyBRdWlsbE1vZHVsZSB9IGZyb20gJ25neC1xdWlsbCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3ZhbGlkYXRvci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVycm9yc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lcnJvcnMvZXJyb3JzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBDU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Mtc2VsZWN0L2Mtc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpc2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRleHRBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQtYXJlYS90ZXh0LWFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jLWJ1dHRvbi9jLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRlLXRpbWUvZGF0ZS10aW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZS90aW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vbnRoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vbnRoL21vbnRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsZS9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhpZGRlbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oaWRkZW4vaGlkZGVuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsYW5rQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JsYW5rL2JsYW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEh0bWxFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaHRtbC1lZGl0b3IvaHRtbC1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQW5jaG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FuY2hvci9hbmNob3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ0ZpZWxkc2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2MtZmllbGRzZXQvYy1maWVsZHNldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyJztcclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFRleHRDb21wb25lbnQsXHJcbiAgICAgICAgRXJyb3JzQ29tcG9uZW50LFxyXG4gICAgICAgIERhdGVDb21wb25lbnQsXHJcbiAgICAgICAgUGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgICAgIENTZWxlY3RDb21wb25lbnQsXHJcbiAgICAgICAgTXVsdGlzZWxlY3RDb21wb25lbnQsXHJcbiAgICAgICAgUmFkaW9Db21wb25lbnQsXHJcbiAgICAgICAgQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICAgICAgVGV4dEFyZWFDb21wb25lbnQsXHJcbiAgICAgICAgQ0J1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgICAgICBUaW1lQ29tcG9uZW50LFxyXG4gICAgICAgIE1vbnRoQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbGVDb21wb25lbnQsXHJcbiAgICAgICAgSGlkZGVuQ29tcG9uZW50LFxyXG4gICAgICAgIEJsYW5rQ29tcG9uZW50LFxyXG4gICAgICAgIEh0bWxFZGl0b3JDb21wb25lbnQsXHJcbiAgICAgICAgQW5jaG9yQ29tcG9uZW50LFxyXG4gICAgICAgIENGaWVsZHNldENvbXBvbmVudCxcclxuICAgICAgICBBdXRvY29tcGxldGVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQnNEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBOZ1NlbGVjdE1vZHVsZSAsXHJcbiAgICAgICAgVGltZXBpY2tlck1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgUXVpbGxNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgVGV4dENvbXBvbmVudCxcclxuICAgICAgICBFcnJvcnNDb21wb25lbnQsXHJcbiAgICAgICAgRGF0ZUNvbXBvbmVudCxcclxuICAgICAgICBQYXNzd29yZENvbXBvbmVudCxcclxuICAgICAgICBOdW1iZXJDb21wb25lbnQsXHJcbiAgICAgICAgQ1NlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBNdWx0aXNlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBSYWRpb0NvbXBvbmVudCxcclxuICAgICAgICBDaGVja2JveENvbXBvbmVudCxcclxuICAgICAgICBUZXh0QXJlYUNvbXBvbmVudCxcclxuICAgICAgICBDQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICAgIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgICAgIFRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgTW9udGhDb21wb25lbnQsXHJcbiAgICAgICAgRmlsZUNvbXBvbmVudCxcclxuICAgICAgICBIaWRkZW5Db21wb25lbnQsXHJcbiAgICAgICAgQmxhbmtDb21wb25lbnQsXHJcbiAgICAgICAgSHRtbEVkaXRvckNvbXBvbmVudCxcclxuICAgICAgICBBbmNob3JDb21wb25lbnQsXHJcbiAgICAgICAgQ0ZpZWxkc2V0Q29tcG9uZW50LFxyXG4gICAgICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFZhbGlkYXRvclNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOltcclxuICAgICAgICBcclxuICAgICAgLy8gTk9fRVJST1JTX1NDSEVNQSxcclxuICAgICAgLy8gQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRzTW9kdWxlIHt9Il19