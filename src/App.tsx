import { Layout } from "components/layout";
import { ThemeProvider } from "context/theme-context";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
