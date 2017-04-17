angular.module('xdpie')
    .factory('quesFormSubmit', function ($http) {
        return {
            questionary: function (charge, cost, imp, sug) {
                return $http({
                    method: 'POST',
                    url: '/home/quesForm',
                    data: {
                        charging: charge,
                        costs: cost,
                        improvements: imp,
                        suggestions: sug
                    }
                })
            }
        }
    })
    .controller('formController', function ($scope, quesFormSubmit) {
        $scope.description = '下表是我们做的客户调查，涉及我们整个网站的转型，如果您以前使用过我们的规划器，如果您觉得好用，请您在百忙之中填写一下，谢谢！';
        $scope.usable = false;
        $scope.disableCost = function () {
            $scope.usable = true;
        };
        $scope.enableCost = function () {
            $scope.usable = false;
        };
        $scope.formSubmit = function () {
            var form = $scope.quesForm;
            var charge = $scope.charging;
            var cost = form.cost.$viewValue;
            var imp = form.improvement.$viewValue;
            var sug = form.suggestion.$viewValue;
            if (cost == undefined && charge == '收费') {
                return false;
            }
            else {
                quesFormSubmit.questionary(charge, cost, imp, sug).then(function (res) {
                    if (res.data.status == 'ok') {
                        window.location='/views/home/index.html#!/success';
                    }
                    else {
                        /*                        $uibModal.open({
                         animation: true,
                         keyboard: true,
                         appendTo: '',
                         ariaLabelledBy: 'error-title',
                         ariaDescribedBy: 'error-body',
                         templateUrl: 'errorMsg',
                         scope: $scope
                         })*/
                        alert('提交失败，请重新提交')
                    }
                })
            }
            $scope.value = '';
        };
    });
