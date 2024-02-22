import Tabs from "./tabs";
import './tabs.css';

function RandomComponent() {
  return <h1>Some random content</h1>;
}

function RandomComponent2() {
    return <h1>Some random content for Demo</h1>;
  }

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
    {
        label: "Tab 3",
        content: <RandomComponent2 />,
      },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}