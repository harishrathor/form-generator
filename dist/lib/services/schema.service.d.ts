import { DefaultsService } from './defaults.service';
export declare class SchemaService {
    protected _defaults: DefaultsService;
    protected _formSchema: any;
    protected _formOriginalSchema: any;
    constructor(_defaults: DefaultsService);
    initialize(): void;
    addSchema(schemaKey: string, schema: any): void;
    protected _modifyDef(schema: any): any;
    protected _addFieldsDefaultProps(fieldsArr: any[], fieldDefaultProps: any): any[];
    getSchemaFields(schemaKey: string): any;
    getSchemaBySchemaKey(schemaKey: string): any;
}
