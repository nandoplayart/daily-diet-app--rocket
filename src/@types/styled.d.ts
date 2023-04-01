import 'styled-components'
import { GlobalTheme } from '../configurations/theme';

declare module 'styled-components'{
    type ThemaType = typeof GlobalTheme

    export interface DefaultTheme extends ThemaType{
        
    } 
}