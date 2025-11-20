/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import styles from "./HelpButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

function HelpButton({ text }: { text: String }) {
  return (
    <button className={styles.HelpButton}>
      <span className={styles.tooltip}>{text}</span>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={faCircleQuestion} />
      </span>
    </button>
  );
}

export default HelpButton;
