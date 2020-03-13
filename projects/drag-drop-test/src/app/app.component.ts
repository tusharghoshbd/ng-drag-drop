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
  ngOnInit() {
        for(let i=1; i<=5; i++){
            this.documentList.push({ "id": i, "content": 'file_name_'+i+'.pdf', effectAllowed: "copyMove", disable: false, handle: false, show: true });
            //this.documentTypeListBK.push({ "id": "doctype_" + i, "content": "", "type": "Label "+i,  max: 1, effectAllowed: "move", disable: false, handle: false, empty: true });
            this.documentTypeList.push({ "id":  i, "content": "", "type": "Label "+i,  max: 1, effectAllowed: "move", disable: false, handle: false, empty: true });
        }
    }

    onDraggableData(itemObj:any){
        console.log(itemObj);
    }
    onLeftDraggableDrop(leftItemArr:any){
        console.log("onLeftDraggableDrop");
        console.log(leftItemArr);
    }
    onRightDraggableDrop(rightItemArr:any){
        console.log("onRightDraggableDrop");
        console.log(rightItemArr);
    }
}
