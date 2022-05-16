import { InputType } from './types';
export declare const validateAllAsync: (Schema: {
    new (): any;
}, input: InputType, showData?: boolean | undefined) => Promise<{
    [key: string]: any;
} | undefined>;
