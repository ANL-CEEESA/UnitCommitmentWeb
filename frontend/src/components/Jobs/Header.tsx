/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import styles from "../Common/Header.module.css";
import SiteHeaderButton from "../Common/Buttons/SiteHeaderButton";

interface HeaderProps {
  onEdit: () => void;
  canEdit: boolean;
}

function Header(props: HeaderProps) {
  return (
    <div className={styles.HeaderBox}>
      <div className={styles.HeaderContent}>
        <h1>UnitCommitment.jl</h1>
        <h2>Solver</h2>
        <div className={styles.buttonContainer}>
          <SiteHeaderButton
            title="Edit"
            variant="primary"
            onClick={props.onEdit}
            disabled={!props.canEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
