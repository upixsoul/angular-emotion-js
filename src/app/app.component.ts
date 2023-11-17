import { Component, OnInit } from '@angular/core';
import { css } from '@emotion/css'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public buttonStyle: any;
  public h1Style: any;
  public h3Style: any;

  ngOnInit(): void {
    /*const myClassName = css`
    color: hotpink;
    margin-top: 10px;
    margin-bottom: 20px;
    `;*/
    const buttonClassStyle = css(
      {
        color:'blue',
        marginTop:'10px',
        marginBottom:'20px'
      }
    );
    this.buttonStyle = buttonClassStyle;

    const h1ClassStyle = css(
      {
        color:'red',
        backgroundColor:'yellowgreen',
        fontStyle:'italic',
        textAlign: 'center'
      }
    );
    this.h1Style = h1ClassStyle;

    const h3ClassStyle = css(
      {
        color:'aqua',
        backgroundColor:'darkslategrey',
        fontStyle:'italic'
      }
    );
    this.h3Style = h3ClassStyle;
  }
}
