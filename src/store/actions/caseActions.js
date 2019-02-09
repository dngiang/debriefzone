export const createCase = (file) => { //or case
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asyn call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
    
        firestore.collection('cases').add({
            ...file, //spread operator
            authorFirstName: "Dinh",
            authorLastName: "Giang",
            authorId: "12345",
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_FILE', file}); //or case
        }).catch((err) => {
            dispatch({type: 'CREATE_FILE_ERROR', err});
        })

    }
};