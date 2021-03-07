
$.toastDefaults.position = 'bottom-right';
$.toastDefaults.dismissible = true;
$.toastDefaults.stackable = true;
$.toastDefaults.pauseDelayOnHover = true;

function detail_k(name,nums)
{
    var temp=new Object();
    temp.name=name;
    temp.nums=nums;
    return temp;
}
var kkk=[]


$('#table').bootstrapTable({
    search:true,
    pagination:true,
    paginationLoop:true,
    local:'zh-CN',
    ajax: function (request) {
        $.ajax({
            type: "GET",
            url: "http://localhost:7070/untitled2_war/order_list",
            data: {
                token: $.cookie('name'),
                method:"notyet_finish"
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
    // showFooter:true,
    columns: [
        {
            field:'id',
            checkbox:true
        },
    {
        field:'time',
        title: '下单时间',
    },
    {
        field:'allbookname',
        title: '物品详细',
        formatter : function(value, row, index, field){
            return "<span title="+value+">"+value+"</span>";
            },
        cellStyle : function(value, row, index, field){
            return {
            css: {
            'min-width': '20px',
            'white-space': 'nowrap',
            'text-overflow': 'ellipsis',
            'overflow': 'hidden',
            'max-width':'30px'}
            };
            }
    },
    {
        field: 'shoppinger_address',
        title: '收货地址',
    },
    {
        field: 'shoppinger',
        title: '收货人',
    },
    {
        field:'total_price',
        title: '商品总价',
        
    },
    {
        field:'operation',
        title:'操作',
        events:
        {
           'click .back':function(e,value,row,index)
           {
               var k = row.allbookname
               var k1=k.split("-");
                
                var index=0;
                var detail1=[]
                for(var i=0;i<k1.length;i++)
                {
                    if(i%2==0)
                   { detail1[index]= detail_k(k1[i],k1[i+1]);
                    index++;
                }
                }
                $('#detail_table').bootstrapTable('load',detail1); 
           },
           'click .confirm': function (e, value, row, index) 
           {
               
               $.ajax({
                   type: "post",
                   url: "http://localhost:7070/untitled2_war/order_list",
                   data: 
                   {
                       token:$.cookie('name'),
                       time:row.time
                   },
                   dataType: "text",
                   success: function (response) {
                       $('#table').bootstrapTable('load', JSON.parse(response));
                        $.toast({
                            type: 'success',
                            title: '成功',
                            subtitle: '',
                            content: "已完成商品收货",
                            delay: 5000
                        });
                   }
               });
           }

        },

        formatter:function(value,item,index)
        {
            item.id=false;
            var btnfix = " <button type='button' class='btn  shadow-none back' style='margin-right: 15px;' data-toggle='modal' data-target='#exampleModal'><img src='/img/bootstrap-icons-1.2.1/File-ruled.svg' class='text-success' alt='' width='22' height='22'></button>"+
            " <button type='button' class='btn  shadow-none confirm' style='margin-right: 15px;'><img src='/img/bootstrap-icons-1.2.1/Check.svg' class='text-success' alt='' width='25' height='25'></button>"
            return btnfix
        },
    }
],
})
$('#table').on('dbl-click-row.bs.table', function (field, value, row, $element) {
    console.log(value);
    console.log(detail1);
  })


  $('#detail_table').bootstrapTable({
    pagination:true,
    paginationLoop:true,
    local:'zh-CN',
    columns: [
    {
        field:'name',
        title: '书籍名称',
    },
    {
        field:'nums',
        title: '书籍数量',
    },
],
})