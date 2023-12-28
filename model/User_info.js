const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const User_info = sequelize.define('User_info', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'user_info', // 테이블명을 직접 지정
});

module.exports = User_info;