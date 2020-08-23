import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { SingletonService } from '../services/singleton/singleton';
import { HomePage } from '../pages/home/home';
import { MeditationPage } from '../pages/meditation/meditation';
import { TransferPage } from '../pages/transfer/transfer';
import { LoginPage } from '../pages/login/login';
import { MeditationPlayPage } from '../pages/meditation-play/meditation-play';
import { YogaPage } from '../pages/yoga/yoga';
import { SettingsPage } from '../pages/settings/settings';
import { ImpressumPage } from '../pages/impressum/impressum';
import { ErinnerungenPage } from '../pages/erinnerungen/erinnerungen';
import { PlanerPage } from '../pages/planer/planer';
import { YogaPlayPage } from '../pages/yoga-play/yoga-play';
import { BewegungPage } from '../pages/bewegung/bewegung';
import { ErnaehrungPage } from '../pages/ernaehrung/ernaehrung';
import { ErnaeAllgemeinesPage } from '../pages/ernae-allgemeines/ernae-allgemeines';
import { ErnaeNwlindernPage } from '../pages/ernae-nwlindern/ernae-nwlindern';
import { ErnaeRezeptePage } from '../pages/ernae-rezepte/ernae-rezepte';
import { ErnaeBeiBrustkrebsPage } from '../pages/ernae-bei-brustkrebs/ernae-bei-brustkrebs';
import { BewegProfilPage } from '../pages/beweg-profil/beweg-profil';
import { BewegAlltagPage } from '../pages/beweg-alltag/beweg-alltag';
import { BewegAusdauerPage } from '../pages/beweg-ausdauer/beweg-ausdauer';
import { BewegKraftPage } from '../pages/beweg-kraft/beweg-kraft';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';
import { Zip } from '@ionic-native/zip/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';





@NgModule({
  declarations: [
    AppComponent,
    // BewegKraftPage,
    // BewegAusdauerPage,
    // BewegAlltagPage,
    // BewegProfilPage,
    // ErnaeBeiBrustkrebsPage,
    // ErnaeRezeptePage,
    // ErnaeNwlindernPage,
    // ErnaeAllgemeinesPage,
    // ErnaehrungPage,
    // BewegungPage,
    // YogaPlayPage,
    // PlanerPage,
    // ErinnerungenPage,
    // ImpressumPage,
    // SettingsPage,
    // YogaPage,
    // MeditationPlayPage,
    // LoginPage,
    // TransferPage,
    // MeditationPage,
    // HomePage
  ],
  entryComponents: [
    // BewegKraftPage,
    // BewegAusdauerPage,
    // BewegAlltagPage,
    // BewegProfilPage,
    // ErnaeBeiBrustkrebsPage,
    // ErnaeRezeptePage,
    // ErnaeNwlindernPage,
    // ErnaeAllgemeinesPage,
    // ErnaehrungPage,
    // BewegungPage,
    // YogaPlayPage,
    // PlanerPage,
    // ErinnerungenPage,
    // ImpressumPage,
    // SettingsPage,
    // YogaPage,
    // MeditationPlayPage,
    // LoginPage,
    // TransferPage,
    // MeditationPage,
    // HomePage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    File,
    // Zip,
    // Insomnia,
    SingletonService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
