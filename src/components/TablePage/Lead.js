import React from "react";
import styles from "./lead.module.css";

export const Lead = ({ lead }) => {
  return (
    <li>
      <div className={styles.leadContainer}>
        <span>{lead.name}</span>
        <span>{lead.organisation}</span>
        <span>{lead.created_at}</span>
        <span>{lead.status}</span>
      </div>
    </li>
  );
};
