$(document).ready(function() {


var btnSave = function (context) {
  var ui = $.summernote.ui;
  // create button
  var button = ui.button({
    contents: '<i class="fa fa-floppy-o" style="color:purple"/>',
    tooltip: 'Save changed data',
    click: function () {
      // invoke insertText method with 'hello' on editor module.
      //context.invoke('editor.insertText', 'hello');
      var content = $('#summernote').summernote('code');
      console.log('contents :', content);
    }
  });

  return button.render();   // return button as jquery object 
}

  $('#summernote').summernote({
          height: 300,                 // set editor height
            minHeight: null,             // set minimum height of editor
            maxHeight: null,             // set maximum height of editor
            focus: true,                // set focus to editable area after initializing summernote

            toolbar: [
                ['btnSave', ['saveButton']],
                //['style', ['bold', 'italic', 'underline', 'strikethrough' ,'clear']],
                //['font', [ 'superscript', 'subscript']],
                //['fontsize', ['fontsize']],
                //['color', ['color']],
                //['para', ['ul', 'ol', 'paragraph','style']],
                //['height', ['height']],
                //['fontname', ['fontname']],

                //['insert', ['picture','link','video','table','hr']],
                //['misc', ['fullscreen','codeview','undo','redo','help']]
                ['style',['ul', 'style']],
                ['btnFullScreen',['fullscreen']]
            ],

            styleTags: ['h1', 'h3', 'p', 'blockquote', 'pre'],

            buttons: {
                saveButton: btnSave
            },
  });


      $('.list-group a').click(function(e) {
        if($(this).attr('class') == 'list-group-item active')
          return;
        $('.list-group').find('a').removeClass('active');
        $(this).addClass('active');
    });
});