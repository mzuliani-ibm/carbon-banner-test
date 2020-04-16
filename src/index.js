// ------------------------------------------------
// PLEASE DO NOT EDIT. FORK IF YOU NEED TO MODIFY.
// ------------------------------------------------

import React from "react";
import { render } from "react-dom";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";

import "./style.css";

const App = () => (
  <div className="container">
    <Header aria-label="IBM Carbon">
      <HeaderName href="#" prefix="IBM">
        Carbon
      </HeaderName>
      <HeaderNavigation aria-label="IBM Carbon">
        <HeaderMenuItem href="#">Project Dashboards</HeaderMenuItem>
        <HeaderMenuItem href="#">Work Items</HeaderMenuItem>
        <HeaderMenu aria-label="Plans" menuLinkName="Plans">
          <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
        </HeaderMenu>
        <HeaderMenu aria-label="Builds" menuLinkName="Builds">
          <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </div>
);

render(<App />, document.getElementById("root"));
