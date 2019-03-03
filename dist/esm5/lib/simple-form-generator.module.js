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
var SimpleFormGeneratorModule = /** @class */ (function () {
    function SimpleFormGeneratorModule() {
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
    return SimpleFormGeneratorModule;
}());
export { SimpleFormGeneratorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZvcm0tZ2VuZXJhdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvc2ltcGxlLWZvcm0tZ2VuZXJhdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUl4RDtJQUFBO0lBdUJ3QyxDQUFDOztnQkF2QnhDLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsbUJBQW1CO3dCQUNuQixjQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixZQUFZO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDTCxtQkFBbUI7cUJBQ3RCO29CQUNELFNBQVMsRUFBRTt3QkFDUCxhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixhQUFhO3dCQUNiLFdBQVc7cUJBQ2Q7aUJBQ0o7O0lBQ3VDLGdDQUFDO0NBQUEsQUF2QnpDLElBdUJ5QztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2NoZW1hU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2NoZW1hLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRmllbGRzTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2ZpZWxkcy9maWVsZHMubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZpZWxkLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTaW1wbGVGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpbXBsZS1mb3JtL3NpbXBsZS1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2ltcGxlRm9ybUNvbXBvbmVudCxcclxuICAgICAgICBGaWVsZERpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZpZWxkc01vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBTaW1wbGVGb3JtQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgU2NoZW1hU2VydmljZSxcclxuICAgICAgICBVdGlsU2VydmljZSxcclxuICAgICAgICBEZWZhdWx0c1NlcnZpY2UsXHJcbiAgICAgICAgTG9nZ2VyU2VydmljZSxcclxuICAgICAgICBIdHRwU2VydmljZVxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbXBsZUZvcm1HZW5lcmF0b3JNb2R1bGUge30iXX0=