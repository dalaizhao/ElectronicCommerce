//下面用jquery写
$(window).on('load', function () {
    waterFall();
    $(window).on('srcoll',function () {
        if(checkScrollSlide){
           //需要解析json，并显示出来

        }
    })
})
function waterFall() {
    var $boxs = $('#of_main_body > div');
    var w = $boxs.eq(0).outerWidth();
    var cols = Math.floor($('#of_main').width() / w);
    $('#of_main_body').width(w * cols).css('margin', '0 auto');
    var hArr = [];
    $boxs.each(function (index, value) {
        // console.log(index);
        var h = $boxs.eq(index).outerHeight();
        if (index < cols) {
            hArr[index] = h;
        } else {
            var minH = Math.min.apply(null, hArr);
            var minHIndex = $.inArray(minH, hArr);
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHIndex * w + 'px'
            })
            hArr[minHIndex]+=$boxs.eq(index).outerHeight();
        }
    })
}

function checkScrollSlide() {
    var $lastBox=$('#of_main_body >div ').last();
    var lastBoxdis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    var scrollTop=$(window).scrollTop();
    var documentH=$(window).height();
    return (lastBoxDis < scrollTop+documentH)?true:false;
}
