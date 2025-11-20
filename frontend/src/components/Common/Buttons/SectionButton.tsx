/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SectionButton.module.css";

interface SectionButtonProps {
  icon: IconDefinition;
  tooltip: string;
  onClick?: () => void;
}

function SectionButton(props: SectionButtonProps) {
  return (
    <button
      className={styles.SectionButton}
      title={props.tooltip}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
}

export default SectionButton;
