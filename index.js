
function check_display_all(target_class,all_blocks){
    for (var i=0;i<all_blocks.length;i++){
        var class_bool = $(all_blocks[i]).hasClass(target_class);
        if (!class_bool){
            $(all_blocks[i]).css({'display':'none'});
        }
    }
}
function showDiv(year_val) {
    console.log(year_val);
    var all_blocks = $('.cd-timeline-content');
    var display_val =  $(`.${year_val}`).css('display');
    console.log(display_val);
    var year_4_digit = year_val.slice(1,5);
    if (display_val == 'none'){
        check_display_all(year_val,all_blocks);
        $(`.${year_val}`).css({'display':'block'});
        $(`#e${year_4_digit}`).css({'background-color':'#5c5761'});
    }
    else{
        $(`.${year_val}`).css({'display':'none'});
        $(`#e${year_4_digit}`).css({'background-color':'#1a0033'});
    }
}
