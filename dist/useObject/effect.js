import { useEffect } from 'react';
import transform from './deps';
var useObjectEffect = function (effect, deps) { return useEffect(effect, transform(deps)); };
export default useObjectEffect;
