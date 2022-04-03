import  { Model, DataTypes } from 'sequelize';
import sequelize from '../database/index';
export default class Order extends Model{

}

Order.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    order_ticket:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    time:{
        type:DataTypes.TIME,
        allowNull: false
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{sequelize, modelName: 'Order'})
