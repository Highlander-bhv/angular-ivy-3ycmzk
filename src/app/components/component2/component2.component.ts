import {Component, OnInit} from '@angular/core';

@Component({
               selector: 'app-component2',
               //templateUrl: './component2.component.html',
               templateUrl: '../../HTMLtemp/template.html',
               styleUrls  : ['./component2.component.sass']
           })
export class Component2Component implements OnInit {
    ComponentCall = 'Component No.2'

    public addHTML: string   = '';
    public variableList: any = [];

    vari1 = {name: 'Vari1 of component2'};
    vari2 = {name: 'Vari2 of component2'};
    vari3 = {name: 'Vari3 of component2'};


    constructor() { }

    ngOnInit(): void {

        /* By variableList the content for the common HTML template will be specified */
        this.variableList.push(
            "templateUrl: '../../HTMLtemp/template.html''",
            this.vari1,
            this.vari2,
            this.vari2,
            this.vari3,
            this.vari3,
            this.vari3,
        )

    }

}
