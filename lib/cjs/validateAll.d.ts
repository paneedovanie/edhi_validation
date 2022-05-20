import { InputType } from './types';
export declare const validateAll: (Schema: {
    new (): any;
}, input: InputType, options?: {
    showData?: boolean | undefined;
    singleError?: boolean | undefined;
} | undefined) => {
    [key: string]: any;
} | undefined;
