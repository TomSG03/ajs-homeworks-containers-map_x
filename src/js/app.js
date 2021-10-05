import ErrorRepository from './ErrorRepository';

const appError = new ErrorRepository();

appError.add(255, 'Ok');
appError.add(13, 'App error');

console.log(appError.translate(13));
console.log(appError.translate(255));
console.log(appError.translate(1));

