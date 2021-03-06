import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../../models/ingredient.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef;
  @ViewChild('amountInput') amountInputRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(nameInputRef: ElementRef, amountInputRef: ElementRef) {
    this.nameInputRef = nameInputRef;
    this.amountInputRef = amountInputRef;
  }

  ngOnInit(): void {
  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.ingredientAdded.emit(newIngredient);
  }

}
