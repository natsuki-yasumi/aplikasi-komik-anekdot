import { Sequelize } from "sequelize";

export const db = new Sequelize('db_app_anekdot','root','feri123',{
    host: 'localhost',
    dialect: 'mysql'
})

await db.sync({ force: true });