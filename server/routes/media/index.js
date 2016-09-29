const express = require('express');
const router = express.Router();
const s3Proxy = require('s3-proxy');

router.get('/media/*', s3Proxy({
  bucket: 'bucket_name',
  prefix: 'optional_s3_path_prefix',
  accessKeyId: 'aws_access_key_id',
  secretAccessKey: 'aws_secret_access_key',
  overrideCacheControl: 'max-age=100000'
}));

module.exports = router;
