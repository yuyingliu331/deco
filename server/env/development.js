var secret = require('../../secrets');

module.exports = {
  SESSION_SECRET: secret.sessionSecret,
  GOOGLE: {
    clientID: secret.authentication.googleAuth.clientID,
    clientSecret: secret.authentication.googleAuth.clientSecret,
    callbackURL: secret.authentication.googleAuth.callbackURL
  },
  FACEBOOK: {
    clientID: secret.authentication.facebookAuth.clientID,
    clientSecret: secret.authentication.facebookAuth.clientSecret,
    callbackURL: secret.authentication.facebookAuth.callbackURL
  },
  AWS: {
    accessKeyId: secret.AWS.AccessKeyId,
    secretAccessKey: secret.AWS.SecretAccessKey
  }
};
