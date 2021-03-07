
window.onload = function () {
$.ajax({
  type: "get",
  url: "http://localhost:7070/untitled2_war/login",
  data: 
  {
    token: $.cookie('name')
  },
  dataType: "text",
  success: function (response) {
    if(parseInt(response)==1)
    {
      console.log($.cookie('name'))
      console.log("yes")
      window.location.href = "/html/user/book_search.html"
    }
  }
});
}


$("#login").click(function (e) {
  if ($("#id").val() == "" || $("#pw").val()=="")
  {
    alert("账号密码不为空");
  }
  else
  {
  $.ajax({
    type: "post",
    url: "http://localhost:7070/untitled2_war/login",
    data: {
      id: $("#id").val(),
      pw: $("#pw").val()
    },
    dataType: "json",
    success: function (response) {
      // if(parseInt(response)==1)
      {
        window.location.href="/html/user/book_search.html"
        $.cookie('name', response, {expires: 20});
        name = $.cookie('name'); 
        console.log(name)
      }
      console.log(response)
    }
  });
}
});