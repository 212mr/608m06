/**
 * Created by mengruzhang on 7/11/17.
 */
//
// function myFunction() {
//     var imgArray = document.getElementsByTagName('img');
//     for (var i = 0; i < imgArray.length; i++) {
//         imgArray[i].addEventListener('mouseover', function () {
//             this.classList.add('activated');
//         });
//     }
// }

// {document.getElementById('inc').value = ++i;}

// window.addEventListener('DOMContentLoaded', myFunction);
//



// function addCart() {
//     var minusiconArray = document.getElementsByClassName('minus');
//     for (var i = 0; i < minusiconArray.length; i++) {
//         minusiconArray[i].addEventListener('onclick', function () {
//             var addPArray = document.getElementsByClassName('add')[0];
//             for (var i = 0; i < minusiconArray.length; i++) {
//                 addPArray[i]= document.getElementsByClassName('add').innerHTML =" years old.";
//             }
//
//         });
//     }
// }
// window.addEventListener('DOMContentLoaded', addCart);


// function addCart() {
//     var minusiconArray = document.getElementsByClassName('minus');
//     for (var i = 0; i < minusiconArray.length; i++) {
//         minusiconArray[i].addEventListener('onclick', function () {
//             document.getElementById("add99").innerHTML =" years old.";
//         })
//     })
//
// window.addEventListener('DOMContentLoaded', addCart);

    $(function(){

        $(".minus").on("click",function(){
                $(".add").html(" years old");
        })

    })