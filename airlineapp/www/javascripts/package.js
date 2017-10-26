function purchasePackage() {
  if(hasPackage == false){
    hasPackage = true;
    ons.notification.alert("Thank you for purchasing a package!");
    mainNavigator.resetToPage('main.html');
  }
  else{
    hasPackage = false;
    ons.notification.alert("Hope you enjoyed your stay!");
    mainNavigator.resetToPage('main.html');
  }
}
