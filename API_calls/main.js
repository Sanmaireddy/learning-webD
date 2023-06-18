function fetchRandDogImg() {
  var xhrRequest = new XMLHttpRequest();

  xhrRequest.onload = function () {
    //handler-once the req is recived this happens
    var responseJSON = JSON.parse(xhrRequest.response);
    var imgUrl = responseJSON.message;
    $("#dog-img").attr("src", imgUrl);
  };
  xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true); //true-Asyn,F-syn
  xhrRequest.send();
  //  another method using jquery
  //   $.ajax({
  //     url: "https://dog.ceo/api/breeds/image/random",
  //     method: 'GET',
  //     success: function(data){
  //         var imgUrl = data.message;
  //         $("#dog-img").attr("src", imgUrl);
  //     }
  //   });
}
$("#button").click(fetchRandDogImg);

function convert(from, to, amount) {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "hHVZrhps8bDdvhVxtPCZVOdJFLCowte1");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  console.log(from, to, amount);
  fetch(
    `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((res) => {
      var answer = document.getElementById("answer");
      var res1 = JSON.parse(res);
      answer.textContent = `Yay the converted value is ${res1.result}`;
    })
    .catch((error) => {
      console.log("error", error);
      var answer = document.getElementById("answer");
      answer.textContent = `Sorry, The API calls limit might have reached`;
    });
}

$("#currency-conv").submit(function (e) {
  e.preventDefault();
  var from = $("#from").val();
  var to = $("#to").val();
  var amount = $("#amount").val();
  convert(from, to, amount);
});
