import  { Model, DataTypes } from 'sequelize';
import sequelize from '../database/index';
export default class Food extends Model{

}

Food.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    food_name:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    available:{
        type:DataTypes.BOOLEAN,
        allowNull: true
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},{sequelize, modelName: 'Food'})
