import Sequelize from 'sequelize';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT
});