import { useEffect } from 'react';
import transform from './deps';
const useObjectEffect = (effect, deps) => useEffect(effect, transform(deps));
export default useObjectEffect;
