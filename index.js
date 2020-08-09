
function showDiv(year_val) {
    console.log(year_val);
    var display_val =  $(`.${year_val}`).css('display');
    console.log(display_val);
    if (display_val == 'none'){
        $(`.${year_val}`).css({'display':'block'});
    }
    else{
        $(`.${year_val}`).css({'display':'none'});
    }
}
