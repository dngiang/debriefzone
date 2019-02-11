//CLEAR
export const createCase = (file) => { //or case
    return (dispatch, getState, { getFirestore }) => {
        // make asyn call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
    
        firestore.collection('cases').add({
            ...file, //spread operator
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_FILE' }); //or file/case
        }).catch((err) => {
            dispatch({type: 'CREATE_FILE_ERROR', err});
        })

    }
};