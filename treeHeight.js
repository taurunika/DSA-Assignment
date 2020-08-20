const treeHeight = (str) => {
    const node = str.split(" ");
    const tree = [];
    let tNode = -1;
    let count = 0;
    let height = 0;
    while (count < node.length) {
        for (let i = 0; i < node.length; i++) {
            if (node[i] == tNode) {
                tree.push(i);
                count++;
            }
        }
        height++;
        tNode = tree[tree.length - 1];
    }
    return height;

}

const str1 = "4 -1 4 1 1";
console.log(treeHeight(str1));