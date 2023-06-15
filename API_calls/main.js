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
