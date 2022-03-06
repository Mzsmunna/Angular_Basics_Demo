import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent { //implements OnChanges,  OnInit,  DoCheck,  AfterContentInit,  AfterContentChecked,  AfterViewInit,  AfterViewChecked,  OnDestroy

  title: string = 'Welcome to Basics of Angular';
  count: number = 0;

  images: {title: string, short: string, src: string}[] = [
    {title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 1000;
    config.keyboard = true;
    config.pauseOnHover = true;

    console.log("This is invoked when Angular creates a component or directive by calling new on the class.");
  }

  // ngOnInit() {
  //   var carouselConfig = document.querySelector('carousel')! as any
  //   carouselConfig.carousel({
  //     interval: 2000,
  //     keyboard: true,
  //     pauseOnHover: true
  //   })
  // }

//#region Angular LifeCycle Hooks / Methods
  ngOnChanges() {
    console.log("Invoked every time there is a change in one of th input properties of the component.");
  }

  ngOnInit() {
    console.log(`Invoked when given component has been initialized.
    This hook is only called once after the first ngOnChanges`);
  }

  ngDoCheck() {
    console.log(`Invoked when the change detector of the given component is invoked.
    It allows us to implement our own change detection algorithm for the given component.

    Important : ngDoCheck and ngOnChanges should not be implemented together on the same component.`)
  }

  ngOnDestroy() {
    console.log(`This method will be invoked just before Angular destroys the component.
    Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks.`);
  }

  //Note: These hooks are only called for components and not directives.(Hooks for the Component’s Children)
  ngAfterContentInit() {
    console.log("Invoked after Angular performs any content projection into the component’s view");
  }

  ngAfterContentChecked() {
    console.log("Invoked each time the content of the given component has been checked by the change detection mechanism of Angular.");
  }

  ngAfterViewInit() {
    console.log("Invoked when the component’s view has been fully initialized.");
  }

  ngAfterViewChecked() {
    console.log("Invoked each time the view of the given component has been checked by the change detection mechanism of Angular.");
  }

  readonly lifeCycleHooksRef: string = "https://www.freecodecamp.org/news/angular-lifecycle-hooks/";
  //#endregion

  Hide(): void {
    console.log("trying to hide modal");
    // var modalDiv: any = document.getElementById('staticBackdrop') as any
    // modalDiv.modal('hide');
  }

  Counter(): number {
    return this.count++;
  }
}
