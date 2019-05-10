$(function() {
    $('#addLinkBtn').click(function(){
        $('#linkList').append('<li><a href="' + $('#addLinkURL').val() + '">' + $('#addLinkName').val() + '</a></li>');
    });

    $('#toggleLinks').click(function(){
        $('#linkList').toggle();
    });

    /*$('#deleteMode').click(function(){
        $(':not(#deleteMode)').on("click", function(){
            this.remove();
        });
    });*/
});