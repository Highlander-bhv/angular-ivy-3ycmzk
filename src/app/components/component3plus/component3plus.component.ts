import {Component, OnInit} from '@angular/core';

@Component({
               selector: 'app-component3plus',
               // templateUrl: './component3plus.component.html',
               templateUrl: '../../HTMLtemp/template.html',
               styleUrls  : ['./component3plus.component.sass']
           })
export class Component3plusComponent implements OnInit {
    ComponentCall = 'Component No.3'

    public addHTML: string   = '';
    public variableList: any = [];

    vari1 = {name: 'Vari1 of component3'};
    vari2 = {name: 'Vari2 of component3'};
    vari3 = {name: 'Vari3 of component3'};
    vari4 = {name: 'Vari4 of component3'};


    /*Added Variable and HTML for additional content for the templateHTML*/

    number1: number = 11
    number2: number = 42

    constructor() { }

    ngOnInit(): void {
        this.variableList.push(
            "templateUrl: './component1.component.html'",
            this.vari1,
            this.vari2,
            this.vari3,
            this.number2
        )


        this.addHTML =
            "<p> <i>Now the result of the added sting in the HTML look: </i><br>" +
            `<b>foo: ${Math.round(this.number1 * 10) / 10}  ${this.number2}` + " </b> &#160;&#160;= &#160;&#160;<b>&#8730;</b>bla bla 1 <br>" +
            `<b>aMax: ${Math.round(this.number2 * 10) / 10}  ${this.number1}` + " </b> &#160;&#160;=&#160;&#160; bla bla 2</p>"


    }

}


