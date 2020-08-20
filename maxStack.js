class mStack{
    constructor(){
        this.stack = [];
        this.mStack = [];
    }

    pop(){
        let num = this.stack.splice((this.stack.length-1),1)[0];
        console.log(num);
        if(num === this.mStack[this.mStack.length-1]) this.mStack.splice((this.mStack.length-1),1);
    }

    push(item){
        if(this.mStack.length === 0){
            this.stack[this.stack.length] = item;
            this.mStack[this.mStack.length] = item;
        }
        else {
            this.stack.push(item);
            if(item > this.mStack[this.mStack.length -1]){
                this.mStack[this.mStack.length] = item;
            }
        }
    }

    max(){
        console.log(this.mStack[this.mStack.length-1]);
    }

    display(){
        console.log(this.stack);
    }
}

let obj = new maxStack();
 obj.push(10);
 obj.print();
 obj.push(30);
 obj.print();
 obj.max();
 obj.pop();
 