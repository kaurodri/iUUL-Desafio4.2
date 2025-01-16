import { Model, DataTypes } from 'sequelize';

export class ciclistaCreate extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'INATIVO',
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nascimento: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            cpf: {
                type: DataTypes.STRING(11),
                allowNull: false,
                unique: true,
            },
            ppNumero: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            ppValidade: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            ppPais: {
                type: DataTypes.STRING(2),
                allowNull: false,
            },
            nacionalidade: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            urlFotoDocumento: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        }, {
            sequelize,
            modelName: 'ciclistaCreate',
            tableName: 'ciclistas',
            timestamps: false,
        })
    }
};
