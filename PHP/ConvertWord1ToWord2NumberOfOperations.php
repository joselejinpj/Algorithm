/*****

Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

Following 3 operations are allowed on a word:

Insert a character
Delete a character
Replace a character

-----------------
Sample Test Cases
-----------------

Test Case 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Test Case 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

*****/

/**
 * @param String $str1
 * @param String $str2
 * @return Integer
 */
<?php 
function minDistance($str1, $str2, $m, $n) {  
    // dp[][] in bottom up manner  - Dynamic programming memoization
	  for ($i = 0; $i <= $m; $i++) {   
		    for ($j = 0; $j <= $n; $j++) {  
			      if ($i == 0)  
				        $dp[$i][$j] = $j ;
  			    else if($j == 0)  
	  			      $dp[$i][$j] = $i;
		  	    else if($str1[$i - 1] == $str2[$j - 1])  
			  	      $dp[$i][$j] = $dp[$i - 1][$j - 1]; 
			      else {  
				        $dp[$i][$j] = 1 + min($dp[$i][$j - 1], // Insert  
					             				    $dp[$i - 1][$j], // Delete  
							  		              $dp[$i - 1][$j - 1]); // Replace  
			       } 
		    } 
	  } 
	
	  return $dp[$m][$n] ; 
} 

// minDistance($str1, $str2, strlen($str1), strlen($str2)); 
?>
