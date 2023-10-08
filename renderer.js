$('#form-new-item').click(function () {
    $('#new-item-container').addClass('show')

    $('#new-item-container').removeClass('hide')
    // $.ajax({
    //     type: 'GET',
    //     url: "http://192.168.1.10:3000/password?password=password2",

    //     dataType: 'json',
    //     success: function (result) {
    //         console.log(JSON.stringify(result))
    //         alert(result)
    //     },
    //     error:function(error){
    //         alert(error)
    //     }
    // });
})

function addItems(jumlahitem){
    for (let index = 0; index < jumlahitem; index++) {
        let element= `<div class="items-container">
        <input type="checkbox" name="items" id="1">
        <img src="./assets/images/contoh%20icon.ico" class="" id="image1" width="20" height="20">
        <div class="item-named" >
          <span>Item ${index+3}</span>
        </div>
      </div>`;
      $('#main-item-container').append(element);
        
    }
}
$('#icon-close-new-item').click(function(){
    $('#new-item-container').removeClass('show')
    $('#new-item-container').addClass('hide')
    
})
$(document).ready(function () {
    addItems(10)

});

// const information = document.getElementById('form-new-item')
// const electron = require('electron');
// const net = electron.remote.net;

// information.addEventListener('click', () => {
//     alert("you just click new item")
//     ApiCall();
// })

// function ApiCall() {
//     const request = net.request({
//         method: 'GET',
//         protocol: 'http:',
//         hostname: 'http://192.168.1.10:3000/password?passwordname=password2',
//         path: '/get',
//         redirect: 'follow'
//     });
//     request.on('response', (response) => {
//         console.log(`STATUS: ${response.statusCode}`);
//         console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

//         response.on('data', (chunk) => {
//             console.log(`BODY: ${chunk}`)
//         });
//     });
//     request.on('finish', () => {
//         console.log('Request is Finished')
//     });
//     request.on('abort', () => {
//         console.log('Request is Aborted')
//     });
//     request.on('error', (error) => {
//         console.log(`ERROR: ${JSON.stringify(error)}`)
//     });
//     request.on('close', (error) => {
//         console.log('Last Transaction has occurred')
//     });
//     request.setHeader('Content-Type', 'application/json');
//     request.end()
// }