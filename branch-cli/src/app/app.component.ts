import { Component, OnInit, AfterViewInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

//declare var QueryLoader:any;
declare var JsJs:any;

@Component({
  selector: 'bb-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit  {
  title = 'Branch s.r.o.';

  constructor(public translate: TranslateService)
  {
    translate.addLangs(['sk', 'en']);
    translate.setDefaultLang('sk');
    translate.use('sk');

    //let browserLang = translate.getBrowserLang();
    //translate.use(browserLang.match(/en|sk/) ? browserLang : 'sk');
  }

  ngOnInit(): void {
    // QueryLoader.init();
  }

  ngAfterViewInit(): void {
    //QueryLoader.init(); 
    JsJs.init();
  }

}
