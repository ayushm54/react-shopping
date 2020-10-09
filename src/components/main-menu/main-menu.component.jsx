import React from "react";
import { connect } from "react-redux";
import { selectMainMenuSections } from "../../redux/main-menu/main-menu.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./main-menu.styles.scss";

const MainMenu = ({ sections }) => (
  <div className="main-menu">
    {
      //   this.state.sections.map((section) => (
      //   <MenuItem
      //     key={section.id}
      //     title={section.title}
      //     imageUrl={section.imageUrl}
      //     size={section.size}
      //   />
      // ))
      // above code could be also rewritten as below using destructuring
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  sections: selectMainMenuSections(state),
});

export default connect(mapStateToProps)(MainMenu);
