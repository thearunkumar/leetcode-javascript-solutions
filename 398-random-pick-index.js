/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.list = {};
    
    for (var i = 0; i < nums.length; ++ i) {
        var num = nums[i];
        if (this.list[num] === undefined) {
            this.list[num] = [];
        }
        this.list[num].push(i);
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    var indices = this.list[target];
    var i = 0, len = indices.length;
    var x = len;
    while (i < len) {
        if (Math.random() < (1 / x)) {
            return indices[i];
        }
        ++ i;
        -- x;
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
