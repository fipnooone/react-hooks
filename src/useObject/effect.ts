import { useEffect } from 'react';

import transform from './deps';
import { Hook } from './types';

const useObjectEffect: Hook = (effect, deps) => useEffect(effect, transform(deps));

export default useObjectEffect;
