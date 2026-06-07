class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i in numbers){
            for(let next = Number(i) + 1; next < numbers.length; next++){
                if(numbers[i]+numbers[next] == target){
                    return [Number(i) + 1, next + 1];
                }
            }
        }
        return 0;
    }
}
