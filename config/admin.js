module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ju47489ehdh83ur9w4u7b49fu84jdu94hu4'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '8u8rur8urhfeur93894urklew94u94uth49r0eh94u39r09090u8h4ht849i33959h8u'),
    secrets: {
      encryptionKey: env('5he8n388su9us9u348ye83y93uie03jhs83y39u383ueh8w44hi39598'),
    },
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '9iri49ir033rii4t95hjwr93993jj49fni4999r94r9ut4'),
    },
  },
});
