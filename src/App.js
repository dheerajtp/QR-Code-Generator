import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";
import {QrProvider} from "./QrContext";
import {SubmitProvider} from "./SubmitContext";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return(
    <ToastProvider autoDismiss autoDismissTimeout={6000}>
    <div className="h-vh w-vh">
      <QrProvider>
      <SubmitProvider>
      <Header/>
      <Input/>
      <Result/>
      </SubmitProvider>
      </QrProvider>
    </div>
    </ToastProvider>
  );
}

export default App;
