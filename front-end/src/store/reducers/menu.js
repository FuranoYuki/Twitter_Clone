const INIT_STATE = false

const menu = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'show-menu':
            return !state
    
        default:
            return state
    }
}

export default menu