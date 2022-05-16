export declare type InputType = {
    [key: string]: any;
};
export declare type ValidatorResultType = {
    values: InputType;
    error?: string;
};
export declare type ValidatorType = (value: any, key: string, name: string) => ValidatorResultType | Promise<ValidatorResultType>;
