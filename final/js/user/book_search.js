const TYPES = ['info', 'warning', 'success', 'error'],
    TITLES = {
        'info': '注意！',
        'success': '成功！',
        'warning': '库存不足!',
        'error': '出现未知错误!'
    },
    CONTENT = {
        'info': '已加入收藏',
        'success': '加入购物车成功!',
        'warning': '加入购物车失败!',
        'error': '库存不足!'
    },
    POSITION = ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'];

$.toastDefaults.position = 'bottom-right';
$.toastDefaults.dismissible = true;
$.toastDefaults.stackable = true;
$.toastDefaults.pauseDelayOnHover = true;

$('#table').bootstrapTable({
    search:true,
    pagination:true,
    paginationLoop:true,
    toolbar:'toolbar',
    local:'zh-CN',
    toolbar:'#toolbar',//工具栏
    url: "http://localhost/test/back/book_search.php",
    method:"GET",
   
columns: [{
    field: 'id',
    title: '序号',
    checkbox:true,

}, {
    field: 'book_name',
    title: '书名',
    clickToSelect:true,
}, 
{
    field:'category',
    title:"类别",
    sortable:true,
},
{
    field: 'book_price',
    title: '价钱',
    sortable:true,
},
{
    field:'opertion',
    title:'操作',
    events:
    {
       'click .add_car':function(e,value,row,index)
       {
           
          $.ajax({
              type: "post",
              url: "http://localhost:7070/untitled2_war/book_search",
              data: {
                  token:$.cookie('name'),
                  kk: JSON.stringify(row),
                  method:"shopping_car",
              },
              dataType: "text",
              success: function (response) {
                 
                  var rng = 1,
                      type = TYPES[2],
                      title = TITLES[type],
                      content = CONTENT[type];

                  if (rng === 1) {
                      $.toast({
                          type: type,
                          title: title,
                          subtitle: '',
                          content: content,
                          delay: 5000
                      });
                  }
              }
          });
       },
       'click .add_collection':function(e,value,row,index)
       {

           $.ajax({
               type: "post",
               url: "http://localhost:7070/untitled2_war/book_search",
               data: {
                   token: $.cookie('name'),
                   kk: JSON.stringify(row),
                   method: "add_collection",
               },
               dataType: "text",
               success: function (response) {
                    var rng = 1,
                        type = TYPES[0],
                        title = TITLES[type],
                        content = CONTENT[type];
                    if (rng === 1) {
                        $.toast({
                            type: type,
                            title: title,
                            subtitle: '',
                            content: content,
                            delay: 5000
                        });

                        }
            }
           });
       }
    },
    formatter:function(value,item,index)
        {
            item.id=false;
        var btnfix = '<button type="button" class="btn shadow-none add_car" style="margin-left:-10px"> <img src="/final/img/bootstrap-icons-1.2.1/Cart-plus.svg " class="text-success" alt="" width="22" height="22" > </button>'
             +'<button type="button" class="btn shadow-none add_collection"> <img src="/final/img/bootstrap-icons-1.2.1/Hand-thumbs-up.svg " class="text-success" alt="" width="22" height="22" > </button>'
             return btnfix
        },
}
],})
$(".add_car").click(function (e) { 
    var data=$("#table").bootstrapTable('getSelections')
    var k=JSON.stringify(data)
    
    // console.log("1234")
   
    
});
$(".total-car").click(function (e) { 
    e.preventDefault();
    var data1=$("#table").bootstrapTable('getSelections')
    if(data1.length==0)
    {
        $.toast({
            type: 'warning',
            title: '警告',
            subtitle: '',
            content: "未选择任何一个商品",
            delay: 5000
        });
    }
    else if(data1.length!=0)
    {
    for (var i=0;i<data1.length;i++)
    {  
            $.ajax({
            type: "post",
            url: "http://localhost:7070/untitled2_war/book_search",
            data: {
                token: $.cookie('name'),
                kk: JSON.stringify(data1[i]),
                method: "total_car"
            },
            dataType: "text",
            success: function (response) {
                // console.log(response)
                var rng = 1,
                    type = TYPES[2],
                    title = TITLES[type],
                    content = CONTENT[type];

                if (rng === 1) {
                    $.toast({
                        type: type,
                        title: title,
                        subtitle: '',
                        content: content,
                        delay: 5000
                    });
                }
            }
        });
    }
    }


});
