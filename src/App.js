import Routes from "./Routes";
import Layout from "./Layout/Layout";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
