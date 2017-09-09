var time_out = null;

function load_address() {
    //console.info("load address");
    var $container = $(".addr-item-container");
    var $temp = $container.find(".addr-item").eq(0);
    // $temp.remove();
    $("#list-detail-4").find(".addr-add-btn").on("click", add_address);
    $.ajax({
        type: "GET",
        url: addr_data_url,
        dataType: "json",
        success: function (result, status) {
            //console.info(result, status);
            if(status==="success"&&result.state==="success"){
                ////console.info("load data");
                $.each(result.data, function (i, address_item) {
                    var $addr_item = $temp.clone().removeClass("hidden");
                    $addr_item.attr("id", "addr-item"+i);
                    $addr_item.removeClass("addr-default");
                    var $path_list = $addr_item.find(".path-item-input");
                    $.each(address_item.reg_path, function (j, region) {
                        $path_list.eq(j).append("<option value=\"{id}\">{name}</option>".format(region)).val(region.id);
                        $addr_item.find(".reg-id-hidden").val(region.id);
                    });
                    var address = address_item.address;
                    $addr_item.find(".addr-id-hidden").val(address.addr_id);
                    $addr_item.find(".zipcode-input").val(address.addr_zipcode);
                    $addr_item.find(".address-input").val(address.addr_detail);

                    if(address.is_default==="1"){
                        $addr_item.addClass("addr-default");
                        // $temp.after($addr_item);
                        $container.append($addr_item);
                    }else{
                        $container.append($addr_item);
                    }
                    $addr_item = $addr_item.clone();
                });
                addr_item_onclick($container);
                region_path_onchange($container);
                info_print ("#list-detail-4", "加载成功", true);
            }else{
                info_print ("#list-detail-4", result.state || "加载失败", false);
            }
        },
        error: function () {
            info_print ("#list-detail-4", "加载失败", false);
        }
    });
}

function load_region($select, reg_id) {
    var data_url = region_data_url;
    if(reg_id==="0" || !$select.length){
        return
    }
    if(reg_id!=="-1"){
        data_url += "?reg_id="+reg_id;
    }
    $.getJSON(data_url, function (result, status) {
        if(status==="success" && result.state === "success"){
            $.each(result.data.reg_child, function (i, item) {

                if($select.val()!==item.id) {
                    ////console.info("add");
                    ////console.info($select.val());
                    ////console.info(item.id);
                    ////console.info(item.name);
                    $select.append("<option value=\"{id}\">{name}</option>".format(item));
                }
            })
        }
    })
}

function save_address() {
    var $addr_item = $(this).parentsUntil(".addr-item-container").eq(-1);
    var data = {
        action: "modify",
        addr_id: $addr_item.find(".addr-id-hidden").val(),
        reg_id: $addr_item.find(".reg-id-hidden").val(),
        addr_zipcode: $addr_item.find(".zipcode-input").val(),
        addr_detail: $addr_item.find(".address-input").val()
    };
    if(data.addr_id==="0") data.action="new";
    if(data.reg_id==="0"){
        info_print ("#list-detail-4", "请选择地区", false);
        return;
    }
    if(!/^[\d]{6}$/g.test(data.addr_zipcode)){
        info_print ("#list-detail-4", "邮编格式错误", false);
        return;
    }
    if(data.addr_detail===""){
        info_print ("#list-detail-4", "请填写详细地址", false);
        return;
    }
    $addr_item.find(".addr-action a").addClass("a-disabled");
    $addr_item.find(".path-item-input, .zipcode-input, .address-input").attr("disabled", "disabled");
    $.ajax({
        type: "POST",
        url: addr_action_url,
        data: JSON.stringify(data),
        contentType: "application/json;charset=utf-8",
        success: function (result, status) {
            $addr_item.find(".addr-action a").removeClass("a-disabled");
            $addr_item.find(".modify-link").parent().removeClass("hidden");
            $addr_item.find(".save-link").parent().addClass("hidden");
            if(status==="success" && result.state==="success"){
                $addr_item.find(".addr-id-hidden").val(result.data);
                if(data.action==="new")
                    info_print ("#list-detail-4", "新建成功", true);
                else
                    info_print ("#list-detail-4", "修改成功", true);
            }else{
                if(data.action==="new")
                    info_print ("#list-detail-4", "新建失败", false);
                else
                    info_print ("#list-detail-4", "修改失败", false);
            }
        },
        error: function () {
            $addr_item.find(".addr-action a").removeClass("a-disabled");
            $addr_item.find(".modify-link").parent().removeClass("hidden");
            $addr_item.find(".save-link").parent().addClass("hidden");
            info_print ("#list-detail-4", "保存失败");
        }
    });
}

function delete_address() {
    var $addr_item = $(this).parentsUntil(".addr-item-container").eq(-1);
    if($addr_item.find(".addr-id-hidden").val() === "0"){
        $addr_item.remove();
        return
    }
    $addr_item.find(".addr-action a").addClass("a-disabled").unbind("click");
    $.ajax({
        type: "POST",
        url: addr_action_url,
        data: JSON.stringify({
            action: "delete",
            addr_id: $addr_item.find(".addr-id-hidden").val()
        }),
        contentType: "application/json;charset=utf-8",
        success: function (result, status) {
            if(status==="success" && result.state==="success"){
                $addr_item.remove();
                info_print ("#list-detail-4", "删除成功", true);
            }else{
                addr_item_onclick($addr_item);
                $addr_item.find(".addr-action a").removeClass("a-disabled");
                info_print ("#list-detail-4", result.state||"删除失败", false);
            }
        },
        error: function () {
            addr_item_onclick($addr_item);
            $addr_item.find(".addr-action a").removeClass("a-disabled");
            $addr_item.find(".addr-action a").removeClass("a-disabled");
            info_print ("#list-detail-4", "删除失败", false);
        }
    });
}

function default_address() {
    var $addr_item = $(this).parentsUntil(".addr-item-container").eq(-1);
    if($addr_item.find(".addr-id-hidden").val() === "0"){
        info_print ("#list-detail-4", "请先保存新地址", false);
        return
    }
    $addr_item.find(".addr-action a").addClass("a-disabled").unbind("click");
    var $container = $("#list-detail-4");
    $.ajax({
        type: "POST",
        url: addr_action_url,
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            action: "default",
            addr_id: $addr_item.find(".addr-id-hidden").val()
        }),
        success: function (result, status) {
            $addr_item.find(".addr-action a").removeClass("a-disabled");
            addr_item_onclick($addr_item);
            if(status==="success" && result.state==="success"){
                $("#addr-item0").after($addr_item);
                $container.find(".addr-item").removeClass("addr-default");
                $addr_item.addClass("addr-default");
                info_print ("#list-detail-4", "修改成功", true);
            }else{
                addr_item_onclick($addr_item);
                info_print ("#list-detail-4", result.state||"修改失败", false);
            }
        },
        error: function () {
            addr_item_onclick($addr_item);
            $addr_item.find(".addr-action a").removeClass("a-disabled");
            info_print ("#list-detail-4", "修改失败", false);
        }
    })
}

function add_address() {
    var $container = $(".addr-item-container");
    var $temp = $container.find(".addr-item").eq(0);
    var $addr_item = $temp.clone().removeClass("hidden");
    $addr_item.removeClass("addr-default");
    $("#list-detail-4").find(".addr-item-container").append($addr_item);
    if(!$addr_item.hasClass("region-loaded")){
        $.each($addr_item.find(".path-item-input"), function (i, select) {
            var $select = $(select);
            if($select.attr("id")==="addr-path1"){
                load_region($select, "-1");
            }else{
                load_region($select, $select.parent().prev().children().eq(0).val());
            }
        });
        $addr_item.addClass("region-loaded");
    }
    $addr_item.find(".path-item-input, .zipcode-input, .address-input").removeAttr("disabled");
    $addr_item.find(".modify-link").parent().addClass("hidden");
    $addr_item.find(".save-link").parent().removeClass("hidden");
    addr_item_onclick($addr_item);
    region_path_onchange($addr_item);
}

function addr_item_onclick($item) {
    $item.find(".modify-link").on("click", function () {
        var $addr_item = $(this).parentsUntil(".addr-item-container").eq(-1);
        if(!$addr_item.hasClass("region-loaded")){
            $.each($addr_item.find(".path-item-input"), function (i, select) {
                var $select = $(select);
                if($select.attr("id")==="addr-path1"){
                    load_region($select, "-1");
                }else{
                    load_region($select, $select.parent().prev().children().eq(0).val());
                }
            });
            $addr_item.addClass("region-loaded");
        }
        $addr_item.find(".path-item-input, .zipcode-input, .address-input").removeAttr("disabled");
        $addr_item.find(".modify-link").parent().addClass("hidden");
        $addr_item.find(".save-link").parent().removeClass("hidden");
    });
    $item.find(".save-link").on("click", save_address);
    $item.find(".delete-link").on("click", delete_address);
    $item.find(".default-link").on("click", default_address);
}

function region_path_onchange($item) {
    $item.find(".path-item-input").on("change", function () {
        var $addr_item = $(this).parentsUntil(".addr-item-container").eq(-1);
        $.each($(this).parent().nextAll(), function (i, select) {
            $.each($(select).find("option"), function (j, item) {
                if(j>0){
                    ////console.info("remove");
                    $(item).remove();
                }
            })
        });
        $addr_item.find(".reg-id-hidden").val($(this).val());
        ////console.info("new reg_id:"+$(this).val());
        ////console.info("hidden reg_id:"+$addr_item.find(".reg-id-hidden").val());
        load_region($(this).parent().next().children().eq(0), $(this).val());
    });
}