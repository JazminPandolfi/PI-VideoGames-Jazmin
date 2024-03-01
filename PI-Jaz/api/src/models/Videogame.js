const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Videogame', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    platforms:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    img:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    released: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
},
{
    timestamps : false,
}
);
};
