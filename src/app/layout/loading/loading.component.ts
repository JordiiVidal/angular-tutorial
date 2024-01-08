import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template: `
    <section id="loading">
      <h1>{{ title }}</h1>
      <p>LOADING ...</p>
    </section>
  `,
  styles: `
    #loading{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class LoadingComponent {
  @Input() title!: string;
}
