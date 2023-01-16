import { useEffect } from 'react';
import { transform } from './deps';
export var useObjectEffect = function (effect, deps) { return useEffect(effect, transform(deps)); };
