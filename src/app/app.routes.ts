import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { TestComponent } from './pages/test/test.component';
import { TestBlockComponent } from './test-block/test-block.component';

export const routes: Routes = [{ path: "test/form", component: FormComponent }, { path: "test", component: TestComponent }, { path: "", component: TestComponent }, { path: "test/block", component: TestBlockComponent }];
