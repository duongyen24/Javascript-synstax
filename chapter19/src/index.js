import {addTitle, styleBody} from  './dom';

import users, {getPremium} from  './data';


console.log('index file');

addTitle('this come from index file');

styleBody();

const result = getPremium(users);

console.log(users, result);

console.log('auto webpack');
