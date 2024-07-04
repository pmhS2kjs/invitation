import '@emotion/react';

type ColorId =
  | 'gray0'
  | 'gray50'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray1000'
  | 'lightBlue100'
  | 'lightBlue500'
  | 'red100'
  | 'red500'
  | 'green100'
  | 'green500'
  | 'yellow500';

type TypographyId =
  | 'bigTitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'content1'
  | 'content2'
  | 'content3'
  | 'content4'
  | 'bigTitleBold'
  | 'h1Bold'
  | 'h2Bold'
  | 'h3Bold'
  | 'content1Bold'
  | 'content2Bold'
  | 'content3Bold'
  | 'content4Bold'
  | 'buttonXS'
  | 'buttonS'
  | 'buttonM'
  | 'menuButton';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      [key in ColorId]: string;
    };
    typography: {
      [key in TypographyId]: {
        fontSize: string;
        lineHeight?: string;
        letterSpacing: string;
        fontWeight: number;
      };
    };
  }
}
