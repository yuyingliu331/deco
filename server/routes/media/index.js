const express = require('express');
const s3Proxy = require('s3-proxy');
const router = express.Router();
const secret = require('../../../secrets.json');

router.get('/media/*', s3Proxy({
  bucket: 'deco_development',
  accessKeyId: secret.AWS.access_key_idsecret,
  secretAccessKey: secret.AWS.secret_access_keysecret,
  overrideCacheControl: 'max-age=100000'
}));
