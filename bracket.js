const bracket = {
    '(': ')',
    '[': ']',
    '{': '}'
}


const matching = (str) => {
    const mStack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
            mStack.push(str[i]);
        } else if (str[i] == "}" || str[i] == "]" || str[i] == ")") {
            let lastbracket = mStack.pop()
            if (str[i] !== bracket[lastbracket]) {
                return i + 1;
            }
        }

    }


    if (mStack.length !== 0) {
        return (mStack.indexOf(mStack[mStack.length - 1]) + 1);
    }

    return "Success";
}

str1 = "{}[]";
str2 = "[()]";

console.log(bracketmatching(str1));
console.log(bracketmatching(str2));