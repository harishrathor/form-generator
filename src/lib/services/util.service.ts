import { Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
/* 
    constructor(public renderer: Renderer2) {

    }
 */
    public addCssClasses(element: HTMLElement, spaceSeparatedClasses: string) {
        try {
            element.className = spaceSeparatedClasses;
            /* const classesArr = spaceSeparatedClasses.split(' ');
            classesArr.forEach((cssClass) => {
                //this.renderer.addClass(element, cssClass);
            }); */
        } catch (error) {
            console.log(error);
        }
    }

    public applyInlieCssBySelector(selector: string, cssStyle: any) {
        try {
            const elementList = document.querySelectorAll(selector);
            elementList.forEach(element => {
                try {
                    for (let cssProp in cssStyle) {
                        try {
                            let propValue = cssStyle[cssProp];
                            element["style"][cssProp] = propValue;
                        } catch (error) { }
                    }
                } catch (error) { }
            });
        } catch (error) {
            console.log(error);
        }
    }
}