import {TypographyTheme} from "./atoms/Typography";
import { Space } from "./atoms/space";
import {PaletteColor} from './atoms/palette';
function App() {
  return (
    <div>
      <TypographyTheme></TypographyTheme>
      <Space></Space>
      <PaletteColor></PaletteColor>
    </div>
  );
}

export default App;
