// Update with your config settings. Made with command "knex init -x ts"

export default {
  development: {
    client: "postgresql",
    connection: {
      database: "graphql_typed_db",
      user: "graphql_typed_user",
      password: "graphql_typed_password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
      // tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
      // tableName: "knex_migrations",
    },
  },
};
