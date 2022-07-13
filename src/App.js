import React, { createContext } from "react";
import styled from "styled-components";
import { useCycle } from "framer-motion";
import { ThemeProvider } from "styled-components";

import { light, dark } from "./styles/theme";
import useLocalStorageState from "./utils/useLocalStorageState";
import { useCollection } from "./hooks/useCollection";

import Sidebar from "./components/Sidebar";
import SidebarShow from "./components/Sidebar/SidebarShow/index";
import Header from "./components/Header";
import Board from "./components/Board";

const themesMap = {
  light,
  dark,
};

export const ThemePreferenceContext = createContext();

export default function App() {
  const { documents } = useCollection("boards");
  const [open, cycleOpen] = useCycle(true, false);
  const [currentTheme, setCurrentTheme] = useLocalStorageState(
    "theme",
    "light"
  );

  const theme = { colors: themesMap[currentTheme] };

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <Container>
          <Sidebar
            open={open}
            cycleOpen={cycleOpen}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
            documents={documents}
          />
          {!open ? <SidebarShow cycleOpen={cycleOpen} /> : null}

          <Main open={open}>
            <Header open={open} documents={documents} />
            <Board documents={documents} />
          </Main>
        </Container>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const Main = styled.main`
  width: ${(props) => (props.open ? "calc(100% - 300px)" : "100%")};
  transition: 200ms ease-in-out;
`;
