import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { DefaultsService } from './defaults.service';


@Injectable()
export class SchemaService {

    protected _formSchema: any;
    protected _formOriginalSchema: any;

    constructor(protected _defaults: DefaultsService) {
        this.initialize();
    }

    public initialize() {
        try {
            this._formSchema = {};
            this._formOriginalSchema = {};
        } catch (error) {
            console.log(error);
        }
    }

    public addSchema(schemaKey: string, schema: any) {
        try {
            if (!this._formOriginalSchema[schemaKey]) {
                this._formOriginalSchema[schemaKey] = {};
            }
            this._formOriginalSchema[schemaKey] = _.assign({}, schema);

            schema = this._modifyDef(schema);
            if (!this._formSchema[schemaKey]) {
                this._formSchema[schemaKey] = {};
            }
            this._formSchema[schemaKey] = schema;

        } catch (error) {
            console.log(error);
        }
    }

    protected _modifyDef(schema: any) {
        try {
            if (!schema.columns) {
                schema.columns = this._defaults.FORM_COLUMNS;
            }
            if (!schema.fieldsDefaultProps) {
                schema.fieldsDefaultProps = {};
            }
            if (!schema.columns) {
                schema.columns = this._defaults.COLUMNS;
            }
            this._defaults.COLUMNS = schema.columns;
            schema.fieldsDefaultProps.columns = schema.columns;
            schema.fieldsDefaultProps.disabled = schema.disabled;
            schema.fieldsDefaultProps.formCode = schema.code;
            schema.fieldsDefaultProps.formOrder = schema.order || 1;
            schema.fields = this._addFieldsDefaultProps(schema.fields, schema.fieldsDefaultProps);
            schema.buttons = this._addFieldsDefaultProps(schema.buttons, schema.fieldsDefaultProps);
            return schema;
        } catch (error) {
            console.log(error);
            return {};
        }
    }

    protected _addFieldsDefaultProps(fieldsArr: any[], fieldDefaultProps: any) {
        try {
            if (!fieldsArr) {
                fieldsArr = [];
            }
            fieldsArr.forEach((def, index) => {
                if (def.type === 'FST') {
                    def.fields = this._addFieldsDefaultProps(def.fields, fieldDefaultProps);
                } else {
                    def.disabled = def.disabled || fieldDefaultProps.disabled || false;
                    const fieldProps = _.assign({}, this._defaults.FIELD_DEFAULT_PROPS, fieldDefaultProps);
                    if (def.type in this._defaults.EXCEPTIONAL_STYLED_FIELDS) {
                        def.formColumns = fieldProps.columns;
                        def = _.assign(def, this._defaults.EXCEPTIONAL_STYLED_FIELDS[def.type]);
                    }
                    def = _.assign({}, fieldProps, def);
                }
                fieldsArr[index] = def;
            });
            return fieldsArr;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public getSchemaFields(schemaKey: string) {
        try {
            if (!this._formSchema[schemaKey] || !this._formSchema[schemaKey].fields) {
                return [];
            }
            return this._formSchema[schemaKey].fields;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public getSchemaBySchemaKey(schemaKey: string) {
        try {
            if (!this._formSchema[schemaKey]) {
                return {};
            }
            return this._formSchema[schemaKey];
        } catch (error) {
            console.log(error);
        }
    }

}