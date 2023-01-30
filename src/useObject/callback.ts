import { DependencyList, useCallback } from 'react';

import transform from './deps';

// eslint-disable-next-line @typescript-eslint/ban-types
const useObjectCallback = <T extends Function>(effect: T, deps: DependencyList): T => useCallback(effect, transform(deps));

export default useObjectCallback;
