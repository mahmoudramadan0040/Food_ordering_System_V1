import  { Sequelize,Model, DataTypes } from 'sequelize';
import sequelize from '../database/index';
export default class Cart extends Model{

}

Cart.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    
    
},{sequelize, modelName: 'Cart'})
