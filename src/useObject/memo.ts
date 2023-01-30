import { DependencyList, useMemo } from 'react';

import transform from './deps';

const useObjectMemo = <T>(factory: () => T, deps: DependencyList | undefined) => useMemo(factory, deps ? transform(deps) : undefined);

export default useObjectMemo;
