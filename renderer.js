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

function GetAllPasswordItem(){
    const URl="http://localhost:3000/password";
    $.ajax({
        type: 'GET',
        url: URl,
        dataType: 'json',
        success: function (result) {
            console.log(JSON.stringify(result))
            addItems(result._data)
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
        },
        error:function(error){
            alert(error)
        }
    });
}

function addItems(item) {
    for (let i = 0; i < item.length; i++) {
        let data = item[i];
        let element = `<div class="items-container">
                            <div class="item-logo">
                                <img src="${data.iconurl}" class="item-image-logo" width="20" height="20">
                            </div>
                            <div class="item-named" >
                                <span class="passwordtitle">${data.passwordname}</span>
                                <span class="passwordemail">${data.email}</span>
                            </div>
                            <div class="item-option">
                                <img src="./assets/icons/ellipsis-solid.svg" width="15" height="15">
                            </div>
                        </div>`;
        $('#main-item-container').append(element);
    }
}
$('#icon-close-new-item').click(function () {
    $('#new-item-container').removeClass('show');
    $('#new-item-container').addClass('hide');
})



$(document).ready(function () {
    GetAllPasswordItem();
});
