$.material.init();

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey.StylesManager.applyTheme("bootstrapmaterial");

var json = json_info

window.survey = new Survey.Model(json);
survey.showCompletedPage = false;

survey.onComplete.add(function (result) {
    $.ajax({
        type: "post",
        url: "/test",
        data: JSON.stringify(result.data),
        success: function (result) {
            alert('Done.')
            window.location.href = '/complete';
        },
        dataType: "json",
        contentType: 'application/json'
      });

      window.location.href = '/complete';
      //alert(JSON.stringify(result.data));
    //document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});


$("#surveyElement").Survey({
    model: survey
});