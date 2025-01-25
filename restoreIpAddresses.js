/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    //if our string of digits is *longer* than 12, or *shorter* than 4 then there is no combination that will work
    //255.255.255.255 is the maximum ip, and only has 4 digits, so naturally if its longer
    //we skip it

    if(s.length < 4 || s.length > 12) return [];

    //if the number is length 12, this means that there is only 1 possible combination
    //given "255255255255" we can only separate this into "255.255.255.255" since
    //moving the dots anywhere else means that we will have an invalid ip

    //if the the number is length 11:
    // 25525425325 some possible *dot* combinations are:
    // 255.254.253.25
    // (25.525.425.325 )though this combination is invalid
};