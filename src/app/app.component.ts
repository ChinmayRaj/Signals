import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signalDemo';
x=signal(10);
y=signal(20);

z=computed(()=>this.x()+this.y());
users=["Anil","Bhavya","Chinmay"];
userDeta=[
  {name:"Chinmay",age:"23",location:"Bangalore"},
  {name:"Anil",age:"33",location:"Pune"},
  {name:"Bhavya",age:"21",location:"Dehradun"}
]
//   count=signal(10);
//   x=10;

//  constructor(){
//   effect(()=>{
//     console.log(this.count());
//   })
// }

//   increaseSignal(){
//   this.count.set(this.count()+1);
 
//  }
//  decreaseSignal(){
//   this.count.set(this.count()-1);
//  }
showValue(){
  console.log(this.z());
  this.x.set(100);
  console.log(this.z()); 
}
  
}
