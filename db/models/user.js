const bcrypt = require('bcrypt')
'use strict';
const {
  Model,
  Sequelize,
  DataTypes
} = require('sequelize');
const sequelize = require('../../config/database')
module.exports = sequelize.define('User',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  role: {
    type: DataTypes.ENUM('organization','hospital','donar')

  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  confirmPassword: {
    type: DataTypes.VIRTUAL,
    set(value) {
      if(value == this.password) {
        const hashPassword = bcrypt.hashSync(value,10);
        this.setDataValue('password',hashPassword)

      } else {
        throw new Error (
          'Password and confirm password must be the same'
        )
      }
    }
  },
  organizationName: {
    type: DataTypes.STRING
  },
  hospitalName: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  deletedAt:{
    type: DataTypes.DATE

  }
},{
  paranoid:true,
  freezeTableName: true,
  modelName: 'User',
})