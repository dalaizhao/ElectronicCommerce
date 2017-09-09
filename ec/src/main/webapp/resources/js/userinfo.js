function load_userinfo() {
    $.getJSON(user_data_url, function (result, status) {
        var $container = $("#list-detail-1");
        if(status==="success"){
            $container.find("#input-username").val(result.name);
            $container.find("#input-email").val(result.email);
            $container.find("#input-tel").val(result.tel);
            $container.find("#input-realname").val(result.realName);
            $container.find("#input-idnum").val(result.idnum);
            $container.find("#input-question").val(result.question);
            $container.find("#input-answer").val(result.answer);
        }else{
            $container.find(".error-info").removeClass("hidden");
        }
    });

    $("#modify-btn").click(function () {
        $(".input-value").removeAttr("readonly");
        $("#modify-btn").addClass("hidden");
        $("#save-btn").removeClass("hidden");
        $("#input-item-pwd, #input-item-pwd2").removeClass("hidden");
    });
    $(".input-value").on("change", input_test);
    $("#save-btn").on("click", userinfo_modify);
}

function input_test() {
    var $check = $(this).next().removeClass("hidden");
    var pattern;
    var flag = true;
    var $pwd1 = $("#input-pwd");
    var $pwd2 = $("#input-pwd2");
    switch ($(this).attr("id")){
        case "input-username":
            pattern = new RegExp("^[A-Za-z\d]{4,}$|^[\u4e00-\u9fa5]{2,}$");
            flag = pattern.test($(this).val());
            break;
        case "input-pwd":
            pattern = /^[A-Za-z\d]{6,}$/g;
            flag = pattern.test($(this).val());
            if(flag && $pwd1.val()===$pwd2.val()){
                $pwd2.next().removeClass("check-wrong").addClass("check-right");
            }
            break;
        case "input-pwd2":
            pattern = /^[A-Za-z\d]{6,}$/g;
            flag = pattern.test($(this).val()) && $pwd1.val()===$pwd2.val();
            break;
        case "input-email":
            pattern = /^.+@.+\..+$/g;
            flag = pattern.test($(this).val());
            break;
        case "input-tel":
            pattern = /^[\d]{11}$/g;
            flag = pattern.test($(this).val());
            break;
        case "input-realname":
            pattern = new RegExp("^[A-Za-z\d]{4,}$|^[\u4e00-\u9fa5]{2,}$");
            flag = pattern.test($(this).val());
            break;
        case "input-idnum":
            pattern = /^[\d]{17}[\dX]$/g;
            flag = pattern.test($(this).val());
            break;
        case "input-question":
            pattern = /.+/g;
            flag = pattern.test($(this).val());
            break;
        case "input-answer":
            pattern = /.+/g;
            flag = pattern.test($(this).val());
            break;
        default:
            flag = pattern.test($(this).val());
            pattern = /.+/g;
    }
    if(flag){
        $check.removeClass("check-wrong").addClass("check-right");
    }else{
        $check.removeClass("check-right").addClass("check-wrong");
    }
    if($(".check-wrong").length>0){
        $("#save-btn").attr("disabled", "disabled").addClass("btn-disabled");
    }else{
        $("#save-btn").removeAttr("disabled").removeClass("btn-disabled");
    }
}

function userinfo_modify() {
    var data = {};
    var $container = $("#list-detail-1");
    var $save_btn = $container.find("#save-btn");
    $save_btn.addClass("btn-disabled").attr("disabled", "disabled").html("保存中");
    data.user_name = $container.find("#input-username").val();
    data.user_pwd = $container.find("#input-pwd").val();
    data.user_email = $container.find("#input-email").val();
    data.user_tel = $container.find("#input-tel").val();
    data.user_realname = $container.find("#input-realname").val();
    data.user_idnum = $container.find("#input-idnum").val();
    data.safe_question = $container.find("#input-question").val();
    data.safe_answer = $container.find("#input-answer").val();
    $.ajax({
        type: "POST",
        url: userinfo_modify_url,
        data: JSON.stringify(data),
        contentType: "application/json;charset=utf-8",
        success: function (result, status) {
            if(status==="success" && result.state==="success"){
                $container.find(".success-info").removeClass("hidden").html("修改成功");
                setTimeout("$(\"#list-detail-1 .success-info\").addClass(\"hidden\")", 2000);
                $container.find("#input-username").val(result.data.name);
                $container.find("#input-pwd").val("").parent().addClass("hidden");
                $container.find("#input-pwd2").val("").parent().addClass("hidden");
                $container.find("#input-email").val(result.data.email);
                $container.find("#input-tel").val(result.data.tel);
                $container.find("#input-realname").val(result.data.realName);
                $container.find("#input-idnum").val(result.data.idnum);
                $container.find("#input-question").val(result.data.question);
                $container.find("#input-answer").val(result.data.answer);
                $container.find(".input-value").attr("readonly", "readonly");
                $container.find("#modify-btn").removeClass("hidden");
                $save_btn.removeClass("btn-disabled").removeAttr("disabled").html("保存").addClass("hidden");
            }else{
                $container.find(".error-info").removeClass("hidden").html(result.state || "修改失败");
                setTimeout("$(\"#list-detail-1 .error-info\").addClass(\"hidden\")", 2000);
                $save_btn.removeClass("btn-disabled").removeAttr("disabled").html("保存");
            }
        },
        error: function () {
            $container.find(".error-info").removeClass("hidden").html("修改失败");
            setTimeout("$(\"#list-detail-1 .error-info\").addClass(\"hidden\")", 2000);
            $save_btn.removeClass("btn-disabled").removeAttr("disabled").html("保存");
        }
    });
}