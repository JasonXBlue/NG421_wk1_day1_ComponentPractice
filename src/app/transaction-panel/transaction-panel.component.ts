import { Component, OnInit } from "@angular/core";
import orders from "../orders";
@Component({
  selector: "app-transaction-panel",
  templateUrl: "./transaction-panel.component.html",
  styleUrls: ["./transaction-panel.component.css"]
})
export class TransactionPanelComponent implements OnInit {
  orders: Array<any> = [];
  constructor() {}

  ngOnInit() {
    this.orders = orders;
  }
}
