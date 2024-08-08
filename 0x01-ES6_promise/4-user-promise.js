import signUpUser from './signUpUser.js';

signUpUser('Bob', 'Dylan').then(user => {
    console.log(user); 
});
