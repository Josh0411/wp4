import { add } from './utils';
import _ from "lodash";

let obj = { info: { test: 123 } };


console.log(add(3, 6));

console.log(_.get(obj, "info.test"));




import ( /* webpackChunkName:"asyncUtils" */ './asyncUtils').then((mod) => {
    console.log(mod);
    console.log('asyncUtils-mutil', mod.multi(6, 7));
});
