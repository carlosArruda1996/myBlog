import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoTitle:string = ""

  @Input()
  cardDescription:string = "A linguagem java é uma linguagem que nasceu no ano de 1995 por James Gosling na empresa Sun Microsystemns, atualmente é uma das linguagens mais utilizadas no mercado contanto com suporte para back-end, front-end, mobile e nos ultimos anos até mesmo com cloud computing com o framework Quarkus."

  constructor(){

  }
  
  ngOnInit(): void {
    
  }

}
