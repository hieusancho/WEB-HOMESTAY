// funtion bên đăng ký

sdt.onblur = function () {
    if (sdt.value.trim() == "") {
        document.getElementById('notification-sdt').innerHTML = "Số điện thoại không được để trống";
    }
    else if (isNaN(sdt.value)) {
        document.getElementById('notification-sdt').innerHTML = "Số điện thoại phải là số";
    } else if (sdt.value.length < 10 || sdt.value.length > 12) {
        document.getElementById('notification-sdt').innerHTML = "Số điện thoại từ 10 - 12";
    } else if (sdt.value[0] != '0') {
        document.getElementById('notification-sdt').innerHTML = "Phải có số không ở đầu";
    } else {
        document.getElementById('notification-sdt').innerHTML = "";
        return true;
    }
    return false;
}
userName.onblur = function () {
    //var format = /[`!@#$%^&*_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (userName.value.trim() == "") {
        document.getElementById('notification-name').innerHTML = "Họ và tên không được để trống";
    }
    else if (!isNaN(userName.value)) {
        document.getElementById('notification-name').innerHTML = "Họ và tên không được là số!";
    } else {
        document.getElementById('notification-name').innerHTML = "";
        return true;
    }
    return false;
    //else if (format.test(userName.value)) {
    // document.getElementById('notification-name').innerHTML = "Họ và tên không chứa ký tự đặc biệt!";
    // }
}

passWordConfirm.onblur = function () {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (passWordConfirm.value.trim() == "") {
        document.getElementById('notification-passwordConfirm').innerHTML = "Mật khẩu không được để trống!";
    } else if (passWordConfirm.value.length < 8) {
        document.getElementById('notification-passwordConfirm').innerHTML = "Mật khẩu tối thiểu 8 ký tự!";
    } else if (format.test(passWordConfirm.value)) {
        document.getElementById('notification-passwordConfirm').innerHTML = "Mật khẩu không chứa ký tự đặc biệt!";
    } else if (passWordConfirm.value.trim() != passWord.value.trim()) {
        document.getElementById('notification-passwordConfirm').innerHTML = "Mật khẩu nhập lại không trùng khớp!";
    }
    else {
        document.getElementById('notification-passwordConfirm').innerHTML = "";
        return true;
    }
    return false;
}


var listPhone = document.querySelector('.phone__country');
listPhone.onclick = function () {
    document.querySelector('.dropdown-flag').classList.toggle('is__active');
}