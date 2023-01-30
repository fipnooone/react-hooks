import { useEffect } from 'react';
import { transform } from './deps';
export const useObjectEffect = (effect, deps) => useEffect(effect, transform(deps));
