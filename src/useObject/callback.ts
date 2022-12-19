import { useCallback } from 'react';

import { transform } from './deps';
import { DependencyList } from './types';

export const useObjectCallback = <T extends Function>(effect: T, deps: DependencyList): T => useCallback(effect, transform(deps));
