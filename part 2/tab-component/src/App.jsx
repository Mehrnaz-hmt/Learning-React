import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    name: "Sara",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    name: "Zari",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    name: "Natali",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(2); //[state,setState]
  const [isOpen, setIsOpen] = useState(true);

  const handleActiveTab = (id) => {
    setActiveTab(id);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <button className="closeButton" onClick={() => handleOpen(!isOpen)}> ❌ </button>
            {
            isOpen ? (
              <div className="tab">
                <div className="tab__header">
                  {tabData.map((tab) => (
                    <button
                      //  onMouseEnter={() => alert("Mouse Entered!!")}
                      //  onMouseDown={() => alert ("Mouse Entered!")}
                      onClick={() => handleActiveTab(tab.id)}
                      key={tab.id}
                      className={activeTab === tab.id ? "active" : ""}
                    >
                      <span>{tab.title}</span>
                      <span className="tab-indicator"></span>
                    </button>
                  ))}
                </div>

                <div className="tab__content">
                  {tabData[activeTab - 1].content}
                </div>
              </div>
            ) : (
              <p>Cloced</p>
            )
          }
      
      </div>
    </div>
  );
}

export default App;
