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



@NgModule({
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
})
export class SimpleFormGeneratorModule {}