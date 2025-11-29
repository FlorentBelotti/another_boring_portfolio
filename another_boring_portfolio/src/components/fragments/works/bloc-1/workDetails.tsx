import React from "react";
import SeparatorText from "../../common/separatorText";
import styles from "./workDetails.module.scss";

interface WorkDetailsProps {
  year?: string;
  company?: string;
  name?: string;
  role?: string;
}

export default function WorkDetails({ year, company, name, role }: WorkDetailsProps) {
  return (
    <div className={styles.detailsContainer}>
      <SeparatorText title="DETAILS" />
      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <span className={styles.detailTitle}>Nom :</span>
          <span className={styles.detailValue}>{name ?? "-"}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailTitle}>Année :</span>
          <span className={styles.detailValue}>{year ?? "-"}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailTitle}>Structure :</span>
          <span className={styles.detailValue}>{company ?? "-"}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailTitle}>Rôle :</span>
          <span className={styles.detailValue}>{role ?? "-"}</span>
        </div>
      </div>
    </div>
  );
}
