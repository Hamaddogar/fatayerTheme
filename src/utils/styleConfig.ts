// utils/styleConfig.ts
import { useEffect, useState } from "react";
import { setDefaultData } from "../../RTK/slices/configReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../RTK/store/store";

const useStyleConfig = () => {
  const dispatch = useDispatch();
  const [styles, setStyles] = useState<any>({});

  useEffect(() => {
    console.log("styles", styles);

    const cssValues = styles?.css;
    if (cssValues && Object.entries(cssValues).length > 0) {
      applyCss(cssValues);
    }

    // if (styles?.fontStyle) {
    //   document.documentElement.style.setProperty(
    //     "--fontStyle",
    //     styles?.fontStyle
    //   );
    //   document.documentElement.style.setProperty("--primaryColor", "#dc3434");
    // }
  }, [styles]);

  const applyCss = (cssValues: any) => {
    Object.entries(cssValues)?.map(([key, value]: [string, any]) => {
      if (value !== "" && value !== "empty value") {
        const targetKey: string = `--${key}`;
        document.documentElement.style.setProperty(targetKey, value);
      }
    });
  };

  const updateStyles = (newStyles: any): void => {
    setStyles((prevStyles: any) => ({ ...prevStyles, ...newStyles }));
    dispatch(setDefaultData(newStyles));
  };

  return { styles, updateStyles };
};

export default useStyleConfig;
