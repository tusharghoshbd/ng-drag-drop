import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'drag-drop-test';
  public documentList: any = [];
  public documentTypeList: any = [];
  public actionName = "";
  public count = 0;
  public actionDetail:any;
  ngOnInit() {
        for(let i=1; i<=5; i++){
            this.documentList.push({ "id": i, "content": 'file_name_'+i+'.pdf', effectAllowed: "copyMove",  show: true });
            //this.documentTypeListBK.push({ "id": "doctype_" + i, "content": "", "type": "Label "+i,  max: 1, effectAllowed: "move", disable: false, handle: false, empty: true });
            this.documentTypeList.push({ "id":  i, "content": "", "type": "Label "+i,  effectAllowed: "move" , show: true});
        }
    }

    onDraggableData(itemObj:any){
        this.actionName = "onDraggableData";
        this.count++;
        this.actionDetail = itemObj;
        console.log(itemObj);
    }
    onLeftDraggableDrop(leftItemArr:any){
        this.actionName = "onLeftDraggableDrop";
        this.count++;
        this.actionDetail = leftItemArr;
        console.log("onLeftDraggableDrop");
        console.log(leftItemArr);
    }
    onRightDraggableDrop(rightItemArr:any){
        this.actionName = "onRightDraggableDrop";
        this.count++;
        this.actionDetail = rightItemArr;
        console.log("onRightDraggableDrop");
        console.log(rightItemArr);
    }
}
