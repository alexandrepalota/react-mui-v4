import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Notes from './pages/Notes'
import Create from './pages/Create'
import { purple } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand'
  },
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: {
      main: purple
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
