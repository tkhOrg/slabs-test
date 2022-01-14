module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
      username: process.env.DB_USERNAME,
      password: null,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST
    }
  };
