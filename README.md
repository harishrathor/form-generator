# Description

Angular 7 library for generating forms dynamically using JSON. 

# Installation

#### Install following dependencies from their documentation.
- Install `bootstrap`.
- Install `ngx-bootstrap`.
- Install `ngx-quill` along with `quill`.


#### Install following npm dependencies.
```bash
npm install lodash --save
npm install @ng-select/ng-select --save
npm install ngx-custom-validators --save
npm install rxjs --save
```

# Supported field types.

- Text
- Number
- Hidden
- Anchor (Link)
- Radio Button
- Checkbox
- Text Area
- Single Select Dropdown
- Multiselect Dropdown
- Server Side Autocomplete Single Select Dropdown
- Server Side Autocomplete Multiselect Dropdown
- Button
- Rich Text Editor
- Datepicker
- Monthpicker
- Date Time pcicker: DATETIME
- Timepicker
- Password
- Blank (For whitespace in form.)

# Usage

import `SimpleFormGeneratorModule`  in `app.module.ts`.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleFormGeneratorModule } from 'form-generator';

import { AppComponent } from './app.component';
import { MyFormComponent } from './components/my-form/app.component';

@NgModule({
    imports: [BrowserModule,  SimpleFormGeneratorModule],
    declarations: [AppComponent, MyFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

## With dedicated component for each form.

- Create form level component which will provide more flexibility to modify UI.

 `my-form.component.ts`

```typescript

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-form',
	templateUrl: './my-form.component.html',
	styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
    
    @Input()
    pageComponent: any; // Page level Componente instance which has this form. 

    
    public instance;
    public schema: any;
    public formData: any; // Data to be populated just after generating form.
 
    constructor(protected _schemaService: SchemaService) {}

    ngOnInit() {
        this._init();
    }
    
    protected _init() {
        try {
            this.instance = this;
            this.formData = {
                'my-text-field1': 'Field Value',
                'my-number-field2': 123,
               // ...
            };
            this.schema = this._schemaService_.getFormSchema(this.code); // schema json definition is explained below.
        } catch (error) {
            console.log(error);
        }
    }

    public afterInitForm(simpleFormComponentInstance) {}

    public onFormGenrated(simpleFormComponentInstance) {} 

    get code() {
        return 'my-form';
    }
    
}
```

 `my-form.component.html`

```html
<simple-form [schema]="schema" [pageComponent]="pageComponent" [formData]="formData" [formComponent]="instance"
(afterInit)="afterInitForm($event)" (afterGenerateForm)="onFormGenrated($event)"></simple-form> <!-- [formData] is optional input.-->

```

- Consumer component of `my-form.component.ts` which is called page comoponent. Page component can have multiple forms.


`app.component.ts`

```typescript

import { Component, OnInit } from '@angular/core';

export class AppComponent implements OnInit {
    public instance;
    public forms = {}; // Always define this property because in this property `simple-form` component instance will be set for each form.
    ngOnInit(){
        this.instance = this; 
    }
    
}
```

`app.component.html`

```html
<my-form [pageComponent]="instance"> </my-form>
<!-- ... <another-form [pageComponent]="instance"> </another-form> -->
```


## Without dedicated component for each form.

- Directely use `simple-form` in `app.component.ts` which is called page comoponent. Page component can have multiple forms.

 `app.component.ts`

```typescript

import { Component, OnInit } from '@angular/core';

export class AppComponent implements OnInit {
    
    public instance;
    public schema1: any;
    public schema2: any;
    public formData1: any; // Data to be populated just after generating form.
 
    constructor(protected _schemaService: SchemaService) {}

    ngOnInit() {
        this._init();
    }
    
    protected _init() {
        try {
            this.instance = this;
            this.formData1 = {
                'my-text-field1': 'Field Value',
                'my-number-field2': 123,
               // ...
            };
            this.schema1 = this._schemaService_.getFormSchema('form1-code'); 
            this.schema2 = this._schemaService_.getFormSchema('form2-code');2
        } catch (error) {
            console.log(error);
        }
    }

    public afterInitForm(simpleFormComponentInstance: any) {}

    public onFormGenrated(simpleFormComponentInstance: any) {} 
    
}
```

 `app.component.html`

```html
<simple-form [schema]="schema1" [pageComponent]="instance" [formData]="formData" [formComponent]="instance"
(afterInit)="afterInitForm($event)" (afterGenerateForm)="onFormGenrated($event)"></simple-form> <!-- [formData] is optional input.-->
<simple-form [schema]="schema2" [pageComponent]="instance" [formComponent]="instance"
(afterInit)="afterInitForm($event)" (afterGenerateForm)="onFormGenrated($event)"></simple-form> <!-- [formData] is optional input.-->

```

# `schema` structure.

## Form level properties.

```javascript
{
  "code": "my-form-code",
  "label": "My Form Label",
  "name": "my_form",
  "type": "simple", // Not in use now
  "hideLabel": false, //Hide form label.
  "hidden": false, 
  "helpText": [ //Instructions for filling the form.
      "Help text 1.",
      "Help text 2.",
      //...
  ],
  "collapse": false, // Whether form is collapsible or not.
  "columns": 2, // Form field column supported 1, 2 and 3. Default 2.
  "order": 1, // If there are multiple forms with same schema on a single page then give different order value for each form.
  "fieldsDefaultProps": { // Common for all fields.
    "disabled": false, // If true then all fields will be disabled.
    "labelPosition": "left", // Supported left, right, bottom and top. Default: top 
    "labelAlignment": "right" // Supported right, left and center. Default left.
  },
  "fields": [
      {
          //...field1 definition
      },
      {
          //...field2 definition
      },
      //....
  ],
  "buttons": [
       {
          //...button1 definition
      },
      {
          //...button2 definition
      },
      //....
  ]
}
```
## `schema.fields[i]` structure - Each field structure.

### Field type aliase:

- Text : TXT
- Number: NUM
- Hidden : HID
- Anchor (Link): ANC
- Radio Button : RAD
- Checkbox : CHK
- Text Area : TXA
- Single Select Dropdown : SEL
- Multiselect Dropdown : MSL
- Server Side Autocomplete Single Select Dropdown : ACS
- Server Side Autocomplete Multiselect Dropdown : ACS
- Button : BTN
- Rich Text Editor : HTML
- Datepicker : DAT
- Monthpicker MONTH
- Date Time pcicker: DATETIME
- Timepicker: TIME
- Password: PWD
- Blank (For whitespace in form.) : BLK

### External plugins:
- Plugin for `SEL, MSL, ACS` is `@ng-select/ng-select`. So `validations` and `events` supported by this plugin are supported.
- Plugin for `HTML` is `ngx-quill`.So `validations` and `events` supported by this plugin are supported.
- Plugin for `DAT, DATETIME` is `ngx-bootstrap` datepicker. So `validations` and `events` supported by this plugin are supported.
- Plugin for `TIME` is `ngx-bootstrap` timepicker. So `validations` and `events` supported by this plugin are supported.
- Plugin for `validations` for all fields which are not using any external plugin is `ngx-custom-validators`. So the validations supported by `ngx-custom-validators` are supported.

### Field Definition JSON properties;

```javascript
{
    "code": "FIELD1", // Unique for each field
    "type": "TXT", // Field type aliase
    "label": "First Name",
    "name": "first_name", // Unique for each field
    "defaultValue": "", // Initiale value.
    "placeholder": "",
    "helpText": "", // Any help for this field.
    "hidden": false,
    "disabled": false,
    "validations": [  // Validations supported by field plugin or 'ngx-custom-validators'
        {
          "name": "maxlength",
          "value": 50
        },
        {
          "name": "minlength",
          "value": 5
        },
        {
          "name": "required",
          "value": ""
        }

      ],
    "events": [ // Events supported by field plugin or javascript plugin.
        { 
        "name": "change", // Javascript event. Example: for button event will be 'click'. For most of the fields Javacript Events will work, but for some such as Datepicker event will be dependant on plugin..
        "callbacks": [{ // array of callbacks
          "name": "onNameChange",
          "arguments": ["argument1", "argument2", 22, "...argument4"],
          "handlerFnOwner": "F" //There are three possible values: First-> 'P' - Page Component, It means event handler 'onNameChange' is the method of page component (which is passed as  [pageComponent] input in simple-form). Second-> 'F'  - Form Component, It means event handler 'onNameChange' is the method of form component (which is passed as [formComponent] input in simple-form). Third -> object : t means event handler 'onNameChange' is the method of passed object
        }]
      }],
    "order": 1
}
```

### Properties for `SEL, MSL, ACS`

```json
{
    //...
    "optoins" : [
        {
          "label": "Option1 Label",
          "value": "value1"
        },
        {
          "label": "Option2 Label",
          "value": "value2"
        },
        //...
    ],
    "multiple": true // or false, only for ACS field. Whether there should be multiple selection or not.
    //...
}

```
