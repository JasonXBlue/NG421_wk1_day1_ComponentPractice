import { Component, OnInit, Input } from "@angular/core";
import message from "../messages";
@Component({
  selector: "app-message-preview",
  templateUrl: "./message-preview.component.html",
  styleUrls: ["./message-preview.component.css"]
})
export class MessagePreviewComponent implements OnInit {
  //@Input() message: {};
  @Input() message = {
    id: 0,
    name: "",
    date: "",
    message: ""
  };
  constructor() {}

  ngOnInit() {}
}
