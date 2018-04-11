import { NgModule } from "@angular/core";
import { Detail } from "./detail";
import { IonicPageModule } from "ionic-angular";


@NgModule({
    declarations:[Detail],
    exports:[Detail],
    imports:[IonicPageModule.forChild(Detail)]
})
export class DetailModule{

}