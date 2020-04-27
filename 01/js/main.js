$(function(){
    // 
    var duration = 600;

    // buttons1 ----------------------------------------
    // buttons1  1行目
    $('#buttons1 button:nth-child(-n+4)')
    .on('mouseover', function () {
        $(this).stop(true).animate({
            backgroundColor: '#ae5e9b',
            color: "#fff"
        },duration);
    })
    .on('mouseout', function(){
        $(this).stop(true).animate({
            backgroundColor: '#fff',
            color: '#ebc000'
        }, duration);
    });

    // buttons1  2行目
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
        .on('mouseover', function(){
            $(this).stop().animate({
                borderWidth: '24px',
                color: "#ae5e9b"
        },duration,'easeInOutBounce');
    })
    .on('mouseout', function(){
        $(this).stop().animate({
            borderWidth: '0px',
            color: '#ebc000'
        },duration,'easeOutBounce');
    });
    

    // buttons1  3行目
    $('#buttons1 button:nth-child(n+9)')
    .on('mouseover',function(){
        $(this).find('> span').stop(true).animate({
            width: '100%'
        },duration,'easeOutQuad');
    })
        .on('mouseout',function(){
            $(this).find('> span').stop().animate({
                width: '0%'
            },duration,'easeOutQuad');
        });
    

});
