import PackagesProvider from "./infra/packages";

import Home from "./ui/screens/Home";
import Header from "./ui/components/Header";

function App() {
  return (
    <PackagesProvider>
      <Header />
      <Home />
    </PackagesProvider>
  );
}

export default App;
