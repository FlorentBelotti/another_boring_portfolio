// ...existing code...
import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./experienceAccordion.module.scss";

type Experience = { date: string; title: string; company: string; pole?: string; details?: string };

export default function ExperienceAccordion({ experiences }: { experiences: Experience[] }) {
  return (
    <Accordion.Root
      className={styles.AccordionRoot}
      type="single"
      defaultValue={experiences.length ? "item-0" : undefined}
      collapsible
    >
      {experiences.map((exp, i) => {
        const value = `item-${i}`;
        return (
          <Accordion.Item className={styles.AccordionItem} value={value} key={value}>
            <Accordion.Header className={styles.AccordionHeader}>
              <Accordion.Trigger
                className={classNames(styles.AccordionTrigger)}
                aria-controls={`content-${i}`}
              >
                <div className={styles.triggerInner}>
                  <div className={styles.title} style={{ fontWeight: 600 }}>
                    {exp.title} — {exp.company}
                  </div>
                  <div className={styles.meta}>
                    {exp.date} {exp.pole ? `· ${exp.pole}` : ''}
                  </div>
                </div>
                <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content
              id={`content-${i}`}
              className={styles.AccordionContent}
            >
              <div className={styles.AccordionContentText}>
                {exp.details}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}