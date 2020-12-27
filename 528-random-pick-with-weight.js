/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0;
    this.weights = new Map();
    for (var i = 0; i < w.length; ++ i) {
        this.sum += w[i];
        this.weights.set(this.sum, i);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    var index = Math.floor(Math.random() * this.sum);
    for (var i of this.weights.keys()) {
        if (index < i) {
            return this.weights.get(i);
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
