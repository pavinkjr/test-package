import { NgModule } from "@angular/core";

import { TestComponent } from "./test.component";

import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [BrowserModule],
  exports: [
    TestComponent,
  ],
  providers: []
})
export class TestModule {}
