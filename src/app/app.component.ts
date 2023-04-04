import {Component, OnInit} from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { AccordionModule } from 'ng-devui/accordion';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'Demo';

    ngOnInit(): void {

    }

    husband() {
        alert(1);
    }
}
