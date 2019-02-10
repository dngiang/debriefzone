const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});

exports.caseCreated = functions.firestore
.document('cases/{caseId}')
.onCreate(doc => {

    const file = doc.data();
    console.log(file);
    const notification = {
        content: 'Added a new case',
        user: `${file.authorFirstName} ${file.authorLastName}`, //hard coding for now, need to trouble shoot for profile
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});

exports.userJoined = functions.auth.user()
.onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid)
    .get().then(doc => {

        const newUser = doc.data();
        const notification = {
            content: "Joined the group",
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })

})