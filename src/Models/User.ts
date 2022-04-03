import  { Sequelize,Model, DataTypes } from 'sequelize';
import sequelize from '../database/index';
export default class User extends Model{

}

User.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    firstname:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    lastname:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    Phone:{
        type:DataTypes.NUMBER,
        allowNull:false
    }
},{sequelize, modelName: 'User'})
