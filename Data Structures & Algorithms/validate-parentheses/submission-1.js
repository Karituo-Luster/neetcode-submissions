class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    //case: {{}()}
    //case: {{(})}
    isValid(s) {
        let l = s.length
        if(l < s)
            return false;

        let a = []
        for(let i = 0; i < l; i++){
            const c = s[i]
            switch(c){
                case '(':
                case '[':
                case '{':
                    a.push(c);
                    continue;
                case ')':
                    if(a.pop() !== '('){return false;}
                    continue;
                case ']':
                    if(a.pop() !== '['){return false;}
                    continue;
                case '}':
                    if(a.pop() !== '{'){return false;}
                    continue;
                default:
                    continue;
            }
        }
        return a.length === 0;
    }
}
