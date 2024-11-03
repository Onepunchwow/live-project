import Usermodule from "./user/userapp";
import Sellermodule from "./seller/sellerapp";

function App(){
  let login=true;

  if(login==true)
    return(<Sellermodule/>)
  else
    return(<Usermodule/>)
}

export default App;