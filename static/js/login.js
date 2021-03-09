$(document).ready(function () {
    $('#inputPasswordConfirm').on('input propertychange', function () {
        var pwd = $.trim($(this).val());
        var rpwd = $.trim($("#inputPassword").val());
        if (rpwd != "") {
            if (pwd == "" && rpwd == "") {
                $("#msg_pwd").html("<font color='red'>密码不能为空</font>");
            }
            else {
                if (pwd == rpwd) {
                    $("#msg_pwd").html("<font color='green'>两次密码匹配通过</font>");
                    $("#btn_submit").attr("disabled", false);
                } else {
                    $("#msg_pwd").html("<font color='red'>两次密码不匹配</font>");
                    $("#btn_submit").attr("disabled", true);
                }
            }
        }
    })
})
$(document).ready(function () {
    $('#inputPassword').on('input propertychange', function () {
        var pwd = $.trim($(this).val());
        var rpwd = $.trim($("#inputPasswordConfirm").val());
        if (pwd == "" && rpwd == "") {
            $("#msg_pwd").html("<font color='red'>密码不能为空</font>");
        } else {
            if (pwd == rpwd) {
                $("#msg_pwd").html("<font color='green'>两次密码匹配通过</font>");
                $("#btn_submit").attr("disabled", false);
            } else {
                $("#msg_pwd").html("<font color='red'>两次密码不匹配</font>");
                $("#btn_submit").attr("disabled", true);
            }
        }
    })
})