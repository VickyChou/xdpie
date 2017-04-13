/**
 * Created by vipyo on 2016/12/30.
 */

module.exports  = function (success,data) {
    this.data = data || {};
    this.status = (success)?'ok':'error';
};