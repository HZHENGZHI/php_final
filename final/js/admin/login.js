// window.onload = function () {
//   $.ajax({
//     type: "get",
//     url: "http://localhost:7070/untitled2_war/admin_login_servlet",
//     data: {
//       token: $.cookie('admin_name')
//     },
//     dataType: "text",
//     success: function (response) {
//       console.log($.cookie("admin_name"))
//       if (parseInt(response) == 1) {
//         console.log($.cookie('admin_name'))
//         console.log("yes")
//         window.location.href = "/html/admin/admin_book_manger.html"
//       }
//     }
//   });
// }



$("#login").click(function (e) { 
  e.preventDefault();
  
  $.ajax({
    type: "post",
    url: "http://localhost:7070/untitled2_war/admin_login_servlet",
    data: 
    {
      id:$("#id").val(),
      pw:$("#pw").val()    
    },
    dataType: "json",
    success: function (response) {
      console.log($.cookie("admin_name"))
      $.cookie('admin_name',response,{expires: 30})
      window.location.href="/html/admin/admin_book_manger.html"
    }
  });
});