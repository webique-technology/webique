import { useState } from "react";
import AppRoutes from "./routes"
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <main>
          <AppRoutes />
        </main>
      )} */}
      <main>
        <AppRoutes />
      </main>
    </>
  )
}

export default App
