import uploadPhoto from './uploadPhoto.js';

uploadPhoto('image.jpg').catch(error => {
    console.log(error.message);
});
