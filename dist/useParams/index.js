import { useNavigate, useParams as useRouterParams } from 'react-router-dom';
import { useObjectMemo } from '../useObject';
export var useParams = function (params, redirect) {
    if (redirect === void 0) { redirect = true; }
    var pathParams = useRouterParams();
    var navigate = useNavigate();
    var exit = function () {
        if (redirect)
            throw new Error('Undefined param');
    };
    var exists = function (key) {
        var value = pathParams[key];
        if (value === undefined)
            exit();
        return value;
    };
    var getNumber = function (value) {
        if (!value) {
            exit();
            return;
        }
        var number = Number(value);
        if (!isNaN(number))
            return number;
        exit();
        return undefined;
    };
    var getInt = function (value) {
        var number = getNumber(value);
        if (!number)
            return;
        return Math.ceil(number);
    };
    var format = function (type, key) {
        var value = exists(key);
        if (!value)
            return;
        switch (type) {
            case 'string':
                return value;
            case 'boolean':
                if (value === '1' || value === 'true')
                    return true;
                if (value === '2' || value === 'false')
                    return false;
                exit();
                return false;
            case 'number':
                return getNumber(value);
            case 'int':
                return getInt(value);
        }
    };
    try {
        return useObjectMemo(function () { return Object.fromEntries(Object.entries(params).map(function (_a) {
            var key = _a[0], type = _a[1];
            return [key, format(type, key)];
        })); }, [params, pathParams]);
    }
    catch (_a) {
        if (typeof redirect === 'string')
            navigate(redirect, { replace: true });
        else if (redirect === true)
            navigate(-1);
        return {};
    }
};
