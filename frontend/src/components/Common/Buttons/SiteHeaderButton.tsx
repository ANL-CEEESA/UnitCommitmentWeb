/*
 * UnitCommitmentWeb: Web Interface for UnitCommitment.jl
 * Copyright (C) 2025, UChicago Argonne, LLC. All rights reserved.
 * Released under the GNU Affero General Public License v3.0 or later.
 */

import styles from "./SiteHeaderButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function SiteHeaderButton({
  title,
  icon,
  onClick,
  variant = "light",
  disabled = false,
}: {
  title: string;
  icon?: IconDefinition;
  onClick?: () => void;
  variant?: "light" | "primary";
  disabled?: boolean;
}) {
  const variantClass = variant === "primary" ? styles.primary : styles.light;
  const disabledClass = disabled ? styles.disabled : "";

  return (
    <button
      className={`${styles.SiteHeaderButton} ${variantClass} ${disabledClass}`}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {!icon ? title : <FontAwesomeIcon icon={icon} />}
    </button>
  );
}

export default SiteHeaderButton;
