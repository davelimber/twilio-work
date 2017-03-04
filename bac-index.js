var twilio = require('twilio');

var client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

// Send the text message.
client.sendMessage({
  to: '+12088901309',
  from: process.env.TWILIO_PHONE_NUMBER,
  body: 'Phone number added to Legacy Feed & Fuel'
}, function (err, message) {
  if (err) {
    console.error(err.message);
  }
});

// client.outgoingCallerIds.create({
//   friendlyName: "customer number",
//   phoneNumber: "+12088998672"
// }, function (err, callerId) {
//   // process.stdout.write(callerId.sid);
//   console.log(callerId)
// });


// client.outgoingCallerIds.list(function (err, data) {
//   data.outgoingCallerIds.forEach(function (callerId) {
//     console.log(callerId.phoneNumber);
//   });
// });


// // callerId informaiton
// { account_sid: 'AC596cdbd2f742d54d4c007b2219dcc5a2',
//   phone_number: 'number',
//   friendly_name: 'text',
//   validation_code: 'number',
//   call_sid: 'CA393fc9ef254e25b2eca6c27b3b5e9eba',
//   accountSid: 'AC596cdbd2f742d54d4c007b2219dcc5a2',
//   phoneNumber: 'same above',
//   friendlyName: 'same above',
//   validationCode: 'same as valadation_code',
//   callSid: 'CA393fc9ef254e25b2eca6c27b3b5e9eba' }

