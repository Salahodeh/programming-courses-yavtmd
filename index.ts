//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//################################################################
let mynumber: number;
let k: number;
let mynumber1: number;

mynumber = parseInt(prompt(' المرجو كتابة عدد'));

mynumber1 = 0;

for (k = 1; k <= mynumber; k++) {
  mynumber = mynumber + k;
}
console.log(mynumber);
