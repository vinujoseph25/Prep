var strNwxp = "Nwxp";

for (var variable in window)
{
    var toCheck = variable.substring(0, 4);
    if (strNwxp === toCheck) {
        delete global[variable];
    }
}
delete window.strNwxp

console.log(strNwxp);