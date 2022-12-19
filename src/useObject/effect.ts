import { useEffect } from 'react';

import { transform } from './deps';
import { Hook } from './types';

export const useObjectEffect: Hook = (effect, deps) => useEffect(effect, transform(deps));
