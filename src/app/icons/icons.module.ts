import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInbox, faStar, faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faInbox, faStar, faUserCheck, faUserPlus)
  }

}
