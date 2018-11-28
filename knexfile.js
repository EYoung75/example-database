// Update with your config settings.

module.exports = {

  development: {
    client: 'sq',
    connection: "postgresql://localhost/example-database"
  },

  production: {
    client: 'sq',
    connection: "connection: process.env.DATABASE_URL"
  }

};
