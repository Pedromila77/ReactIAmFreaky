
import MainLayout from "./layouts/MainLayout";
import MainRouter from "./routes/MainRouter";


//CSS Modules
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Estilos.module.css'

const App = () => {
    
  return (
    <MainLayout>
      <MainRouter/>
    </MainLayout>
  )
}







export default App
