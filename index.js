
function showDiv(year_val) {
    console.log(year_val);
    var display_val =  $(`.${year_val}`).css('display');
    console.log(display_val);
    var year_4_digit = year_val.slice(1,5);
    if (display_val == 'none'){
        $(`.${year_val}`).css({'display':'block'});
        $(`#e${year_4_digit}`).css({'background-color':'#5c5761'});
    }
    else{
        $(`.${year_val}`).css({'display':'none'});
        $(`#e${year_4_digit}`).css({'background-color':'#1a0033'});
    }
}
