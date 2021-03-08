 $.toastDefaults.position = 'bottom-right';
 $.toastDefaults.dismissible = true;
 $.toastDefaults.stackable = true;
 $.toastDefaults.pauseDelayOnHover = true;

$("#login").click(function (e) {
  console.log($("#id").val())
  console.log($("#pw").val())
  $.ajax({
    type: "post",
    url: "http://localhost/test/back/login.php",
    data: {
      "id":$("#id").val(),
      "pw":$("#pw").val()
    },
    dataType: "text",
    success: function (response) {
      if(parseInt(response)==0)
      {
        $.toast({
          type: 'warning',
          title: '警告',
          subtitle: '',
          content: "账号或密码不正确",
          delay: 5000
        });
      }
      else
      {
        console.log(response);
        $.cookie('user', response, {expires: 7})
        window.location.href="/final/html/user/book_search.html"
      }
    }
  });
});