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
@NgModule({
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
        NgSelectModule ,
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
    schemas:[
        
      // NO_ERRORS_SCHEMA,
      // CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class FieldsModule {}