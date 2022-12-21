const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

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
    apns: {
        payload: {
            aps: {
                contentAvailable: true,
                sound: "default",
            },
        },
    },
    data: {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2021-01-30T08:30:00Z",
        id: "c6cd03d8-37c5-4445-bd28-93d1fef50375",
        logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        title: "You have a new successful transaction on hooonk.com",
    },
    notification: {
        body: "{NOTIFICATION_TITLE}",
        title: "New Hooonk 🔊🔊",
    },
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
