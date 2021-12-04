export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log('Prev State: ', prevState);
        console.log('Action: ', action);
        console.log('Args: ', args);
        const newState = reducer(prevState, action, args);
        console.log('New State: ', newState);
        console.groupEnd();
        return newState;
    }
}