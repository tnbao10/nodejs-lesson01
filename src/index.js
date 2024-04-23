
import { sum2Num, printConsole } from "./util.js"; 
import sub2Num from "./util.js"; // Default-C1
import {default as sub2Num} from "./ultil.js"; // Default-C2

function main(){
    console.log("a + b = ",sum2Num(1,2));
    printConsole();
    console.log("a - b = ",sub2Num(1,2));
    console.log("123");
    console.log("Bu nginh");
}

main();