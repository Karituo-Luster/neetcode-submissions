class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length-1

        while(l < r){
            while(l < r && !this.a(s[l])){
                l++;
            }
            while(r > l && !this.a(s[r])){
                r--;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            }
            l++; r--;
        }
        return true;
    }

    a(c){
        return( (c >= 'A' && c <= 'Z') ||
                (c >= 'a' && c <= 'z') ||
                (c >= '0' && c <= '9')
        );
    }
/**
 * left-right traversal
 * reversal
 */
}
