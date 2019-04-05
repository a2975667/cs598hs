$.material.init();

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey.StylesManager.applyTheme("bootstrapmaterial");

var json = json_info
var page_url = window.location.pathname;
var submit_url = ''
if (page_url == '/normal/demographic'){
    submit_url='/submit_demographic'
}else if (page_url == '/normal/likert_version'){
    submit_url='/submit_likert'
}else{
    submit_url='/submit_followup'
}

window.survey = new Survey.Model(json);
survey.showCompletedPage = false;
survey.completeText = 'Next'

survey.onComplete.add(function (result) {
    
    var seq = JSON.parse(Cookies.get('next'))
    var next_url = seq.shift();
    Cookies.set('next', JSON.stringify(seq));

    $.ajax({
        type: "post",
        url: submit_url,
        data: JSON.stringify(result.data),
        success: function (result) {
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