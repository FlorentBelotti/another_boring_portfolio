import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./projectAccordion.module.scss";
import resumeAccordionStyles from "../../resume/bloc-2/experienceAccordion.module.scss";

interface ProjectAccordionProps {
  title: string;
  content: string | string[];
}

export default function ProjectAccordion({ title, content }: ProjectAccordionProps) {
  return (
    <Accordion.Root
      className={resumeAccordionStyles.AccordionRoot}
      type="single"
      defaultValue="item-0"
      collapsible
    >
      <Accordion.Item className={resumeAccordionStyles.AccordionItem} value="item-0">
        <Accordion.Header className={resumeAccordionStyles.AccordionHeader}>
          <Accordion.Trigger
            className={classNames(resumeAccordionStyles.AccordionTrigger, styles.triggerRight)}
            aria-controls="content-0"
          >
            {/* Flèche à gauche */}
            <ChevronDownIcon className={resumeAccordionStyles.AccordionChevron} aria-hidden />
            <div className={resumeAccordionStyles.triggerInner} style={{ flex: 1 }}>
              {/* Titre justifié à droite */}
              <div
                className={classNames(resumeAccordionStyles.title, styles.titleRight)}
                style={{ fontWeight: 600 }}
              >
                {title}
              </div>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content
          id="content-0"
          className={classNames(resumeAccordionStyles.AccordionContent, styles.rightBorderContent)}
        >
          <div className={styles.rightBorderText} style={{ textAlign: "right" }}>
            {Array.isArray(content)
              ? (
                <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
                  {content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )
              : <span>{content}</span>
            }
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
