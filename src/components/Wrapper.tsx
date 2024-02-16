/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useStyleConfig from "../utils/styleConfig";
import socket from "../utils/socket";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../RTK/actions/ConfigData";
import { AppDispatch } from "../../RTK/store/store";

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { styles, updateStyles } = useStyleConfig();
  const defaultDataState = useSelector((state: any) => state.configration);

  const builderId = router.query.builder_id || "";
  // const builderId = "65bdd3cecf06522f6935b45f";

  useEffect(() => {
    if (builderId) {
      socket.on(`${builderId}:cmd`, (data) => {
        updateStyles(data.result);
        console.log(data.result);
      });
      getStyleConfig();
    }
    if (!defaultDataState?.defaultData) {
      getStyleConfig();
    }
  }, [builderId]);

  const getStyleConfig = () => {
    // const hostName: string = "fadingvolatility202.overzaki.info"; // working...
    const hostName: string = "robustidiot5576.overzaki.info"; // working...
    // const hostName: string = window.location.hostname;

    localStorage.setItem("hostName", hostName);
    const designType: any = builderId ? "temporary" : "constant";

    dispatch(fetchData({ hostName, designType })).then((response: any) => {
      updateStyles(response?.payload?.design);
    });
  };

  return (
    <div className="xl:max-w-[1330px] lg:max-w-[1080px] mx-auto ">
      {children}
    </div>
  );
};

export default Wrapper;
