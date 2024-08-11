import { BrowserRouter } from "react-router-dom";
import Mainroutes from "./routes/Mainroutes";
import { ThemeProvider } from "@mui/material/styles";
import UseCustomTheme from "./components/UseCustomTheme";
import {CssBaseline} from "@mui/material";

function App() {
  const theme = UseCustomTheme();
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
   <BrowserRouter>
   <Mainroutes/>
   </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
