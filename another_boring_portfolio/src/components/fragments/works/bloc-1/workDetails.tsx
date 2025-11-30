import React from "react";
import SeparatorText from "../../common/separatorText";
import styles from "./workDetails.module.scss";

interface WorkDetailsProps {
  year?: string;
  company?: string;
  title?: string;
  role?: string;
  projectType?: string;
}

export default function WorkDetails({ year, company, title, role, projectType }: WorkDetailsProps) {
  return (
    <div className={styles.detailsContainer}>
      <SeparatorText title="DETAILS" />
      <div className={styles.detailsGrid}>
        <span className={styles.detailTitle}>FULL NAME :</span>
        <span className={styles.detailValue}>{title ?? "-"}</span>
        <span className={styles.detailTitle}>YEAR :</span>
        <span className={styles.detailValue}>{year ?? "-"}</span>
        <span className={styles.detailTitle}>COMPANY :</span>
        <span className={styles.detailValue}>{company ?? "-"}</span>
        <span className={styles.detailTitle}>ROLE :</span>
        <span className={styles.detailValue}>{role ?? "-"}</span>
      </div>
    </div>
  );
}
