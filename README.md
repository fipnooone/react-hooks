
# React Hooks
 
## Usage
~~~typescript  
import {
    useCallbackState,
    useEvents,
    useObjectCallback,
    useObjectEffect,
    useObjectMemo,
    useOutside,
    useParams,
    usePromiseState,
    useTrustedPromise,
    useTrustedState,
} from '@fipnooone/hooks';
~~~  
 
## useState
### useTrustedState
~~~typescript
const [state, setState, isTrusted] = useTrustedState('defaultValue', true);
const [state, setState, isTrusted] = useTrustedState();
~~~
### useCallbackState
~~~typescript
const [state, setState] = useCallbackState('defaultValue');

const changeCallback = (value: string) => console.log(value);

const changeState = () => setState('newValue', changeCallback);
~~~
### usePromiseState
~~~typescript
const [state, setState] = usePromiseState<User>();

const changeState = () => 
    setState({ username: 'fipnooone', website: 'https://fipnoo.one' }).then((value) => {
        console.log(value)
    });
~~~
### useTrustedPromise
~~~typescript
const [state, setState] = useTrustedPromise<number>();

const changeState = () => setState(undefined).then()
~~~