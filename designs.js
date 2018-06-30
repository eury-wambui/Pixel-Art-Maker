// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

    $('#sizePicker').submit(function makeGrid(grid)
    {
        $('table tr').remove();
        var height=$('#inputHeight').val();
        var columns=$('#inputWeight').val();
        for(var h=1;h<=height;h=h+1)
        {
            $('table').append('<tr></tr>');
            for(var w=1;w<=columns;w=w+1)
            {
                $('tr:last').append('<td></td>');
                $('td').attr('class','grid');
            }
        }

    
grid.preventDefault();
$('.grid').click(function(event)
{
    var gridColor=$('#colorPicker').val();
    $(event.target).css('background-color',gridColor)
});

});

    

    
