import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from 'sequelize';

import sequelize from '@/config/mysql';
import { initTable } from '@/init/initDb';
import { IWsRoom } from '@/interface';

interface GoodsModel
    extends Model<
        InferAttributes<GoodsModel>,
        InferCreationAttributes<GoodsModel>
    >,
    IWsRoom { }

const model = sequelize.define<GoodsModel>(
    'live_config',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        paranoid: true,
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    }
);

initTable({ model, sequelize });

export default model;
