# Description

Angular 7 library for generating forms dynamically using JSON. 

## [See Demo](https://stackblitz.com/edit/angular-nbrlgf)

# Installation

#### Install following npm dependencies by reading documentation.
- Install [bootstrap](https://www.npmjs.com/package/bootstrap).
- Install [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap)(For standard webpack, angular-cli and tsc builds).
- Install [ngx-quill](https://www.npmjs.com/package/ngx-quill) (For standard webpack, angular-cli and tsc builds). Do not forget to install `quill`.


#### Install following npm dependencies.
```bash
npm install lodash --save
npm install @ng-select/ng-select --save
npm install ngx-custom-validators --save
npm install rxjs --save
```

### Now install package

```bash
npm install json-form-generator --save
```

# Supported field types.

- Text
- Number
- Hidden
- Password
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
- Date Time picker
- Timepicker
- Fieldset (For grouping fields)
- Blank (For whitespace in the form.)

# Usage

import `SimpleFormGeneratorModule`  in `app.module.ts`.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleFormGeneratorModule } from 'json-form-generator';

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
    public form: any; // always define this property to access the instance of the form.
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
    public forms = {}; // Always define this property because in this property `simple-form` component instance will be set for each form.

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
<simple-form [schema]="schema1" [pageComponent]="instance" [formData]="formData"
(afterInit)="afterInitForm($event)" (afterGenerateForm)="onFormGenrated($event)"></simple-form> <!-- [formData] and [formComponent] are optional input.-->
<simple-form [schema]="schema2" [pageComponent]="instance"
(afterInit)="afterInitForm($event)" (afterGenerateForm)="onFormGenrated($event)"></simple-form> <!-- [formData] and [formComponent] are optional input.-->

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
  "onParentFieldValueChange": { // Define this property if there is parent child relationship in the fields.
    "name": "onParentValueChange", /* any method name defined in "handlerFnOwner".
    Arguments: (...your arguments, formCode: string, parentFieldName: string, childFieldsNameArr: string[], changeValue: SimpleChange)
    */
    "arguments": ["any", "argument", "..."],
    "handlerFnOwner": "'F' | 'P' | object" /*Default: 'P'. There are three possible values:
           First-> 'P' - Page Component, It means event handler 'onNameChange' is the method of page component (which is        passed as  [pageComponent] input in simple-form). 
           Second-> 'F'  - Form Component, It means event handler 'onNameChange' is the method of form component (which is      passed as [formComponent] input in simple-form).
           Third -> object : It means event handler 'onNameChange' is the method of passed object.*/
  },
  "fields": [
      {
          //...field1 or fieldset1 definition. Structure explained below.
      },
      {
          //...field2 or fieldset2 definition. Structure explained below.
      },
      //....
  ],
  "buttons": [
    {
          //...button1 definition. Structure explained below.
      },
      {
          //...button2 definition. Structure explained below.
      },
      //....
  ]
}
```
## Field `schema.fields[i]` structure - Each field structure.

### Before understanding JSON structure, understand following points first:
#### Field type alias.

| Field Type                | Type Alias  |
| ------------------------- | ----------- |
| Text                      | TXT         |
| Number                    | NUM         |
| Password                  | PWD         |
| Hidden                    | HID         |
| Anchor (Link)             | ANC         |
| Radio Button              | RAD         |
| Checkbox                  | CHK         |
| Text Area                 | TXA         |
| Dropdown                  | SEL         |
| Dropdown (Multiple Select)| MSL         |
| Autocomplete (Server)     | ACS         |
| Button                    | BTN         |
| Rick Text Editor          | HTML        |
| Datepicker                | DAT         |
| Monthpicker               | MONTH       |
| Date Time picker          | DATETIME    |
| Timepicker                | TIME        |
| Fieldset                  | FST         |
| Blank                     | BLK         |

#### External plugins:
- Plugin for `SEL, MSL, ACS` is `@ng-select/ng-select`. So `validations` and `events` supported by this plugin are supported.
- Plugin for `HTML` is `ngx-quill`.So `validations` and `events` supported by this plugin are supported.
- Plugin for `DAT, DATETIME` is `ngx-bootstrap` datepicker. So `validations` and `events` supported by this plugin are supported.
- Plugin for `TIME` is `ngx-bootstrap` timepicker. So `validations` and `events` supported by this plugin are supported.
- Plugin for `validations` for all fields, is `ngx-custom-validators`. So the validations supported by used external plugin or `ngx-custom-validators` are supported.
- Icon library: `Material Design`.

### Field Definition JSON common properties (Not for fieldset (FST));

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
          "handlerFnOwner": "'F' | 'P' | object" /*There are three possible values:
           First-> 'P' - Page Component, It means event handler 'onNameChange' is the method of page component (which is        passed as  [pageComponent] input in simple-form). 
           Second-> 'F'  - Form Component, It means event handler 'onNameChange' is the method of form component (which is      passed as [formComponent] input in simple-form).
           Third -> object : It means event handler 'onNameChange' is the method of passed object.*/
        }]
      }],
      "isParent": true, // boolean, if there are some fields whose value/options depend on this field value then this field will be parent field. In this case this property will be true otherwise false.
      "children": ['child_field1_name', 'child_field2_name'], // Children fields names.
    "order": 1// Recommened incremental number.
}
```

### Specific properties for `TXT, NUM`

```javascript
{
    //...
    prefix: '$', // For example: for currency  you may want to show currency sign. This will not affect value.
    suffix: '@', // For example: for email type field you may want to show '@'. This will not affect value.
    //...
}
```

### Specific Properties for `SEL, MSL, RAD, ACS`

```javascript

// Witnout grouping options
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
        {
          "label": "Option3 Label",
          "value": "value2",
          "disabled": true // If you want to disable this option.
        },
        //...
    ]
    //...
}

// With grouped options.
{
    //...
    "options": [
        {
            "label": "Group 1",
            "optoins" : [
                {
                "label": "Option1 Label",
                "value": "value1"
                },
                {
                "label": "Option2 Label",
                "value": "value2"
                },
                {
                "label": "Option3 Label",
                "value": "value2",
                "disabled": true // If you want to disable this option.
                },
                //...
            ]
        },
        {
            "label": "Group 2",
            "optoins" : [
                {
                "label": "Option4 Label",
                "value": "value4"
                },
                {
                "label": "Option5 Label",
                "value": "value5"
                },
                {
                "label": "Option6 Label",
                "value": "value6"
                },
                //...
            ]
        },
        // ...
    ]
    //...
}
```
**Note:** Do not use group and non-grouped options together.


### Specific properties for Autocomplete Server: `ACS`

```javascript
{
    //...
    "searchData": {
        "url": "http://yourserver.domain/uri/", /* This url will be hit when user types something in the field.
        Request params:
        {
            searchTerm: string,
            fieldCode: string
        }
        
        Desired response: 
        {
            options: [
                //...array of options (explained in previous point)
            ]
        }
        */
        "methodType": "GET | POST", // When server is hit then what method will be user. Default 'GET'
        "fetchFn": { /* If this is given then instead of hiting "url" , this method will be called for fetching options.
        Arguments: (...your arguments, searchTerm: string, fieldCode: string) 
        Desired return type: 
        {
            options: [
                //...array of options (explained in previous point)
            ]
        }
        */
            "name": "fetchACSOptions", // any name defined in "handlerFnOwner"
            "arguments": ['from', 'fetch-acs', 'search'], // array of any type of values whill be passed as Arguments in method.
            "handlerFnOwner": "'F' | 'P' | object " // Explained above.
        },
        "beforeFetchFn": { /* callback which will be called before fetching options. 
        Arguments: (...your arguments, searchTerm: string, fieldCode: string) 
        Desired Return type: boolean, if false is returned then options will not be fetched.*/
          "name": "preFetchACS", // any name defined in "handlerFnOwner"
          "arguments": ['any', 'argume', 'here'],
          "handlerFnOwner": "'F' | 'P' | object"
        },
        "afterFetchFn": { /* callback which will be called after fetching options. 
        Arguments: (...your arguments, {
                        term: string,
                        fieldCode: string,
                        formCode: string,
                        response: any (response from server or returned data from 'fetchFn') 
                    }) 
        Desired Return type: 
        {
            optoins:[...array of options (explained in previous point.)]
        } 
        */
          "name": "postFetchACS", // any name defined in "handlerFnOwner"
          "arguments": ['from', 'post-acs', 'search'],
          "handlerFnOwner": "'F' | 'P' | object"
        }
    },
    "multiple": true // Whether multiple selection will be allowed or not
}
```

###  Specific properties for Anchor Field: `ANC`

```javascript 
{
    //...
    defaultValue: "https://your.redirect.link.com/...."
    //...
}
```

### Specific properties for Button: `BTN`

```javascript 
{
    //...
    theme: "", // Bootstrap theme class. Example1: theme: 'primary' . Example2: theme: 'info
    events: [ // always bind click event.
        {
        "name": "click",
        "callbacks": [
            {
                "name": "onFormSubmit",
                "arguments": [],
                "handlerFnOwner": "'F' | 'P' | object"
            }
        ]
      }
    ],
    icon: "material desgin icon content", // Internally material design icon library is being used. So icon content will be passed here.
    //...
}
```

### Specific perperties for Rich Text Editor: 'HTML'


```javascript
{
    //...
    quillConfig: null // By default default quill config is applied. But if you want to customize it then define here. Default value is null.
    //...
}
```


### Properties for Fieldset (`FST`)

This is for grouping fields inside a form. For example address, for address there will be multiple fields, you definitely want to group them for better UI/UX. This will also be in the array of fields.

```javascript
{
    "code": "MYFST1",
    "type": "FST", // Always give it 'FST'
    "label": "My Fieldset",
    "collapse": true, // boolean. Collapsable or not.
    "hideLabel": false, // If you want to hide label then pass it true.
    "fields": [
        //... fields/fieldsets same as in schema.fields[i]
    ],
    "order": 12 // Incremental number
}
```

## Accessibility

You can access `simple-form` component instance which gives you control on the form. As emphasized that define `forms` property in `app.component.ts` and `form` property in `my-form.component.ts` so that instances can be set in this property.


### How to access instance `simple-form` component form.

#### In `AppComponent.forms` , `AppComponent.forms['MyFORMCODE']` will be an instance of `simple-form` for the form with code `'MyFormCode'`.'
#### In `MyFormComponent.form`  will be an instance of `simple-form`.

### Important `public` properties of `SimpleFormComponent` and `FieldComponent`

```typescript

class SimpleFormComponent {
    public formGoup: FormGroup; // This is the most important property for manipulate fields.
    public fieldsComponent: any; /* This contains intances of all fields component.
    {
        'field-name': FieldComponent
    }
    
    */
   public readonly code: string;
   public readonly  label: string;
   public readonly valid: boolean;
   public value: any; // Getter and Setter for group value.
   public readonly formRef: HTMLElement;
   public enable: boolean; //Setter
   public disable: boolean; //Setter
   public hidden: boolean; // Getter Setter
}

class FieldComponent {
    public readonly  code: string;
    public readonly label: string;
    public readonly valid: boolean;
    public value: any; // Getter and Setter for group value.
    public readonly fieldRef: HTMLElement;
    public enable: boolean; //Setter
    public disable: boolean; //Setter
    public hidden: boolean; // Getter Setter
    public readonly control: FormControl;
    public readonly inputContainerRef: HTMLElement;
    public readonly labelRef: HTMLElement;
    public hideLabel: boolean; // Getter Setter
}

```
