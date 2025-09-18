module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ju47489ehdh83ur9w4u7b49fu84jdu94hu4'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '2c39ae9805be40786bcf86e223fcdbf35079660df1f0a293de089122eddf9361'),
    secrets: {
      encryptionKey: env('5he8n388su9us9u348ye83y93uie03jhs83y39u383ueh8w44hi39598'),
    },
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '1169cbff33835b0035bbf749b1864dcc80b3963a8f67e50c7e6f92a0fd896282'),
    },
  },
});
