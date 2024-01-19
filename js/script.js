// *menu mobile
const burgerButton = document.querySelector(".burger_menu_button");
burgerButton.onclick = function(){
    document.querySelector(".burger_menu_icon").classList.toggle("burger_menu_icon_active");
    document.querySelector(".basket_btn_mobile").classList.toggle("hiden");
    document.querySelector(".menu_mobile").classList.toggle("menu_mobile_open");
}

// * tabs
const tabsButtons = document.querySelectorAll(".tabs_button");
const tabsItems = document.querySelectorAll(".tabs_content");
tabsButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        let tabId = button.getAttribute("data-tab");
        console.log(tabId)
        let currentTab = document. querySelector(tabId);
        tabsButtons.forEach(function(button){
            button.classList.remove("tabs_button_active");
        });
        tabsItems.forEach(function(tabItem){
            tabItem.classList.remove("tabs_content_active");
        });
        button.classList.add("tabs_button_active");
        currentTab.classList.add("tabs_content_active");
    });
});