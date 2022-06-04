import {Component, OnInit} from '@angular/core';

@Component({
               selector: 'app-component1',
               // templateUrl: './component1.component.html',
               templateUrl: '../../HTMLtemp/template.html',

               styleUrls: ['./component1.component.sass']
           })
export class Component1Component implements OnInit {
    ComponentCall            = 'Component No.1'
    public addHTML: string   = '';
    public variableList: any = [];


    vari1   = {name: 'Vari1 of component1'};
    vari2   = {name: 'Vari2 of component1'};
    vari3   = {name: 'Vari3 of component1'};
    vari_42 = {name: 'Vari 42! of component1'};


    constructor() { }

    ngOnInit(): void {
        /* By variableList the content for the common HTML template will be specified */
        this.variableList.push(
            "templateUrl: '../../HTMLtemp/template.html'",  // If no object, the other cases will be treated in the HTML
            this.vari1,
            this.vari_42,
            this.vari3,
        )

    }

}
