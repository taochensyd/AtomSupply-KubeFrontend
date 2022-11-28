import React, { useState } from 'react';
import ConsoleLogs from "./ConsoleLogs";
import ErrorsLogs from "./ErrorsLogs";
import KubeLogs from "./KubeLogs";

const HomePage = () => {


  return (
    <div>
      <KubeLogs></KubeLogs>
      <ConsoleLogs></ConsoleLogs>
      <ErrorsLogs></ErrorsLogs>
    </div>
  );
};

export default HomePage;
