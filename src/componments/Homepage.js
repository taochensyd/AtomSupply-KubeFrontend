import React, { useState } from 'react';
import ConsoleLogs from "./ConsoleLogs";
import ErrorsLogs from "./ErrorsLogs";
import KubeLogs from "./KubeLogs";
import DeployPod from "./DeployPod";

const Homepage = () => {


  return (
    <div>
      <DeployPod></DeployPod>
      {/* <KubeLogs></KubeLogs> */}
      <ConsoleLogs></ConsoleLogs>
      <ErrorsLogs></ErrorsLogs> 
    </div>
  );
};

export default Homepage;
