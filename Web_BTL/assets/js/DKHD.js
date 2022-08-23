function openConten(PageName, element) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("container-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("container-menu_item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("menu-active");
    }
    document.getElementById(PageName).style.display = "block";
    element.classList.add("menu-active");

}
// Đặt item có id = "defaultOpen" để hiển thị tự động
document.getElementById("defaultOpen").click();

//Thực hiện chuyển panel Hủy phòng
function openTab(TabName, elemt) {
    var i, tabcontent, tablinks;
    tabPanel = document.getElementsByClassName("el-tab_panel");
    for (i = 0; i < tabPanel.length; i++) {
        tabPanel[i].style.display = "none";
    }
    elTabHeadlinks = document.getElementsByClassName("el-tab_item");
    for (i = 0; i < elTabHeadlinks.length; i++) {
        elTabHeadlinks[i].classList.remove("tab_is-active");
    }
    document.getElementById(TabName).style.display = "block";
    elemt.classList.add("tab_is-active");
}