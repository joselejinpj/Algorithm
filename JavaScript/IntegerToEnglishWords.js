  
/*****
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 2pow31 - 1.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 123
Output: "One Hundred Twenty Three"

Test Case 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
  
*****/

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    var map = {};
    var extra;

    buildMap(map);
    
    var result = "";

    if(num==0)
        return map[0];
    
    if(num >= 1000000000){
        extra =  Math.trunc(num/1000000000);
        result+=(convert(extra, map) + " Billion");
        num = num%1000000000;
    }

    if(num >= 1000000){
        extra =  Math.trunc(num/1000000);
        result+=(convert(extra, map) + " Million");
        num = num%1000000;
    } 

    if(num >= 1000){
        extra =  Math.trunc(num/1000);
        result+=(convert(extra, map) + " Thousand");
        num = num%1000;
    } 

    if(num > 0){
        result+=(convert(num, map));
    }

    return result.trim();
};

function convert(num, map){
    var sb = "";

    if(num>=100){
        var numHundred = Math.trunc(num/100);
        
        sb+=(" " +map[numHundred]+ " Hundred");
        num=num%100;
    }

    if(num > 0){
        if(num>0 && num<=20){
            sb+=(" "+map[num]);
        }else{
            var numTen =  Math.trunc(num/10);
            
            sb+=(" "+map[numTen*10]);

            var numOne=num%10;
            
            if(numOne>0)
                sb+=(" " + map[numOne]);
        }
    }

    return sb;
}
 
function buildMap(map){
    map[0] = "Zero";
    map[1] = "One";
    map[2] = "Two";
    map[3] = "Three";
    map[4] = "Four";
    map[5] = "Five";
    map[6] = "Six";
    map[7] = "Seven";
    map[8] = "Eight";
    map[9] = "Nine";
    map[10] = "Ten";
    map[11] = "Eleven";
    map[12] = "Twelve";
    map[13] = "Thirteen";
    map[14] = "Fourteen";
    map[15] = "Fifteen";
    map[16] = "Sixteen";
    map[17] = "Seventeen";
    map[18] = "Eighteen";
    map[19] = "Nineteen";
    map[20] = "Twenty";
    map[30] = "Thirty";
    map[40] = "Forty";
    map[50] = "Fifty";
    map[60] = "Sixty";
    map[70] = "Seventy";
    map[80] = "Eighty";
    map[90] = "Ninety";
}
