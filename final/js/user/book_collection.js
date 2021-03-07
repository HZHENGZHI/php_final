const TYPES = ['info', 'warning', 'success', 'error'],
TITLES = {
    'info': '注意！',
    'success': '成功！',
    'warning': '库存不足!',
    'error': '出现未知错误!'
},
CONTENT = {
    'info': 'Hello, world! This is a toast message.',
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
    ajax: function (request) {
        $.ajax({
            type: "GET",
            url: "http://localhost:7070/untitled2_war/book_collection_servlet",
            data: {
                token: $.cookie('name')
            },
            jsonp: 'callback',
            success: function (msg) {
                request.success({
                    row: JSON.parse(msg)
                });
                $('#table').bootstrapTable('load', JSON.parse(msg));
                data = JSON.parse(msg)
            },
        });
    },
    columns: [
  {
      field: 'book_name',
      title: '书名',
      clickToSelect: true,
  }, {
      field: 'category',
      title: "类别",
      sortable: true,
  }, {
      field: 'book_price',
      title: '价钱',
      sortable: true,
  },
    {
        field:'opertion',
        title:'操作',
        events:
        {
           'click .bttn':function(e,value,row,index)
           {
            var rng = 1,
            type = TYPES[2],
            title = TITLES[type],
            content = CONTENT[type];

            if (rng === 1) 
            {
            $.toast({
                type: type,
                title: title,
                subtitle: '',
                content: content,
                delay: 5000
            });
            $.ajax({
                type: "post",
                url: "http://localhost:7070/untitled2_war/book_search",
                data: {
                    token: $.cookie('name'),
                    kk: JSON.stringify(row),
                    method: "shopping_car"
                },
                dataType: "text",
                success: function (response) {
                    console.log(response)
                }
            });
            }
        },
        'click .del':function(e,value,row,index)
        {
            {
                
            }
            $.ajax({
                type: "post",
                url: "http://localhost:7070/untitled2_war/book_collection_servlet",
                data: 
                {
                    token:$.cookie('name'),
                    book_name:row.book_name
                },
                dataType: "text",
                success: function (response) {
                    $.toast({
                    type: TYPES[0],
                    title: TITLES[TYPES[0]],
                    subtitle: '',
                    content: "提示:已移出收藏夹",
                    delay: 5000
                });
                    $('#table').bootstrapTable('load', JSON.parse(response));
                }
            });
        }
        },
        formatter:function(value,item,index)
            {
                item.id=false;
                 var btnfix = '<button type="button" class="btn shadow-none bttn"> <img src="/img/bootstrap-icons-1.2.1/Cart-plus.svg " class="text-success" alt="" width="22" height="22" > </button>'+
                 '<button type="button" class="btn shadow-none del"> <img src="/img/bootstrap-icons-1.2.1/Trash.svg " class="text-success" alt="" width="22" height="22" > </button>'
                return btnfix
            },
    }
    ]
})