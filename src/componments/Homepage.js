import React, { useState } from 'react';
import ConsoleLogs from "./ConsoleLogs";
import ErrorsLogs from "./ErrorsLogs";

const HomePage = () => {


  return (
    <div>
      <ConsoleLogs></ConsoleLogs>
      <ErrorsLogs></ErrorsLogs>
    </div>
  );
};

export default HomePage;
