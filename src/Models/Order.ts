import  { Sequelize,Model, DataTypes } from 'sequelize';
import db from '../database/index';
export default class Order extends Model{

}

Order.init({
    
},{db,modelName:"Order"})

