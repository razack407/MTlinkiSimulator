/*!
* Start Bootstrap - Bare v5.0.3 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
document.addEventListener ('DOMContentLoaded',function() {
    "use strict";
   /* var loaded = true; */
    console.log ('now we are ready');
})
/*var firstShiftSubmitButton =document.querySelector('#inputFirstShift');*/
var $firstShiftSubmitButton =$('#inputFirstShift');
console.log($firstShiftSubmitButton);

$firstShiftSubmitButton.on('click',shiftStartTime);

function shiftStartTime() {
    var myid=document.getElementById('inputShift1From');
    console.log (myid.value);
} ;
