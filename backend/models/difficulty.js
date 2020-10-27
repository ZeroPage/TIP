/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('difficulty', {
    difficulty_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    problem_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'problem',
        key: 'problem_id'
      },
      unique: "difficulty_ibfk_1"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'member',
        key: 'member_id'
      },
      unique: "difficulty_ibfk_2"
    },
    difficulty: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'difficulty',
    schema: 'tips',
    timestamps: false
    });
};
