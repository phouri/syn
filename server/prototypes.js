/**
 * Created by pinha_000 on 4/23/14.
 */

//string
String.prototype.startsWith = function(str) {
    if (typeof str !== 'string') return false;
    return this.indexOf(str) === 0;
};
String.prototype.contains = function(str) {
    if (typeof str !== 'string') return false;
    return this.indexOf(str) !== -1;
};