class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let s = new Set();
        for(let i of nums){
            s.add(i)
        }
        return !(s.size == nums.length);
    }
}
