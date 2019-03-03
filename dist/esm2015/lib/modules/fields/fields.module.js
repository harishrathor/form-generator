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
export class FieldsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvZmllbGRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBSXhDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFrRTVELE1BQU0sT0FBTyxZQUFZOzs7WUFqRXhCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsYUFBYTtvQkFDYixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtvQkFDNUIsY0FBYztvQkFDZCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLFdBQVc7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxhQUFhO29CQUNiLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixxQkFBcUI7aUJBQ3hCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxnQkFBZ0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBQztnQkFFTixvQkFBb0I7Z0JBQ3BCLHlCQUF5QjtpQkFDMUI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcclxuaW1wb3J0IHsgUXVpbGxNb2R1bGUgfSBmcm9tICduZ3gtcXVpbGwnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWxpZGF0b3Iuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXJyb3JzL2Vycm9ycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGUvZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbnVtYmVyL251bWJlci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgQ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jLXNlbGVjdC9jLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aXNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0QXJlYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LWFyZWEvdGV4dC1hcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYy1idXR0b24vYy1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVRpbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZS10aW1lL2RhdGUtdGltZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWUvdGltZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb250aENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb250aC9tb250aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpbGUvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIaWRkZW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGlkZGVuL2hpZGRlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbGFua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ibGFuay9ibGFuay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdG1sRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2h0bWwtZWRpdG9yL2h0bWwtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFuY2hvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbmNob3IvYW5jaG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENGaWVsZHNldENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jLWZpZWxkc2V0L2MtZmllbGRzZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdGltZXBpY2tlcic7XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBUZXh0Q29tcG9uZW50LFxyXG4gICAgICAgIEVycm9yc0NvbXBvbmVudCxcclxuICAgICAgICBEYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgIE51bWJlckNvbXBvbmVudCxcclxuICAgICAgICBDU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIE11bHRpc2VsZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIFJhZGlvQ29tcG9uZW50LFxyXG4gICAgICAgIENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgICAgIFRleHRBcmVhQ29tcG9uZW50LFxyXG4gICAgICAgIENCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgVGltZUNvbXBvbmVudCxcclxuICAgICAgICBNb250aENvbXBvbmVudCxcclxuICAgICAgICBGaWxlQ29tcG9uZW50LFxyXG4gICAgICAgIEhpZGRlbkNvbXBvbmVudCxcclxuICAgICAgICBCbGFua0NvbXBvbmVudCxcclxuICAgICAgICBIdG1sRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIEFuY2hvckNvbXBvbmVudCxcclxuICAgICAgICBDRmllbGRzZXRDb21wb25lbnQsXHJcbiAgICAgICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgTmdTZWxlY3RNb2R1bGUgLFxyXG4gICAgICAgIFRpbWVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIFF1aWxsTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFRleHRDb21wb25lbnQsXHJcbiAgICAgICAgRXJyb3JzQ29tcG9uZW50LFxyXG4gICAgICAgIERhdGVDb21wb25lbnQsXHJcbiAgICAgICAgUGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgICAgIENTZWxlY3RDb21wb25lbnQsXHJcbiAgICAgICAgTXVsdGlzZWxlY3RDb21wb25lbnQsXHJcbiAgICAgICAgUmFkaW9Db21wb25lbnQsXHJcbiAgICAgICAgQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICAgICAgVGV4dEFyZWFDb21wb25lbnQsXHJcbiAgICAgICAgQ0J1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgICAgICBUaW1lQ29tcG9uZW50LFxyXG4gICAgICAgIE1vbnRoQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbGVDb21wb25lbnQsXHJcbiAgICAgICAgSGlkZGVuQ29tcG9uZW50LFxyXG4gICAgICAgIEJsYW5rQ29tcG9uZW50LFxyXG4gICAgICAgIEh0bWxFZGl0b3JDb21wb25lbnQsXHJcbiAgICAgICAgQW5jaG9yQ29tcG9uZW50LFxyXG4gICAgICAgIENGaWVsZHNldENvbXBvbmVudCxcclxuICAgICAgICBBdXRvY29tcGxldGVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBWYWxpZGF0b3JTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczpbXHJcbiAgICAgICAgXHJcbiAgICAgIC8vIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgICAgIC8vIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkc01vZHVsZSB7fSJdfQ==