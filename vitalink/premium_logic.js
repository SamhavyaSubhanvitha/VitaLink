function checkPremiumAccess(user, requestsMade) {
  if (user.isPremium && requestsMade < 3) {
    return true;
  }
  return false;
}

module.exports = { checkPremiumAccess };