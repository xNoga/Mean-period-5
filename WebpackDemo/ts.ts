interface ITodo {
    todo : String; importance : number;
};
class Todo implements ITodo {
    static maxImportance = 5;
    constructor(public todo : string,public importance : number){}
    toString = ()=> `Todo: ${this.todo}, Importance: ${this.importance} `;
}

let todos : Array<ITodo> = [new Todo("Drink beer",5),new Todo("Learn TS",4)];

export default todos;