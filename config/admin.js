
module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'GVPlEbvwyw7GyQO0/pRq5g=='),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ecRdU72doMtcD6NGYsFaYQ=='),
  },
  transfer: { 
    token: { 
      salt: env('TRANSFER_TOKEN_SALT', 'kxFYaIngXXjRHj22iLMsiQ=='),
    } 
  },
});
