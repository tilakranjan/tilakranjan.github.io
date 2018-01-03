$(".portName").on("input", function(e) {
  var portId = $(this).attr('id')
  var val = $(this).val();
  if(val === "") return;
  //You could use this to limit results
  // if(val.length < 2) return;
  var theUrl = "https://aviation-edge.com/api/public/autocomplete?key=622edd-b1ff75-99e99a-1b7a45-d99f5c&query="

  // var theUrl = "https://iatacodes.org/api/v6/autocomplete?api_key=36ff81d7-5948-469f-b074-9a48e3d82913&query="

  $.get(theUrl+val, function(res) {
    var dataList = $("#"+portId+"result");
    if(res){
      myRes = res.cities
      dataList.empty();
      if(myRes.length) {
        for(var i=0, len=myRes.length; i<len; i++) {
          var opt = $("<option>"+myRes[i].code+": "+myRes[i].name+"</option>").attr("value", myRes[i].code);
          dataList.append(opt);
        }
      }
    }
  },"json");

});
