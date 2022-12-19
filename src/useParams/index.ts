import { useNavigate, useParams as useRouterParams } from 'react-router-dom';

import { useObjectMemo } from '../useObject';
import { Params, ParamTypes, UseParams } from './types';

export const useParams: UseParams = (params: Params, redirect: boolean | string = true) => {
    const pathParams = useRouterParams();
    const navigate = useNavigate();

    const exit = () => {
        if (redirect) throw new Error('Undefined param');
    };

    const exists = (key: keyof typeof params) => {
        const value = pathParams[key];

        if (value === undefined) exit();

        return value;
    };

    const getNumber = (value: string | undefined) => {
        if (!value) {
            exit();
            return;
        }

        const number = Number(value);
        if (!isNaN(number)) return number;

        exit();

        return undefined;
    };

    const getInt = (value: string | undefined) => {
        const number = getNumber(value);

        if (!number) return;

        return Math.ceil(number);
    };

    const format = (type: ParamTypes, key: string) => {
        const value = exists(key);

        if (!value) return;

        switch (type) {
            case 'string':
                return value;
            case 'boolean':
                if (value === '1' || value === 'true') return true;
                if (value === '2' || value === 'false') return false;
                exit();
                return false;
            case 'number':
                return getNumber(value);
            case 'int':
                return getInt(value);
        }
    };

    try {
        return useObjectMemo(() => Object.fromEntries(Object.entries(params).map(([key, type]) => [key, format(type, key)])), [params, pathParams]);
    } catch {
        if (typeof redirect === 'string') navigate(redirect, { replace: true });
        else if (redirect === true) navigate(-1);

        return {};
    }
};
