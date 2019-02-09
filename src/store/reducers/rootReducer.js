import authReducer from './authReducer'
import caseReducer from './caseReducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    case: caseReducer,
    firestore: firestoreReducer
});

export default rootReducer