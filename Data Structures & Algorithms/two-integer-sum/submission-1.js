class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0, j=nums.length
        while(target - nums[i] != nums[j]){
            j--;
            if(j == i){
                i++;
                j = nums.length;
            }            
        }
        return [i,j]
    }
}
