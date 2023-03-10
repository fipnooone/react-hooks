import { useCallback } from 'react';
import transform from './deps';
// eslint-disable-next-line @typescript-eslint/ban-types
var useObjectCallback = function (effect, deps) { return useCallback(effect, transform(deps)); };
export default useObjectCallback;
