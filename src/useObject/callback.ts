import { DependencyList, useCallback } from 'react';

import { transform } from './deps';

export const useObjectCallback = <T extends Function>(effect: T, deps: DependencyList): T => useCallback(effect, transform(deps));
