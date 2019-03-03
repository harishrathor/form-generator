import { UtilService } from './../../services/util.service';
import { SchemaService } from './../../services/schema.service';
import { LoggerService } from './../../services/logger.service';
import { Component, OnInit, Input, AfterViewInit, SimpleChange, ViewEncapsulation, Output, EventEmitter, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DefaultsService } from './../../services/defaults.service';
import * as _ from 'lodash';


interface EventHandlerCallbackInterface {
    name: string;
    arguments?: any[];
    handlerFnOwner?: string;
}
@Component({
    selector: 'simple-form',
    templateUrl: './simple-form.component.html',
    styleUrls: ['md-icon.css', 'simple-form.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SimpleFormComponent implements OnInit, AfterViewInit {
   
    @Input()
    schema: any;

    @Input()
    formComponent?: any;

    @Input()
    pageComponent: any;

    @Input()
    formData?: any;

    @Output()
    afterInit: EventEmitter<SimpleFormComponent> = new EventEmitter();
    
    @Output()
    afterGenerateForm: EventEmitter<SimpleFormComponent> = new EventEmitter();

    public formGoup: FormGroup;
    public code: string;
    public instance: SimpleFormComponent;
    public fieldsComponent: any;
    public isCollapsed: boolean;

    protected _hidden: boolean; 

    constructor(
        protected _fb: FormBuilder,
        protected _schemaService: SchemaService,
        protected _logger: LoggerService,
        protected _utilService: UtilService,
        protected _defaults: DefaultsService,
        protected _elemRef: ElementRef,
        protected _renderer: Renderer2
    ) {
        this._initialize();
    }

	protected _initialize() {
       try {
		   this.instance = this;
		   this.fieldsComponent = {};
           this.isCollapsed = false;
           this._hidden = false;
		   this.initialize();
	   } catch (error) {
		   console.log(error);
	   }
	}

	public initialize() {
	}
	


    ngAfterViewInit() {
        this._afterViewInit();
    }

    ngOnChanges() {
        this._onChanges();
    }

    protected _onChanges() {
        try {
            this._init();
            this.populateForm(this.formData);
        } catch (error) {
            console.log(error);
        }
    }

    public populateForm(formData) {
        try {
            if (formData) {
                this.formGoup.patchValue(formData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    protected _afterViewInit() {
        try {
            if (this.hidden) {
                this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
            }
            this.populateForm(this.formData);
			this.afterGenerateForm.emit(this);
        } catch (error) {
            console.log(error);
        }
	}

    
    protected _applyInlieCssBySelector(selector: string, cssStyle: any) {
        try {
            const elementList = document.querySelectorAll(selector);
            elementList.forEach(element => {
                try {
                    for (let cssProp in cssStyle) {
                        try {
                            let propValue = cssStyle[cssProp];
                            element['style'][cssProp] = propValue;
                        } catch (error) {}
                    }
                } catch (error) {}
            });
        } catch (error) {
            console.log(error);
        }
    }

    ngOnInit() {
        this._init();
    }

    protected _init() {
        try {
            if (this.pageComponent && this.pageComponent.forms) {
                this.pageComponent.forms[this.code] = this;
            } else {
                console.log("Please provide [pageComponent] input and define 'forms' definition in the passed object as pageComponent.");
            }
            
            if (this.formComponent && this.pageComponent.form) {
                this.formComponent.form = this;
            } else {
                console.log("Please provide [formComponent] input and define 'form' definition in the passed object as formComponent.");
            }
            this.hidden = this.schema.hidden || false;
            this.code = this.schema.code;
            this._schemaService.addSchema(this.code, this.schema);
            this.schema = this._schemaService.getSchemaBySchemaKey(this.code);
            this._initFormGroup();
			this.afterInit.emit(this);
        } catch (error) {
            console.log(error);
        }
	}

    protected _addFormControls(formGroup: FormGroup, formFieldsDef: any[]) {
        try {
            formFieldsDef.forEach((def, index) => {
                const type = def.type;
                if (_.includes(this._defaults.DUMMY_FIELDS, type)) {
                    return false;
                }
                if (type === 'FST') {
                    this._addFormControls(formGroup, def.fields);
                } else {
                    const fldControl: FormControl = new FormControl();
                    this.formGoup.addControl(def.name, fldControl);
                }
            });
        } catch (error) {}
    }

    protected _initFormGroup() {
        try {
            this.formGoup = this._fb.group({});
            this._addFormControls(
                this.formGoup,
                this._schemaService.getSchemaFields(this.code)
            );
        } catch (error) {
            console.log(error);
        }
    }

    public onParentFieldValueChange(parentFieldName: string, childFieldNameArr: string[], changes: SimpleChange) {
        try {
            if (this.onParentFieldValueChangeFn) {
                const callback = this._getEventCallback('parentChange', this.onParentFieldValueChangeFn);
                if (callback) {
                    callback(this.code, parentFieldName, childFieldNameArr, changes);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    protected _getEventCallback(eventName: string, callbackData: EventHandlerCallbackInterface) {
        try {
            const callbackName = callbackData.name;
            if (!callbackData.arguments) {
                callbackData.arguments = [];
            }

            const handlerFnOwner = this._getCallbackOwner(callbackData.handlerFnOwner);
            if (handlerFnOwner && handlerFnOwner[callbackName] && typeof handlerFnOwner[callbackName] === 'function') {
                return this.eventHandler.bind(this, callbackData.handlerFnOwner, callbackName, callbackData.arguments);
            } else {
                console.log(`Callback function ${callbackName} for event ${eventName} does not exist in `, handlerFnOwner);
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public eventHandler(ownerType: any, fnName: string, argsArr: any, ...restArgsArr) {
        try {
            if (!argsArr) {
                argsArr = [];
            }
            argsArr = Object.assign([], argsArr);
            const callbackFnOwner = this._getCallbackOwner(ownerType);

            if (restArgsArr) {
                argsArr = [...argsArr, ...restArgsArr]
            }
            return callbackFnOwner[fnName].apply(callbackFnOwner, argsArr);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    protected _getCallbackOwner(ownerType: string) {
        try {
            if (!ownerType) {
                ownerType = 'P';
            }
            let callbackFnOwner = this.pageComponent;
            if (ownerType === 'F') {
                callbackFnOwner = this.formComponent;
            } else if (typeof ownerType === 'object') {
                callbackFnOwner = ownerType;
            }
            return callbackFnOwner;
        } catch (error) {
            console.log(error);
        }
    }

    get label() {
       // console.log("//");
       // console.log(this.schema.helpText);
        return this.schema.label;
    }
    get helps(){
        return this.schema.helpText;
    }
    get fields() {
        return this.schema.fields;
    }

    get buttons() {
        return this.schema.buttons;
    }

    get columns() {
        return this.schema.columns;
    }

    get collapse() {
        return this.schema.collapse || false;
    }

    get hideLabel() {
        return this.schema.hideLabel || false;
    }

    get collapseBodyHidden() {
        return (this.collapse && this.isCollapsed);
	}
	
	get valid() {
		return this.formGoup.valid;
	}

	get value() {
		return this.formGoup.value;
    }

    set value(groupValue) {
        this.formGoup.patchValue(groupValue);
    }

    get order() {
        return this.schema.order || 1;
    }
    
    get id() {
        return this.code + '__' + this.order;
    }

    get hidden() {
        return this._hidden || false;
    }

    set hidden(hidden: boolean) {
        if (hidden === true) {
            this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
        } else {
            this._renderer.removeClass(this._elemRef.nativeElement, 'hidden');
        }
        this._hidden = hidden;
    }

    get onParentFieldValueChangeFn() {
        return this.schema.onParentFieldValueChange || null;
    }

    set disable(prop) {
        this.formGoup.disable();
    }

    set enable(prop) {
        this.formGoup.enable();
    }

    get formRef() {
        return this._elemRef.nativeElement;
    }

}
