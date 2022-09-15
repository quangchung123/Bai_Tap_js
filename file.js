var toDay = new Date ();
var dd = toDay.getDay ();

var mm = toDay.getMonth () + 1;
var yyyy = toDay.getFullYear();
if(dd<10){
    dd = '0' + dd;
}
if (mm < 10){
    mm = '0' +mm;
}

toDay = mm + '-' + dd + '-' +yyyy;
console.log( toDay);
toDay = mm + '/' + dd + '/' +yyyy;
console.log( toDay);
toDay = dd + '-' + mm + '-' +yyyy;
console.log( toDay);
toDay = dd + '/' + mm + '/' +yyyy;
console.log( toDay);


