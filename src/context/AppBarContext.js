import React, {
  createContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";
import PropTypes from "prop-types";

export const AppBarContext = createContext();

const AppBarProvider = ({ children }) => {
  const [headerContent, setHeaderContent] = useState("dark");

  const handleHeaderContent = useCallback((content) => {
    setHeaderContent(content);
  }, []);

  const currentHour = new Date().getHours();
  const isDayTime = currentHour >= 6 && currentHour < 18;

  useEffect(() => {
    if (isDayTime) {
      setHeaderContent("light");
    } else {
      setHeaderContent("dark");
    }
  }, [isDayTime]);

  const contextValue = useMemo(
    () => ({
      handleHeaderContent,
      headerContent,
    }),
    [handleHeaderContent, headerContent]
  );

  return (
    <AppBarContext.Provider value={contextValue}>
      {children}
    </AppBarContext.Provider>
  );
};

AppBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppBarProvider;
