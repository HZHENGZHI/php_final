
$.toastDefaults.position = 'bottom-right';
$.toastDefaults.dismissible = true;
$.toastDefaults.stackable = true;
$.toastDefaults.pauseDelayOnHover = true;

$('#table').bootstrapTable({
  toolbar: '#toolbar',
  search:true,
  pagination: true,
    paginationLoop: true,
  url: "http://localhost:7070/untitled2_war/book_search",
    method: "GET",
  columns: [
    {
      field: 'book_name',
      title: '书名',
      width: 300,
      clickToSelect: true,
    }, {
      field: 'category',
      title: "类别",
      sortable: true,
    }, {
      field: 'book_price',
      title: '价钱',
      sortable: true,
    }, {
      field: 'opertion',
      title: '操作',
      events:
      {
        'click .edit': function (e, value, row, index)
        {

          $(".book_name").val(row.book_name);
           $(".book_price").val(row.book_price);
            $(".book_class").val(row.category);
        },
        'click .del':function (e, value,row,index)
        {
          $.ajax({
            type: "post",
            url: "http://localhost:7070/untitled2_war/admin_manger_servlet",
            data: {
               book_name: row.book_name,
                 category: row.category,
                 book_price: row.price,
                 method: "del_book"
            },
            dataType: "text",
            success: function (response) {
               $('#table').bootstrapTable('load', JSON.parse(response));
                $.toast({
                  type: 'warning',
                  title: '警告',
                  subtitle: '',
                  content: "已完成删除",
                  delay: 5000
                });
            }
          });
          //删除数据
        }
      },
      formatter: function (value, item, index) {
        item.id = false;
        var btnfix = '<button type="button" class="btn shadow-none edit" data-toggle="modal" data-target="#exampleModal"> <img src="/img/bootstrap-icons-1.2.1/Pencil-square.svg " class="text-success" alt="" width="22" height="22" > </button>'
        +'<button type="button" class="btn shadow-none del"> <img src="/img/bootstrap-icons-1.2.1/Trash.svg " class="text-success" alt="" width="22" height="22" > </button>'
           return btnfix
      },
      width:300
    }
  ],

})
function isChn(str) {

  var reg = /^[\u4E00-\u9FA5]+$/;

  if (!reg.test(str)) {

    return false;

  }
  return true;

}
$(".book_add_confirm").click(function (e) {
 
  if( isChn($(".book_class1").val()))
 { 
    $.ajax({
      type: "post",
      url: "http://localhost:7070/untitled2_war/admin_manger_servlet",
      data: {
        book_name: $(".book_name1").val(),
        category: $(".book_class1").val(),
        book_price: $(".book_price1").val(),
        method: "add_book"
      },
      dataType: "text",
      success: function (response) {
        $('#table').bootstrapTable('load', JSON.parse(response));
         $.toast({
           type: 'success',
           title: '成功',
           subtitle: '',
           content: "已完成图书添加操作",
           delay: 5000
         });
      }
    });
}
else
{
  $.toast({
    type: 'error',
    title: '警告',
    subtitle: '',
    content: "类别存在非中文",
    delay: 5000
  });
}

  $(".book_name1").val("")
  $(".book_class1").val("")
  $(".book_price1").val("")

});
$(".confirm").click(function (e) { 
  e.preventDefault();
   $.ajax({
     type: "post",
     url: "http://localhost:7070/untitled2_war/admin_manger_servlet",
     data: {
       book_name: $(".book_name").val(),
       category: $(".book_class").val(),
       book_price: $(".book_price").val(),
       method: "update_book"
     },
     dataType: "text",
     success: function (response) {
        $('#table').bootstrapTable('load', JSON.parse(response));
         $.toast({
           type: 'success',
           title: '成功',
           subtitle: '',
           content: "已完成图书修改",
           delay: 5000
         });
     }
   });
  
});