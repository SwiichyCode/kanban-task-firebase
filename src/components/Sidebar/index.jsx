import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { itemVariants, sideVariants } from "./motion/motion";
import { Switch } from "@mui/material";

import SidebarNav from "./SidebarNav";
import LogoDark from "../../assets/logo-dark.svg";
import SunIcon from "../../assets/icon-light-theme.svg";
import MoonIcon from "../../assets/icon-dark-theme.svg";
import ShowIcon from "../../assets/icon-hide-sidebar.svg";

import { SidebarWrapper } from "./style";
import { Link } from "react-router-dom";

export default function Sidebar({
  open,
  cycleOpen,
  currentTheme,
  setCurrentTheme,
  documents,
}) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <SidebarWrapper
            as={motion.aside}
            initial={{ width: 0, height: null }}
            animate={{
              width: 300,
              height: null,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.5, duration: 0.3 },
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.div className="sidebar-top" variants={itemVariants}>
                <motion.div className="sidebar-logo">
                  <Link to="/">
                    <img src={LogoDark} alt="" />
                  </Link>
                </motion.div>
                <div className="sidebar-nav">
                  <h3>all boards ({documents && documents.length})</h3>
                  <SidebarNav documents={documents} />
                </div>
              </motion.div>
              <motion.div className="sidebar-bot" variants={itemVariants}>
                <div className="sidebar-theme">
                  <img src={SunIcon} alt="" />

                  <Switch
                    className="switch-wrapper"
                    value={currentTheme}
                    onChange={(e) => setCurrentTheme(e.target.value)}
                  />

                  <img src={MoonIcon} alt="" />
                </div>
                <div className="sidebar-show" onClick={cycleOpen}>
                  <img src={ShowIcon} alt="" />
                  <h2>Hide sidebar</h2>
                </div>
              </motion.div>
            </motion.div>
          </SidebarWrapper>
        )}
      </AnimatePresence>
    </>
  );
}
