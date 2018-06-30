let height, width, color, reset;
function makeGrid() {
    $("#pixel").html("");
    height = $("#input_height").val();
    width = $("#input_width").val();
    if (height > 50 || width > 50 || height < 1 || width < 1) {
        if (!error.classList.contains("error")) {
            error.classList.toggle("error");
            error.innerText = "the dimension has to be smaller than 50 and bigger than 0";
            reverse();
        }
    } else {
        error.innerText = "";
        $("div").removeClass("error");
        for (let i = 0; i < height; i++) {
            $('#pixel').append('<tr></tr>');
        }
        for (let j = 0; j < width; j++) {
            $('#pixel tr').each(function () {
                $(this).append('<td></td>');
            });
        }
    }
}
color = $('#colorPicker');
$(document).on("mousedown", "tr td", function () {
    let colorValue = color.val();
    $(this).css('background-color', colorValue);
    $('tr td').bind("mousemove", function () {
        let colorValue = color.val();
        $(this).css('background-color', colorValue);
    }).mouseup(function() {
        $('td').unbind('mousemove');
    });
    $('tr td').on('dblclick',function () {
        $(this).css('background-color', "#FFFFFF")
    })
});
reset = $("#pixel").html();
function reverse() {
    $("#pixel").html(reset);
}
