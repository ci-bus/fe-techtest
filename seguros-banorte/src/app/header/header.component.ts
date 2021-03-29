import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    logoSrc = '/assets/images/logo.png';
    logoAlt = 'Seguros BANORTE';

    constructor() { }

    ngOnInit(): void {

    }

}
