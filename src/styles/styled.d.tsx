import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    background: {
      primary: string;
      secondary: string;
    };
    color: {
      primary: string;
    };
  }
}
