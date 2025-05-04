import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ExportTableComponent } from "../exportTable/exportTable.component";
import { ImportTableComponent } from "../importTable/importTable.component";
import { NewUserComponent } from "../newUser/newUser.component";

@Component({
  selector: "app-topNavBar",
  imports: [
      CommonModule,
      NewUserComponent,
      ExportTableComponent,
      ImportTableComponent,
  ],
  templateUrl: './topNavBar.component.html',
  styleUrls: ['./topNavBar.component.css']
})
export class TopNavBarComponent {


}