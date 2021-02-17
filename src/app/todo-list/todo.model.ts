export class Todo {
    private title : string; // todo 名稱
    private completed : boolean; // 判斷是否完成

    constructor(title : string){ 
        // 使用 建構子 新增 todo
        this.title = title;
    }
}
