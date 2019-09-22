module.exports = function check(str, bracketsConfig) {
  let a='';
let b='';
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (str[i]==bracketsConfig[j][0] && str[i+1]==bracketsConfig[j][1]) {
                    a=str.substr(0,i);
                    b=str.substr(i+2,str.length);
                str=a+b;
                i=i-2;
                }
            }
        }
    if(str==''){
        return true;
    }
    else{
        return false;
    }
}

