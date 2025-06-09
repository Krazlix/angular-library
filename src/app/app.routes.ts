import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { TestComponent } from './pages/test/test.component';
import { TestBlockComponent } from './test-block/test-block.component';
import { title } from 'node:process';

export const routes: Routes = [{ path: "test/form", component: FormComponent, data: { title: 'form', showInNavbar: true, submenuOf: 'test' } },
{ path: "test", component: TestComponent, data: { title: 'test', showInNavbar: true } },
{ path: "test/block", component: TestBlockComponent, data: { title: 'block', showInNavbar: true, submenuOf: 'test' } },
{ path: "fake", component: TestComponent, data: { title: 'fake link', showInNavbar: true } },
{ path: "link 1", component: TestComponent, data: { title: 'link 1', showInNavbar: true, submenuOf: 'fake link' } },
{ path: "link 2", component: TestComponent, data: { title: 'link 2', showInNavbar: true, submenuOf: 'fake link' } },
{ path: "another test", component: TestComponent, data: { title: 'solo link', showInNavbar: true} },
{ path: "", component: TestComponent }];
