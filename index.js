const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const template = require("./template.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const args = process.argv.slice(2);

if (!args.length) {
    console.log("Provide the FCM token.");
    return;
}

const registrationToken = args[0];

const message = {
    ...template,
    token: registrationToken,
};

admin
    .messaging()
    .send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log("Successfully sent message:", response);
    })
    .catch((error) => {
        console.error("Error sending message:", error);
    });
