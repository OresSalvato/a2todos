import { Component, OnInit, ViewChild } from '@angular/core';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { UserAdminService } from '../../../shared/services/http/recash-services';

import { OverlayContainerComponent } from '../overlay-container/overlay-container.component';


@Component({
  selector: 'lang-selector',
  templateUrl: 'lang-selector.component.html'
})
export class LangSelectorComponent implements OnInit {

  @ViewChild(OverlayContainerComponent) overlay: OverlayContainerComponent;

  constructor(private translateService: TranslateService,
    private userAdminService: UserAdminService) { }

  ngOnInit() { }

  private get currentLanguage() {
    return this.translateService.currentLang;
  }

  choseLang() {
    this.overlay.show();
  }

  setLang(lang) {
    this.overlay.hide();
    this.translateService.use(lang);
    localStorage.setItem('UI_LANG', lang);
    this.userAdminService.setPreferedLanguage(lang)
      .subscribe();
  }
}
