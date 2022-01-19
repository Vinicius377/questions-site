import connection from "../database/index.js"
import { DataTypes } from "sequelize"

const Response = connection.define("Response", {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  count_like: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
})

Response.sync({ force: false }).catch(e => console.log(e))

export default Response
