
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isActive, setIsActive] = useState(1);
  
  function renderContent() {
    switch(isActive) {
      case 1:
        return <div>This is the content for Tab 1.</div>
      case 2:
        return <div>This is the content for Tab 2.</div>
      case 3:
        return <div>This is the content for Tab 3.</div>
      default:
        return null;
    }
  }
  
  
  return (
    <div>
        <ul>
          <li onClick={() => setIsActive(1)}>Tab 1</li>
          <li onClick={() => setIsActive(2)}>Tab 2</li>
          <li onClick={() => setIsActive(3)}>Tab 3</li>
        </ul>
        <div>
          {renderContent()}
        </div>
    </div>
  )
}

export default App;

