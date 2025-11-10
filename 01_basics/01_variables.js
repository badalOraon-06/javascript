const accountId = 1444
let accountEmail = "badaln2004@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId(2);

accountEmail = "badal@gamil.com"
accountPassword = "2344234"
accountCity = "ranchi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])