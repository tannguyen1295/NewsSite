function quote(){
  var url = "https://newsapi.org/v2/top-headlines?q=" + $('#field').val() + "&language=en&apiKey=c5bf29dd586e44e5bb0ba9109358fa14";

  $.getJSON(url, function(data){
    var text = "<ul>"
    var length = 10

    if (data.articles.length < length){
      length = data.articles.length
    }

    for (i = 0; i < length; i++) {
      text += "<li><a href=\"" + data.articles[i].url + "\">" + data.articles[i].title +"</a></li>"
      if (data.articles[i].description != null){
        text += data.articles[i].description;
      }
    }

    text += "</ul>"
    $('#quote').html(text)
  });
  $('field').val('')
}
