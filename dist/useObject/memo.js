import { useMemo } from 'react';
import transform from './deps';
var useObjectMemo = function (factory, deps) { return useMemo(factory, deps ? transform(deps) : undefined); };
export default useObjectMemo;
