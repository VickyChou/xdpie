/**
 *
 * @returns {{db: Sequelize}}
 */

var Sequelize = require('sequelize');
var user , charging;

module.exports = {
    init: function () {

        var sequelize = new Sequelize('xdpie-db', 'root', '123456', {
            host: 'localhost',
            dialect: 'mysql'
        });

        // 系统用户
         user = sequelize.define('user', {
            phone: {
                type: Sequelize.STRING,
                unique: true
            },
            email: {
                type: Sequelize.STRING,
                unique: true
            },
            weixin: {
                type: Sequelize.STRING,
                unique: true
            },
            qq: {
                type: Sequelize.STRING,
                unique: true
            },
            password: {
                type: Sequelize.STRING
            }
        });
        //是否同意收费，收费标准
         charging = sequelize.define('charging', {
            charge: {
                type: Sequelize.STRING
            },
            costs: {
                type: Sequelize.STRING
            },
            improvements: {
                type: Sequelize.STRING
            },
            suggestions: {
                type: Sequelize.STRING
            }
        });

        user.sync({force: false});
        charging.sync({force: false});
    },

    user:function(){
        return user;
    },
    charging:function(){
     return charging;
    }

};
