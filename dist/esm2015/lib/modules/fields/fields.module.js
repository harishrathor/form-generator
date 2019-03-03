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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2ZpZWxkcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUl4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSXpGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBa0U1RCxNQUFNLE9BQU8sWUFBWTs7O1lBakV4QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxhQUFhO29CQUNiLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixxQkFBcUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLGNBQWM7b0JBQ2QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixXQUFXO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIscUJBQXFCO2lCQUN4QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsZ0JBQWdCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUM7Z0JBRU4sb0JBQW9CO2dCQUNwQix5QkFBeUI7aUJBQzFCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XHJcbmltcG9ydCB7IFF1aWxsTW9kdWxlIH0gZnJvbSAnbmd4LXF1aWxsJztcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdmFsaWRhdG9yLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Vycm9ycy9lcnJvcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL251bWJlci9udW1iZXIuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IENTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYy1zZWxlY3QvYy1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXVsdGlzZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGV4dEFyZWFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC1hcmVhL3RleHQtYXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2MtYnV0dG9uL2MtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGUtdGltZS9kYXRlLXRpbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90aW1lL3RpbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9udGhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWxlL2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGlkZGVuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hpZGRlbi9oaWRkZW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmxhbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYmxhbmsvYmxhbmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHRtbEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9odG1sLWVkaXRvci9odG1sLWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbmNob3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYW5jaG9yL2FuY2hvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDRmllbGRzZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYy1maWVsZHNldC9jLWZpZWxkc2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXInO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVGV4dENvbXBvbmVudCxcclxuICAgICAgICBFcnJvcnNDb21wb25lbnQsXHJcbiAgICAgICAgRGF0ZUNvbXBvbmVudCxcclxuICAgICAgICBQYXNzd29yZENvbXBvbmVudCxcclxuICAgICAgICBOdW1iZXJDb21wb25lbnQsXHJcbiAgICAgICAgQ1NlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBNdWx0aXNlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBSYWRpb0NvbXBvbmVudCxcclxuICAgICAgICBDaGVja2JveENvbXBvbmVudCxcclxuICAgICAgICBUZXh0QXJlYUNvbXBvbmVudCxcclxuICAgICAgICBDQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICAgIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgICAgIFRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgTW9udGhDb21wb25lbnQsXHJcbiAgICAgICAgRmlsZUNvbXBvbmVudCxcclxuICAgICAgICBIaWRkZW5Db21wb25lbnQsXHJcbiAgICAgICAgQmxhbmtDb21wb25lbnQsXHJcbiAgICAgICAgSHRtbEVkaXRvckNvbXBvbmVudCxcclxuICAgICAgICBBbmNob3JDb21wb25lbnQsXHJcbiAgICAgICAgQ0ZpZWxkc2V0Q29tcG9uZW50LFxyXG4gICAgICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBCc0RhdGVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIE5nU2VsZWN0TW9kdWxlICxcclxuICAgICAgICBUaW1lcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBRdWlsbE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBUZXh0Q29tcG9uZW50LFxyXG4gICAgICAgIEVycm9yc0NvbXBvbmVudCxcclxuICAgICAgICBEYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgIE51bWJlckNvbXBvbmVudCxcclxuICAgICAgICBDU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIE11bHRpc2VsZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIFJhZGlvQ29tcG9uZW50LFxyXG4gICAgICAgIENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgICAgIFRleHRBcmVhQ29tcG9uZW50LFxyXG4gICAgICAgIENCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgVGltZUNvbXBvbmVudCxcclxuICAgICAgICBNb250aENvbXBvbmVudCxcclxuICAgICAgICBGaWxlQ29tcG9uZW50LFxyXG4gICAgICAgIEhpZGRlbkNvbXBvbmVudCxcclxuICAgICAgICBCbGFua0NvbXBvbmVudCxcclxuICAgICAgICBIdG1sRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIEFuY2hvckNvbXBvbmVudCxcclxuICAgICAgICBDRmllbGRzZXRDb21wb25lbnQsXHJcbiAgICAgICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgVmFsaWRhdG9yU2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6W1xyXG4gICAgICAgIFxyXG4gICAgICAvLyBOT19FUlJPUlNfU0NIRU1BLFxyXG4gICAgICAvLyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZHNNb2R1bGUge30iXX0=