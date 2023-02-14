import 'styled-components';
import { Color, Colors } from './styles/theme';
import { spacing } from './styles/spacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    spacing: (number: number) => string;
  }
}
