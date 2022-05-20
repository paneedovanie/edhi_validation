import { InputType } from './types';
export declare const validateAllAsync: (Schema: {
    new (): any;
}, input: InputType, showData?: boolean | undefined, options?: {
    showData?: boolean | undefined;
    singleError?: boolean | undefined;
} | undefined) => Promise<{
    [key: string]: any;
} | undefined>;
