// var redBtn = document.getElementById('btn1');
// var greenBtn = document.getElementById('btn2');
// var blueBtn = document.getElementById('btn3');
// var defaultBtn = document.getElementById('btn4');
// var divOne = document.getElementById('divOne');
//
// redBtn.onclick = function () {
//     divOne.style.backgroundColor= 'red';
//     divOne.style.border= '0px';
//     divOne.style.borderRadius = '0'
// }
//
// greenBtn.onclick = function () {
//     divOne.style.backgroundColor = 'green';
//     divOne.style.borderRadius = '50%'
// }
//
// blueBtn.onclick = function () {
//     //document.getElementById('divOne').style.backgroundColor = 'blue';
//     //divOne.style.visibility = 'hidden';
//     divOne.style.transform = 'rotate(90deg)'
//     divOne.style.margin = '100px'
//     //divOne.style.transition = 'all 2s'
// }
//
// defaultBtn.onclick = function () {
//     divOne.style.border= '2px solid black';
//     divOne.style.backgroundColor = 'transparent'
//     divOne.style.borderRadius = '0'
//     divOne.style.visibility = 'visible';
// }

// var mainImage = document.getElementById('mainImage');
//
// // var imageAttributes = mainImage.getAttribute('height');
// // alert(imageAttributes);
//
// var imageAttributes = mainImage.setAttribute('src','images/ny_city-1348x500.jpg')
//

// var mainImage = document.getElementById('mainImage');
// var img1 = document.getElementById('img1');
// var img2 = document.getElementById('img2');
// var img3 = document.getElementById('img3');
// var img4 = document.getElementById('img4');
//
// img1.onclick = function () {
//     var changeImg = img1.getAttribute('src');
//     mainImage.setAttribute('src',changeImg);
// }
// img2.onclick = function () {
//     var changeImg = img2.getAttribute('src');
//     mainImage.setAttribute('src',changeImg);
// }
// img3.onclick = function () {
//     var changeImg = img3.getAttribute('src');
//     mainImage.setAttribute('src',changeImg);
// }
// img4.onclick = function () {
//     var changeImg = img4.getAttribute('src');
//     mainImage.setAttribute('src',changeImg);
// }

// var imageData = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'];
// var index = 0;
//
// function sliderImage() {
//     var mainImage = document.getElementById('mainImage');
//     mainImage.setAttribute('src',imageData[index]);
//     index++;
//     if(index >= imageData.length){
//         index = 0;
//     }
// }
//
// setInterval(sliderImage, 2000);

//$('#head1').html('This is jquery');
//
// $('#btn').click(function () {
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     var fullName = firstName+" "+lastName;
//     $('#fullName').text(fullName);
// })

// $('#firstName').keyup(function () {
//     var firstName = $('#firstName').val();
//     $('#res1').text(firstName);
// })
//
// $('#lastName').keyup(function () {
//     var lastName = $('#lastName').val();
//     $('#res2').text(lastName);
// })
//
// $('#lastName').blur(function () {
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     $('#res3').text(firstName+" "+lastName);
// })
//
// $('#hide').click(function () {
//     $('.my-div').hide();
// })
// $('#show').click(function () {
//     $('.my-div').show();
// })
// $('#toggle').click(function () {
//     $('.my-div').toggle();
// })
// $('#fade').click(function () {
//     $('.my-div').fadeToggle(1000);
// })

$('#slideShow > div:gt(0)').hide();

setInterval(function () {
    $('#slideShow > div:first')
            .fadeOut(3000)
            .next()
            .fadeIn(3000)
            .end()
            .appendTo('#slideShow')
},2000)







