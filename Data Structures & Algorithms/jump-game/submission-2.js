class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let lastIndex = nums.length - 1
        console.log(`Last index: ${lastIndex}`);
        for(let i = nums.length - 2; i >= 0; i--){
            if(i + nums[i] >= lastIndex){
                lastIndex = i;
            }
        } return lastIndex === 0;
    }
}