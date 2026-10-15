
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Livro = sequelize.define("Livro", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },

    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1
        }
    },

    disponivel: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

    autorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Livro;
