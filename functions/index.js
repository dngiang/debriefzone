const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added'))
})

exports.caseCreated = functions.firestore
.document('cases/{caseId}')
.onCreate(doc => {

    const file = doc.data();
    const notification = {
        content: 'Added a new case',
        user: 'Dinh Giang', //hard coding for now
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

})

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