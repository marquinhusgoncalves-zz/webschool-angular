angular.module('User', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/users', {
                templateUrl: 'views/users-list.html',
                controller: 'UserController',
                controllerAs: 'User'
            })
            .when('/users/:id', {
                templateUrl: 'views/users-details.html',
                controller: 'UserDetailsController',
                controllerAs: 'UserDetails'
            });
    }])
    .controller('UserController', UserController)
    .controller('UserDetailsController', UserDetailsController);

function UserController() {
    var vm = this;
    vm.titulo = "Angular";
    vm.btnSaving = false;
    vm.btnEditing = true;
    vm.reverse = false;
    vm.users = [{
        name: 'Marcus',
        email: 'marcus@oceanoweb.com.br',
        type: 'teacher',
        active: true
    }, {
        name: 'Vinicius',
        email: 'vinicius@oceanoweb.com.br',
        type: 'student',
        active: false
    }, {
        name: 'Gonçalves',
        email: 'goncalves@oceanoweb.com.br',
        type: 'teacher',
        active: false
    }, {
        name: 'Jessica',
        email: 'jessica@oceanoweb.com.br',
        type: 'student',
        active: true
    }, {
        name: 'Serpa',
        email: 'serpa@oceanoweb.com.br',
        type: 'student',
        active: true
    }];

    function getKeyLength() {
        return Object.keys(angular.copy(vm.users[0])).length;
    }
    vm.keyslength = getKeyLength();

    vm.orderByName = orderByName;

    function orderByName() {
        vm.predicate = 'name';
        vm.reverse = !vm.reverse;
    }

    vm.orderByEmail = orderByEmail;

    function orderByEmail() {
        vm.predicate = 'email';
        vm.reverse = !vm.reverse;
    }

    vm.add = add;

    function add(user) {
        vm.users.push(angular.copy(user));
        vm.form = {};
    }
    vm.remove = remove;

    function remove(users) {
        vm.users = users.filter(function(el) {
            return !el.selecionado
        });
    }
    vm.edit = edit;

    function edit(user, index) {
        vm.form = angular.copy(user);
        vm.form.index = index;
        vm.btnSaving = true;
        vm.btnEditing = true;
        vm.editing = true;
    }
    vm.save = save;

    function save(user) {
        var users = vm.users.map(function(el, i) {
            if (i === user.index) {
                delete user.index;
                return user;
            }
            return el;
        });
        vm.users = users;
        vm.btnSaving = false;
        vm.btnEditing = true;
    }
    vm.getTituloStyle = function() {
        return "atom-titulo";
    };

    vm.submitForm = submitForm;

    function submitForm(user) {
        add(user);
    }
}

function UserDetailsController($routeParams) {
    var vm = this;
    vm.routeParams = $routeParams;
    vm.titulo = "Angular";
    vm.btnSaving = false;
    vm.btnEditing = true;
    vm.reverse = false;
    vm.users = [{
        name: 'Marcus',
        email: 'marcus@oceanoweb.com.br',
        type: 'teacher',
        active: true
    }, {
        name: 'Vinicius',
        email: 'vinicius@oceanoweb.com.br',
        type: 'student',
        active: false
    }, {
        name: 'Gonçalves',
        email: 'goncalves@oceanoweb.com.br',
        type: 'teacher',
        active: false
    }, {
        name: 'Jessica',
        email: 'jessica@oceanoweb.com.br',
        type: 'student',
        active: true
    }, {
        name: 'Serpa',
        email: 'serpa@oceanoweb.com.br',
        type: 'student',
        active: true
    }];

    function getKeyLength() {
        return Object.keys(angular.copy(vm.users[0])).length;
    }
    vm.keyslength = getKeyLength();

    vm.orderByName = orderByName;

    function orderByName() {
        vm.predicate = 'name';
        vm.reverse = !vm.reverse;
    }

    vm.orderByEmail = orderByEmail;

    function orderByEmail() {
        vm.predicate = 'email';
        vm.reverse = !vm.reverse;
    }

    vm.add = add;

    function add(user) {
        vm.users.push(angular.copy(user));
        vm.form = {};
    }
    vm.remove = remove;

    function remove(users) {
        vm.users = users.filter(function(el) {
            return !el.selecionado
        });
    }
    vm.edit = edit;

    function edit(user, index) {
        vm.form = angular.copy(user);
        vm.form.index = index;
        vm.btnSaving = true;
        vm.btnEditing = true;
        vm.editing = true;
    }
    vm.save = save;

    function save(user) {
        var users = vm.users.map(function(el, i) {
            if (i === user.index) {
                delete user.index;
                return user;
            }
            return el;
        });
        vm.users = users;
        vm.btnSaving = false;
        vm.btnEditing = true;
    }
    vm.getTituloStyle = function() {
        return "atom-titulo";
    };

    vm.submitForm = submitForm;

    function submitForm(user) {
        add(user);
    }
}