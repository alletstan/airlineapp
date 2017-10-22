displayUser();
function displayUser() {
  document.getElementById("user").innerHTML += userProfile.title + " " + userProfile.lastName ;
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
