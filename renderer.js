$('#form-new-item').click(function () {
    $('#new-item-container').addClass('show')
    $('#new-item-container').removeClass('hide')
})

function apiCall() {
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
}

function addItems(jumlahitem) {
    for (let index = 0; index < jumlahitem; index++) {
        let element = `<div class="items-container">
        <div class="item-logo">
                <img src="./assets/icons/favicon.ico" class="item-image-logo" width="20" height="20">
              </div>
        <div class="item-named" >
          <span class="passwordtitle">${index + 2}. Google</span>
          <span class="passwordemail">${index + 2}. ramdhany.kaisupy@gmail.com</span>
        </div>
        <div class="item-option">
                <img src="./assets/icons/ellipsis-solid.svg" width="15" height="15">
              </div>
      </div>`;
        $('#main-item-container').append(element);

    }
}
$('#icon-close-new-item').click(function () {
    $('#new-item-container').removeClass('show')
    $('#new-item-container').addClass('hide')

})



$(document).ready(function () {
    addItems(10)

    $('.items-container').each(function () {
        
        $(this).hover(function () {
            var $item = $(this);
            $('.item-option img').each(function(){
                $(this).hide();
            })
            $item.find('.item-option img').each(function () {
                $(this).show()
            })
        })
    })
});
