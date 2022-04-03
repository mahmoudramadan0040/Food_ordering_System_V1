import  { Model, DataTypes } from 'sequelize';
import sequelize from '../database/index';
export default class Category extends Model{

}

Category.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    category_name:{
        type:DataTypes.TEXT,
        allowNull: false,
    }
},{sequelize, modelName: 'Category'})
