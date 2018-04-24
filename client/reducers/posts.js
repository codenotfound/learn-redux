// a reducer takes in tow things:
// 1) the action (info about what happened)
// 2) copy of current state

export default function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            //return updated state
            console.log('Incrementing likes');
            const i = action.index;
            return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1)
            ];
        default:
            return state;
    }
}