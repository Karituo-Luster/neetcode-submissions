class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    //case: {{}()}
    //case: {{(})}
    isValid(s) {
        while(s.includes('()') || s.includes('[]') || s.includes('{}')){
            console.log(s);
            s = s.replace('()', '')
            s = s.replace('{}', '')
            s = s.replace('[]', '')
            
        }
        return s === '';
    }
}
