# Firebase Cloud Messaging Sandbox (FCM Sandbox)

Firebase Cloud Messaging Documentation: [Link](https://firebase.google.com/docs/cloud-messaging)

## Usage

1. Create a `serviceAccount.json` file at the root of the project with the information downloaded under `https://console.firebase.google.com/project/{PROJECT_ID}/settings/serviceaccounts/adminsdk`

2. Modify the `template.json` to meet your needs

3. Run `node index.js {FCM_TOKEN}`

## Example

```
$ node index.js fEUcteK8o0F1pmX_3v2wM1:APA91bGxWtBIY1omLL0FC4CBYle7WgNqHPkh_xK2PoJ4Fkg1NQ2nryYlUrOHbbDQlAFcQyrfAMr2abg3cJfJ4YCT4S-f9GU5aVSlXAHVG2BDU5xoyaPiv5Khum_gUyw25TGvyHewh2W7
Successfully sent message: projects/{PROJECT_ID}/messages/{MESSAGE_ID}
```
