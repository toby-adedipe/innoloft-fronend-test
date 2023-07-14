import { ComponentProps, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { AppDispatch, RootState } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { getConfiguration } from "../../redux/Config/service";
import Navigation from "../../Components/Navigation/Navigation";

function DashboardLayout({
  children
}: ComponentProps<"div">) {
  const dispatch:AppDispatch = useDispatch();

  const { config } = useSelector((state: RootState)=>state.ConfigData);

  useEffect(()=>{
    // Get the configuration based on the APP_ID value
    const appId = process.env.REACT_APP_APP_ID || 1; //set app id to 1 as a fallback
    dispatch(getConfiguration(String(appId)))
  }, [dispatch])

  return (
    <div className="">
      <Header logo={config?.logo} mainColor={config?.mainColor} />
      <div className="md:flex md:justify-center md-w-full">
        <aside className="md:w-1/6">
          <Navigation mainColor={config?.mainColor}/>
        </aside>
        <div className="px-4 py-4 md:max-w-3xl md:w-5/6">
          <main>{children}</main>
        </div>
      </div>
      
    </div>
  )
}

export default DashboardLayout