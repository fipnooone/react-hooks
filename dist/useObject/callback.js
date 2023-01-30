import { useCallback } from 'react';
import { transform } from './deps';
// eslint-disable-next-line @typescript-eslint/ban-types
export const useObjectCallback = (effect, deps) => useCallback(effect, transform(deps));
