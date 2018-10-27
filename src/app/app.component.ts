import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  item: any = '';
  todoArray=[];
  todo;

  addToList(itemVal){
  	this.item = itemVal;
  	this.todoArray.push(this.item);
  	this.item = '';
  }

  deleteItem(item){
  	this.todoArray = this.todoArray.filter(each=> each!==item);
  }

  // submit Form
  todoSubmit(value:any){
    if(value!==""){
    this.todoArray.push(value.val);
     //this.todoForm.reset()
    }

    else{
      alert('Field required **')
    }  
  }

}
