import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reds = ['ball', 'bat', 'tennis'];
  blues = ['cricket', 'sports', 'football', 'NBA'];
  greens = ['worldcup', 'IPL'];
  blacks = ['FIFA', 'India', 'Hockey'];

  delete(stack: any, index: any) {
    if (stack === 'red') this.reds.splice(index, 1);
    if (stack === 'blue') this.blues.splice(index, 1);
    if (stack === 'green') this.greens.splice(index, 1);
    if (stack === 'black') this.blacks.splice(index, 1);
  }

  add(stack: any) {
    if (stack.length < 8) {
      stack.push('New Item');
    } else {
      alert('Maximum slot limit reached');
    }
  }
  
  drop(event: CdkDragDrop<string[]>, data: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else if (data.length < 8) {
      {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    } else alert('Maximum slot limit reached')
  }
}
