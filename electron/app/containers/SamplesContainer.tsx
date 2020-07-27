import React, { useState } from "react";
import styled from "styled-components";

import DisplayOptionsSidebar from "../components/DisplayOptionsSidebar";
import ImageContainerHeader from "../components/ImageContainerHeader";
import SidebarContainer from "../components/SidebarContainer";
import Samples from "../components/Samples";
import ViewBar from "../components/ViewBar/ViewBar";

const Container = styled.div``;

const SamplesContainer = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Container>
      <ViewBar />
      <ImageContainerHeader
        showSidebar={showSidebar}
        onShowSidebar={setShowSidebar}
      />
      <SidebarContainer
        sidebar={
          showSidebar && (
            <DisplayOptionsSidebar tags={[]} labels={[]} scalars={[]} />
          )
        }
      >
        <Samples {...props} />
      </SidebarContainer>
    </Container>
  );
};

export default SamplesContainer;
