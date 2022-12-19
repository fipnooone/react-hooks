import { useMemo } from 'react';

import { transform } from './deps';
import { DependencyList } from './types';

export const useObjectMemo = <T>(factory: () => T, deps: DependencyList | undefined) => useMemo(factory, deps ? transform(deps) : undefined);
