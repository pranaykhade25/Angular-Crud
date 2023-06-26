import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";
import { FinanceComponent } from "./components/finance/finance.component";
import { TechComponent } from "./components/tech/tech.component";
import { WritingComponent } from "./components/writing/writing.component";
import { HomeComponent } from "./home/home.component";
import { StudentComponent } from "./students/student/student.component";
import { StudentsComponent } from "./students/students.component";

const routes: Routes = [
    {path:'', redirectTo:'home' , pathMatch:'full'},
    {path:'app',component:AppComponent},

    {path:'std',component:StudentsComponent},
    {path:'tech',component:FinanceComponent},
    {path:'fin',component:TechComponent},
    {path:'write',component:WritingComponent},
    
    
    {path: 'home',component:HomeComponent},
    {path: 'about', component:AboutComponent}
    
    
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

