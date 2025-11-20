/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import styles from "../Common/Header.module.css";
import SiteHeaderButton from "../Common/Buttons/SiteHeaderButton";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  onEdit: () => void;
  onDownload: () => void;
  disabled: boolean;
}

function Header(props: HeaderProps) {
  return (
    <div className={styles.HeaderBox}>
      <div className={styles.HeaderContent}>
        <h1>UnitCommitment.jl</h1>
        <h2>Solver</h2>
        <div className={styles.buttonContainer}>
          <SiteHeaderButton
            title="Download"
            icon={faDownload}
            onClick={props.onDownload}
            disabled={props.disabled}
          />
          <SiteHeaderButton
            title="Edit"
            variant="primary"
            onClick={props.onEdit}
            disabled={props.disabled}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
