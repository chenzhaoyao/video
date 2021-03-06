import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import {MatIconRegistry} from "@angular/material";
import {ProgressBarValueService} from "./share/progress-bar-value.service";
import {slideInAnimation} from "./animations";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

    progressBarValue$: Observable<number> = this.progressBarService.progressBarValue;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

    constructor(private breakpointObserver: BreakpointObserver,
                private matIconRegistry: MatIconRegistry,
                private progressBarService: ProgressBarValueService ) {

        this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }


    ngOnInit(): void {
    }

    getAnimationData(routerOutlet) {

        return true;
    }
}
