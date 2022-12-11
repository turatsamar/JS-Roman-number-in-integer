var maxPathsum = function(root) {
    let max = -Infinity;

    function findmaxSum(root) {
        if(!root) return -Infinity;

        const left = findmaxSum(root.left);
        const right = findmaxSum(root.right);
        const leftAndVal = left + root.val;
        const rightAndval = right + root.val;
        const all = left + right + root.val;

        let currentMax = Math.max(
            leftAndVal, right, all, root.val
        );

        max = Math.max(currentMax, max);
        return Math.max(
            root.val,
            leftAndVal,
            rightAndval
        )
    }

    findmaxSum(root);
    return max;
};