/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpService } from './services/http.service';
import { LoggerService } from './services/logger.service';
import { DefaultsService } from './services/defaults.service';
import { UtilService } from './services/util.service';
import { SchemaService } from './services/schema.service';
import { FieldsModule } from './modules/fields/fields.module';
import { FieldDirective } from './directives/field.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
export class SimpleFormGeneratorModule {
}
SimpleFormGeneratorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SimpleFormComponent,
                    FieldDirective
                ],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FieldsModule
                ],
                exports: [
                    SimpleFormComponent
                ],
                providers: [
                    SchemaService,
                    UtilService,
                    DefaultsService,
                    LoggerService,
                    HttpService
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZvcm0tZ2VuZXJhdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL3NpbXBsZS1mb3JtLWdlbmVyYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUEyQnhELE1BQU0sT0FBTyx5QkFBeUI7OztZQXZCckMsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixtQkFBbUI7b0JBQ25CLGNBQWM7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsV0FBVztpQkFDZDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFNjaGVtYVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NjaGVtYS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEZpZWxkc01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9maWVsZHMvZmllbGRzLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9maWVsZC5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2ltcGxlRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaW1wbGUtZm9ybS9zaW1wbGUtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFNpbXBsZUZvcm1Db21wb25lbnQsXHJcbiAgICAgICAgRmllbGREaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBGaWVsZHNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgU2ltcGxlRm9ybUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFNjaGVtYVNlcnZpY2UsXHJcbiAgICAgICAgVXRpbFNlcnZpY2UsXHJcbiAgICAgICAgRGVmYXVsdHNTZXJ2aWNlLFxyXG4gICAgICAgIExvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgSHR0cFNlcnZpY2VcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVGb3JtR2VuZXJhdG9yTW9kdWxlIHt9Il19