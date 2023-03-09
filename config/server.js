module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['S36j4Q8XjIWTkIj8IFoFPw==','TjjBD3jEehHkdSeUQ6Ed2w==','8w86d5y6KnKndmHq5IpWNA==','nqEo/zbm69ANnXcer4WtjQ=='],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
