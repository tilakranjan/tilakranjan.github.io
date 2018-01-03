var totalFlights = []

function showLoader(){
  $('#loader').fadeIn()
}

function hideLoader(){
  $('#loader').fadeOut()
}

function saveLocal(){
  if (typeof(Storage) !== "undefined"){
    localStorage.setItem("flightApp-airport01", $('#airport01').val())
    localStorage.setItem("flightApp-airport02", $('#airport02').val())
    localStorage.setItem("flightApp-datepicker", $('#datepicker').val())
    localStorage.setItem("flightApp-datepicker1", $('#datepicker1').val())
  }
  else{
    // Sorry! No Web Storage support..
  }
}

function loadLocal(){
  if (typeof(Storage) !== "undefined"){
    if(localStorage.getItem("flightApp-airport01") != null){
      $('#airport01').val(localStorage.getItem("flightApp-airport01"))
    }
    if(localStorage.getItem("flightApp-airport02") != null){
      $('#airport02').val(localStorage.getItem("flightApp-airport02"))
    }
    if(localStorage.getItem("flightApp-datepicker") != null){
      $('#datepicker').val(localStorage.getItem("flightApp-datepicker"))
    }
    if(localStorage.getItem("flightApp-datepicker1") != null){
      $('#datepicker1').val(localStorage.getItem("flightApp-datepicker1"))
    }
  }
  else{
    // Sorry! No Web Storage support..
  }
}

function startSlider(minV = 1000, maxV = 300000, minR = 1000, maxR = 5000000){
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: minR,
      max: maxR,
      values: [ minV, maxV ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "Rs." + ui.values[ 0 ] + " - Rs." + ui.values[ 1 ] );
      },
      stop: function(event, ui){
        addResultToHtml()
      }
    });
    $( "#amount" ).val( "Rs." + $( "#slider-range" ).slider( "values", 0 ) +
    " - Rs." + $( "#slider-range" ).slider( "values", 1 ) );
  });
  $('.ui-slider-handle').css('background', '#cd0a0a')
}

function appendOneWayResult(data){
  var dest1 = ''
  var arrt1 = ''
  if(data.onwardflights.length > 0){
    dest1 = data.onwardflights[0].destination
    arrt1 = data.onwardflights[0].arrtime
  }
  else{
    dest1 = data.destination
    arrt1 = data.arrtime
  }
  var theHtml =
  '<div class="searchResult">'
  +'<div class="searchDiv searchDepart">'

  +'<p><span class="smallText">'
  +getDate(data.depdate)
  +'</span>'
  +data.deptime
  +'<span class="smallText">'
  +data.origin
  +'</span></p>'

  // +'<p>'+data.deptime+'</p>'
  +'</div>'
  +'<div class="searchDiv searchDuration">'
  +'<p>'+data.duration+'</p>'
  +'</div>'
  +'<div class="searchDiv searchArrival">'

  +'<p><span class="smallText">'
  +getDate((data.onwardflights.length > 0)?(data.onwardflights[0].arrdate):(data.arrdate))
  +'</span>'
  +arrt1
  +'<span class="smallText">'
  +dest1
  +'</span></p>'
  // +'<p>'+data.arrtime+'</p>'
  +'</div>'
  +'<div class="searchDiv searchAirline">'
  +'<p>'+data.airline+'</p>'
  +'</div>'
  +'<div class="searchDiv searchPrice">'
  +'Rs '+data.fare.totalfare
  +'</div>'
  +'<div class="buttonDiv">'
  +'<button type="button">Book</button>'
  +'</div>'
  +'</div>'

  $('#allResults').append(theHtml)
}

function getDate(nDate){
  var resDt = nDate.split("t");
  return resDt[0]
}

function appendRoundTripResult(data){
  var dest1 = ''
  var arrt1 = ''
  if(data.onwardflights.length > 0){
    dest1 = data.onwardflights[0].destination
    arrt1 = data.onwardflights[0].arrtime
  }
  else{
    dest1 = data.destination
    arrt1 = data.arrtime
  }
  var theHtml =
  '<div class="searchResult">'
  +'<div class="searchDiv searchDepart">'
  +'<p><span class="smallText">'
  +getDate(data.depdate)
  +'</span>'
  +data.deptime
  +'<span class="smallText">'
  +data.origin
  +'</span></p>'
  +'<p><span class="smallText">'
  +getDate(data.returnfl[data.returnfl.length-1].depdate)
  +'</span>'
  +data.returnfl[data.returnfl.length-1].deptime
  +'<span class="smallText">'
  +data.returnfl[data.returnfl.length-1].origin
  +'</span></p>'
  +'</div>'
  +'<div class="searchDiv searchDuration">'
  +'<p>'
  +data.duration+'</p>'
  +'<p>'
  +data.returnfl[data.returnfl.length-1].duration+'</p>'
  +'</div>'
  +'<div class="searchDiv searchArrival">'
  +'<p><span class="smallText">'
  +getDate((data.onwardflights.length > 0)?(data.onwardflights[0].arrdate):(data.arrdate))
  +'</span>'
  +arrt1
  +'<span class="smallText">'
  +dest1
  +'</span></p>'
  +'<p><span class="smallText">'
  +getDate(data.returnfl[data.returnfl.length-1].arrdate)
  +'</span>'
  +data.returnfl[data.returnfl.length-1].arrtime
  +'<span class="smallText">'
  +data.origin
  +'</span></p>'
  +'</div>'
  +'<div class="searchDiv searchAirline">'
  +'<p>'
  // +data.onwardflights[0].airline
  +data.airline
  +'</p>'
  +'<p>'
  +data.returnfl[data.returnfl.length-1].airline
  +'</p>'
  +'</div>'
  +'<div class="searchDiv searchPrice">'
  +'Rs '
  +data.fare.totalfare
  +'</div>'
  +'<div class="buttonDiv">'
  +'<button type="button">Book</button>'
  +'</div>'
  +'</div>'

  $('#allResults').append(theHtml)
}

function addResultToHtml(){
  if(totalFlights.length > 0){
    showLoader()
    $('#allResults').html('')
    var minPrice = $( "#slider-range" ).slider( "values", 0 )
    var maxPrice = $( "#slider-range" ).slider( "values", 1 )
    var resMinPrice = totalFlights[0].fare.totalfare
    var resMaxPrice = totalFlights[0].fare.totalfare
    for (x in totalFlights){
      if(totalFlights[x].fare.totalfare < resMinPrice){
        resMinPrice = totalFlights[x].fare.totalfare
      }
      if(totalFlights[x].fare.totalfare > resMaxPrice){
        resMaxPrice = totalFlights[x].fare.totalfare
      }
      if((totalFlights[x].fare.totalfare > minPrice) && (totalFlights[x].fare.totalfare < maxPrice)){
        if($('input[type="radio"]:checked').val() == 1){
          appendOneWayResult(totalFlights[x])
        }
        else{
          appendRoundTripResult(totalFlights[x])
        }
      }
    }
    // if no result added
    if($('#allResults').html() == ''){
      $('#allResults').html('<p style="text-align:center;background: white;padding: 10px;">No flights in this route within your price range.</p>')
    }
    startSlider(minPrice, maxPrice, resMinPrice, resMaxPrice)
    hideLoader()
  }
}

function showResultDiv(){
  if($('#flightResults').css('display') == "block"){
    // reset result divs
    $('#allResults').html('')
  }
  else{
    $('#headingTitle').fadeOut()
    $('#ticketForm').css('margin', '2%')
    $('#ticketForm').css('width', '95%')
    $('.formElements').css('padding', '3px 0')
    $('.buttonHolder').fadeOut()
    $('#flightResults').fadeIn()
    $(".formVal").change(function(){
      submitSearch()
    });
    $('.passChange').click(function(){
      submitSearch()
    })
    startSlider()
  }
}

function searchFlight(){
  saveLocal()
  showLoader()
  showResultDiv()

  var oldDate = $('#datepicker').val()
  var res = oldDate.split("/");
  var newDate = res[2]+res[0]+res[1]

  var oldDate1, res1, newDate1
  var checkedRadio = $('input[type="radio"]:checked').val()
  if(checkedRadio == 1){
    newDate1 = ""
  }
  else if(checkedRadio == 2){
    oldDate1 = $('#datepicker1').val()
    res1 = oldDate1.split("/")
    newDate1 = res1[2]+res1[0]+res1[1]
  }

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://developer.goibibo.com/api/search/",
    "method": "GET",
    data: {
      "app_id": "3561adce",
      "app_key": "9539e9ae1c421dda1ba4e897855b525b",
      "format": "json",
      "children": "0",
      "infants": "0",
      "counter": "0",
      "seatingclass": "E",
      "source": $('#airport01').val(),
      "destination": $('#airport02').val(),
      "dateofdeparture": newDate,
      "dateofarrival": newDate1,
      "adults": $('.entry.value').text()
    },
    "headers": {
      // "Cache-Control": "no-cache",
    }
  }

  $.ajax(settings).done(function (response) {
    hideLoader()
    if(response.data.Error){
      totalFlights = []
      $('#allResults').html('<p style="text-align:center;background:white;color:red;padding: 10px;">'+response.data.Error+'</p>')
    }
    else{
      var allFlights = response.data.onwardflights
      if(allFlights.length == 0){
        totalFlights = []
        $('#allResults').html('<p style="text-align:center;background: white;padding: 10px;">No flights in this route.</p>')
      }
      else{
        totalFlights = allFlights
        addResultToHtml()
      }
    }
  });
}

function submitSearch(){
  if( ($('#airport01').val() != "") && ($('#airport02').val() != "") && ($('#datepicker').val() != "mm/dd/yyyy") ){
    var checkedRadio = $('input[type="radio"]:checked').val()
    if(checkedRadio == 1){
      searchFlight()
    }
    else{
      if(checkedRadio == 2){
        if($('#datepicker1').val() != "mm/dd/yyyy"){
          searchFlight()
        }
        else{
          alert("Please fill all the fields.")
        }
      }
      else{
        alert("Please fill all the fields.")
      }
    }
  }
  else{
    alert("Please fill all the fields.")
  }
}

$(document).ready(function () {
  $('#ticketForm').fadeIn()

  $( "#datepicker,#datepicker1,#datepicker2,#datepicker3" ).datepicker();

  $('.value-plus').on('click', function(){
    var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)+1;
    divUpd.text(newVal);
  });

  $('.value-minus').on('click', function(){
    var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)-1;
    if(newVal>=1) divUpd.text(newVal);
  });

  $('input[type="radio"]').click(function(){
    var checkedRadio = $('input[type="radio"]:checked').val()
    if(checkedRadio == 1){
      $('.return').fadeOut()
    }
    else if(checkedRadio == 2){
      $('.return').fadeIn()
    }
  })

  $("#submitSearch").click(function(){
    submitSearch()
  })

  loadLocal()
  hideLoader()
});
