"use client";

import { motion } from "motion/react";
import { useState } from "react";
import "../styles/skills.css";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0]);
  const [tabList, setTabList] = useState(tabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...tabList];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabList(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div className="tabs-container d-flex mt-5 " style={{justifyContent:"center"}}>
        {tabList.map((tab, idx) => (
          <button
            key={tab.title}
            className="tab-button"
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="activeTab"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                className="tab-active-bg"
              />
            )}
            <span className="tab-text">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="content-offset">
        <FadeInDiv tabs={tabList} hovering={hovering} key={active.value} />
      </div>
    </>
  );
};

const FadeInDiv = ({ tabs, hovering }) => {
  const isActive = (tab) => tab.value === tabs[0].value;

  return (
    <div className="content-wrapper">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.06,
            top: hovering ? idx * -25 : 0,
            zIndex: 10 - idx,
            opacity: idx < 3 ? 1 - idx * 0.12 : 0,
          }}
          animate={{ y: isActive(tab) ? [0, 18, 0] : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="content-card"
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

const Skills = () => {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="skills-content d-flex">
          <p>React</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Bootstrap</p>
          <p>Redux</p>
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="skills-content d-flex">
          <p>JavaScript</p>
          <p>Express.js</p>
          <p>REST APIs</p>
          <p>Security</p>
        </div>
      ),
    },
    {
      title: "Database",
      value: "database",
      content: (
        <div className="skills-content d-flex">
          <p>SQL</p>
          <p>MongoDB</p>
        </div>
      ),
    },
    {
      title: "Testing",
      value: "testing",
      content: (
        <div className="skills-content d-flex">
          <p>Postman</p>
          <p>Thunder Client</p>
        </div>
      ),
    },
  ];

  return (
    <section className="skills-section">
      <Tabs tabs={tabs} />
    </section>
  );
};

export default Skills;
