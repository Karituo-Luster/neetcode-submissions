class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let Sor = [...s];
        let Tor = [...t];
        Sor = Sor.sort()
        Tor = Tor.sort()
        for(let i in Sor){
            if(Sor[i] !== Tor[i]){
                return false
            }
        }
        return true;
    }
}
