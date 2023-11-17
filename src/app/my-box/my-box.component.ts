
import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  SimpleChanges
} from "@angular/core";
import { css } from "@emotion/css";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";


// AUTHOR: Cristian Puenguenan
// https://gist.github.com/cristsr/0bc5bdf4769a7dcaefc9c290c05e81c9
@Component({
  selector: 'app-box',
  templateUrl: './my-box.html'
})
export class MyBoxComponent implements OnInit, AfterContentInit {
  //@ts-ignore
  @HostBinding("class") className;
  //@ts-ignore
  @Input() customStyle: string;
  //@ts-ignore
  @Input() variant: string;
  //@ts-ignore
  @Input() small: boolean;
  //@ts-ignore
  @Input() disable: boolean;
  defaultInputs = new BehaviorSubject<any>({
    small: true,
    disable: true,
    variant: "green"
  });

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const inputs = Object.keys(changes).reduce(function(result:any, item:any) {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs:any) {
    return css`
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 3px 15px;
      cursor: pointer;
      ${inputs.variant === "red" &&
        css`
          background-color: #f44336;
        `}
      ${inputs.variant === "green" &&
        css`
          background-color: #4caf50;
        `}
      ${inputs.small &&
        css`
          padding: 5px 10px;
        `}
      ${inputs.disable &&
        css`
          cursor: not-allowed;
          pointer-events: none;
          opacity: 0.3;
        `}
    `;
  }

  ngOnInit() {
    const { customStyle, ...others } = this;
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...others });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngAfterContentInit() {}
}
