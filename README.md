# Angular Drag and Drop

A simple drag and drop library that help to move data from draggable to droppable.

## Demo
![](https://media.giphy.com/media/STT33JzC8WdvWtjNo3/giphy.gif)

 [Demo](https://stackblitz.com/edit/tushar-ng-drag-drop?file=src%2Fapp%2Fapp.component.html).

## Installation
```angular
npm i ngx-drag-drop
npm i tushar-ng-drag-drop
```

## Usage

#### App Module
```angular
import {DragDropModule} from 'drag-drop'

imports: [
  DragDropModule
],
```
#### Html file
```angular
<ng-drag-drop 
   [documentList]="documentList"
   [documentTypeList]="documentTypeList"
   (onDraggable) ="onDraggableData($event)"
   (onLeftDraggableDrop)="onLeftDraggableDrop($event)"
   (onRightDraggableDrop)="onRightDraggableDrop($event)"
></ng-drag-drop>
```

#### Ts file
```angular
public documentList: any = [];
public documentTypeList: any = [];
constructor(){      
}
onDraggableData(itemObj:any){
  console.log(itemObj);  
}
onLeftDraggableDrop(leftItemArr:any){
  console.log(leftItemArr);
}
onRightDraggableDrop(rightItemArr:any){
  console.log(rightItemArr);
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Ref
[NgxDragDrop](https://www.npmjs.com/package/ngx-drag-drop)

## License
[MIT](https://choosealicense.com/licenses/mit/)