import { useMemo } from 'react';
import { transform } from './deps';
export var useObjectMemo = function (factory, deps) { return useMemo(factory, deps ? transform(deps) : undefined); };
//# sourceMappingURL=memo.js.map