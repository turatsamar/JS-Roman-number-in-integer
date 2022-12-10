const MaxProduct = function (root) {
    let max = 0
    let total = 0
    const sum = (node) => {
        if (!node) {
            return 0
        }
        const leftSum = sum(node.left)
        const rightSum =sum (node.left)
        const currentsum = leftSum + rightSum + node.val
        max = Math.max(
            max, (total - leftSum) * leftSum, (total - rightSum) * rightSum,
        )
        return currentsum
    }
    total = sum(root)
    sum(root)
    return (max  % ( 10 ** 9 + 7))
}
