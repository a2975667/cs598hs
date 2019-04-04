$.material.init();

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey.StylesManager.applyTheme("bootstrapmaterial");

var json = json_info

window.survey = new Survey.Model(json);
survey.showCompletedPage = false;

survey.onComplete.add(function (result) {
    
    var seq = JSON.parse(Cookies.get('next'))
    var next_url = seq.shift();
    Cookies.set('next', JSON.stringify(seq));

    $.ajax({
        type: "post",
        url: "/test",
        data: JSON.stringify(result.data),
        success: function (result) {
            alert('Done.')
            window.location.href = next_url;
        },
        dataType: "json",
        contentType: 'application/json'
      });
      
      window.location.href = next_url;
      //alert(JSON.stringify(result.data));
    //document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});

//Create showdown markdown converter
var converter = new showdown.Converter();
survey
    .onTextMarkdown
    .add(function (survey, options) {
        //convert the markdown text to html
        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
    });


$("#surveyElement").Survey({
    model: survey
});