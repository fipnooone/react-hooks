export type ParamTypes = 'string' | 'boolean' | 'number' | 'int';

export interface Params {
    [name: string]: ParamTypes;
}

export interface UseParams {
    <T extends Params>(params: T, redirect?: true | string): {
        [name in keyof T]: T[name] extends 'string' ? string : T[name] extends 'boolean' ? boolean : T[name] extends 'number' | 'int' ? number : T[name];
    };
    <T extends Params>(params: T, redirect: false): {
        [name in keyof T]:
            | (T[name] extends 'string' ? string : T[name] extends 'boolean' ? boolean : T[name] extends 'number' | 'int' ? number : T[name])
            | undefined;
    };
}
