import { useCallback } from 'react';
import { transform } from './deps';
export var useObjectCallback = function (effect, deps) { return useCallback(effect, transform(deps)); };
//# sourceMappingURL=callback.js.map