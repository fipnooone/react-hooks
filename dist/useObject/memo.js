import { useMemo } from 'react';
import transform from './deps';
const useObjectMemo = (factory, deps) => useMemo(factory, deps ? transform(deps) : undefined);
export default useObjectMemo;
