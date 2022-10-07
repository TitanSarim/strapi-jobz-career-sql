module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'bbegfpss_jobzcareer'),
      user: env('DATABASE_USERNAME', 'bbegfpss_root'),
      password: env('DATABASE_PASSWORD', 'Dani@444'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});



// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'jobzcareer'),
//       user: env('DATABASE_USERNAME', 'root'),
//       password: env('DATABASE_PASSWORD', 'root'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });