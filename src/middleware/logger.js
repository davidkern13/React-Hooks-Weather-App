const logger = store => next => action => {
    console.group(action.type)
    console.log(`%c prev state`,'background: red;', store.getState())
    console.info('action', action)
    next(action)
    console.log(`%c next state`,'background: green; color: white', store.getState())
    console.groupEnd()
    return
}
export default logger