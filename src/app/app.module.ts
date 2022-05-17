import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeblockComponent } from './codeBlock/codeBlock.component';
import { CodeblockBoxComponent } from './codeblock-box/codeblock-box.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TodoCreateFormComponent } from './todo-create-form/todo-create-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    CodeblockComponent,
    CodeblockBoxComponent,
    TodoCreateFormComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}






