import * as ReactDOM from 'react-dom';
 import { createDarkTheme, createLightTheme } from '@fluentui/react-components';

 import type { BrandVariants, Theme } from '@fluentui/react-components';
 import { Example } from './example';

 const myNewTheme: BrandVariants = { 
  10: "#080100",
  20: "#2C0D04",
  30: "#4C0B09",
  40: "#5B1816",
  50: "#672822",
  60: "#733730",
  70: "#7F463E",
  80: "#8B544D",
  90: "#96635C",
  100: "#A1736C",
  110: "#AD827C",
  120: "#B8928C",
  130: "#C3A29D",
  140: "#CEB2AE",
  150: "#D9C3BF",
  160: "#E4D3D1"
};

 const lightTheme: Theme = {
   ...createLightTheme(myNewTheme), 
};

 const darkTheme: Theme = {
   ...createDarkTheme(myNewTheme), 
};

 darkTheme.colorBrandForeground1 = myNewTheme[110]; // use brand[110] instead of brand[100]
 darkTheme.colorBrandForeground2 = myNewTheme[120]; // use brand[120] instead of brand[110]

 ReactDOM.render(
   <Example lightTheme={lightTheme} darkTheme={darkTheme} />,
   document.getElementById('root'),
 );