import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  #app > div {
    min-height: 100%;
  }
  div{
   -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
      user-select:none;
  }
  .bs-link-normal a{
  color:rgba(0, 0, 0, 0.65);
  }
.bs-link-normal a:hover{
  color:rgb(2, 112, 201);
}
  .bs-link-blue a{
  color:rgb(2, 112, 201);
  }
.bs-link-blue a:hover{
  color:rgb(2, 112, 255);
}


  .bs-text-btn-blue{
  color:rgb(2, 112, 201);
  cursor:pointer;
  }
.bs-text-btn-blue:hover{
  color:rgb(2, 112, 255);
    cursor:pointer;
}
  .bs-text-btn-normal{
   color:rgba(0, 0, 0, 0.65);
  cursor:pointer;
  }
.bs-text-btn-normal:hover{
  color:rgb(2, 112, 201);

}

`;
