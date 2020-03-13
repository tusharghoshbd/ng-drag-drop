import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-dream-app';
    public documentList: any = [];
    public documentTypeList: any = [];
    public documentTypeListBK: any = [];
    public currentDraggableEvent: DragEvent;

    constructor() {
    }

    ngOnInit() {
        for(let i=1; i<=5; i++){
            this.documentList.push({ "id": i, "content": 'file_name_'+i+'.pdf', effectAllowed: "copyMove", disable: false, handle: false, show: true });
            this.documentTypeListBK.push({ "id": "doctype_" + i, "content": "", "type": "Label "+i,  max: 1, effectAllowed: "move", disable: false, handle: false, empty: true });
            this.documentTypeList.push({ "id": "doctype_" + i, "content": "", "type": "Label "+i,  max: 1, effectAllowed: "move", disable: false, handle: false, empty: true });
        }
        
    }

    onDraggableStart(item: any) {
        this.currentDraggableEvent = item;
    }

    onLeftDraggableCopied(item: any) {
        const index = this.documentList.indexOf(item);
        this.documentList.splice(index, 1);
    }

    onRightDraggableCopied(item: any) {
        const index = this.documentTypeList.indexOf(item);
        this.documentTypeList[index].content = "";
        //this.documentAssociationObj[this.employee] = JSON.parse(JSON.stringify(this.documentTypeList));
    }

    onLeftDrop(event: any) {
        let index = JSON.parse(JSON.stringify(event)).index;
        if (typeof index === "undefined") {
            index = this.documentList.length;
        }
        let tempObj = JSON.parse(JSON.stringify(this.currentDraggableEvent));
        tempObj["content"] = tempObj.content;
        tempObj["effectAllowed"] = "move";
        tempObj["disable"] = false;
        tempObj["handle"] = true;
        tempObj["show"] = true;
        this.documentList.splice(index, 0, tempObj);
    }

    onRightDrop(event: any, item: any) {
        let tempObj = JSON.parse(JSON.stringify(this.currentDraggableEvent));
        let index = this.documentTypeList.indexOf(item);
        this.documentTypeList[index].content = tempObj.content;
        //this.documentAssociationObj[this.employee] = JSON.parse(JSON.stringify(this.documentTypeList));
    }
}
