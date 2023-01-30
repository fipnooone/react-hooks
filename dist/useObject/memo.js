import { useMemo } from 'react';
import { transform } from './deps';
export const useObjectMemo = (factory, deps) => useMemo(factory, deps ? transform(deps) : undefined);
