displayUser();
function displayUser() {
  document.getElementById("user").innerHTML += userProfile.title + " " + userProfile.lastName;
  document.getElementById("eliteMiles").innerHTML += userProfile.accountSummary.eliteMiles;
  document.getElementById("eliteMilesReq").innerHTML += userProfile.accountSummary.eliteRequalifiedMilesRequired;
  document.getElementById("kfMiles").innerHTML += userProfile.accountSummary.kfMiles;
  document.getElementById("memSince").innerHTML += userProfile.accountSummary.memberSince;
  document.getElementById("ppsReqBy").innerHTML += userProfile.accountSummary.ppsRequalifiedBy;
  document.getElementById("ppsReqMiles").innerHTML += userProfile.accountSummary.ppsRequalifiedMilesRequired;
  document.getElementById("ppsReserve").innerHTML += userProfile.accountSummary.ppsReserveValue;
  document.getElementById("ppsValues").innerHTML += userProfile.accountSummary.ppsValues;
  document.getElementById("loyaltyTierCode").innerHTML += userProfile.loyaltyTierCode;
  document.getElementById("loyaltyTierName").innerHTML += userProfile.loyaltyTierName;
}

displayPackage();
function displayPackage() {
  if (hasPackage == false){
    document.getElementById('invalidPackage').innerHTML = "You do not have a valid package. Sign up for one now!";
    var element = document.createElement("ons-button");
    var textNode = document.createTextNode("Sign Up for a Package!");
    element.onclick = function() {
      fn.load('packageDetails.html');
    }
    element.appendChild(textNode);
    document.getElementById('invalidPackageBtn').appendChild(element);
  }
  else{
    document.getElementById('qrCode').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png">';
    var element = document.createElement("ons-button");
    var textNode = document.createTextNode("Package Details");
    element.onclick = function() {
      fn.load('packageDetails.html');
    }
    element.appendChild(textNode);
    document.getElementById('qrCode').appendChild(element);
  }
}
