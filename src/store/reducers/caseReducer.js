const initState = {
    cases: [
        {id: '1', title: 'Case 1', content: 'filler'},
        {id: '2', title: 'Case 2', content: 'filler, filler'},
        {id: '3', title: 'Case 3', content: 'filler, filler, filler'}
    ]
}

const caseReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_FILE':
        console.log('created file', action.file);
            return state;
        case 'CREATE_FILE_ERROR':
        console.log('create file error', action.err);
            return state;
        default:
            return state;
    }
}

export default caseReducer