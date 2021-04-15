import { Component, VERSION } from "@angular/core";
import { Contacts } from "./model/contacts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  contactList: Contacts[] = [];
}
