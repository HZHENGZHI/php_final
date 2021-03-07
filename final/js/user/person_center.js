window.onload = function()
{
  $.ajax({
    type: "get",
    url: "http://localhost:7070/untitled2_war/user_msg",
    data: {
      token:$.cookie('name'),
      method:"getusermsg",
    },
    dataType: "text",
    success: function (response) {
      data=JSON.parse(response)
      $(".sex").html(data.sex);
      $(".userbirthday").html(data.birthday);
      $(".username").html(data.truename);
    }
  });
}