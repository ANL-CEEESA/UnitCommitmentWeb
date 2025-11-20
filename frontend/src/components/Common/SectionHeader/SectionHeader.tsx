/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import styles from "./SectionHeader.module.css";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  children?: ReactNode;
}

function SectionHeader({ title, children }: SectionHeaderProps) {
  return (
    <div className={styles.SectionHeader}>
      <div className={styles.SectionButtonsContainer}>{children}</div>
      <h1>{title}</h1>
    </div>
  );
}

export default SectionHeader;
