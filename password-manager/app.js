console.log('starting password manager');

var storage = require ('node-persist');
storage.initSync();

storage.setItemSync('accounts', [{
    username: 'Andrew',
    balance: 0
}]);
//var name = storage.getItemSync('name');
//console.log('Save name is ' + name);