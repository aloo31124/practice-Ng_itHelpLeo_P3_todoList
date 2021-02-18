export class Todo {
    private title : string; // todo 名稱
    private completed : boolean; // 判斷是否完成

    constructor(title : string){ 
        // 使用 建構子 新增 todo
        this.title = title;
    }

    getTitle(): string{
        // 取得 todo 名稱
        return this.title;
    }

    get done() : boolean{
        // 取得該 todo 是否完成
        return this.completed;
    }

    toggleCompletion() : void {
        // 切換 是否完成此 todo
        this.completed = ! this.completed;
    }
}
