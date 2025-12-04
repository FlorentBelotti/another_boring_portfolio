import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./projectAccordion.module.scss";
import resumeStyles from "../../resume/bloc-2/experienceAccordion.module.scss";

type Project = { 
  date?: string; 
  title: string; 
  subtitle?: string; 
  details?: string 
};

export default function ProjectAccordion({ projects }: { projects: Project[] }) {
  return (
    <Accordion.Root
      className={resumeStyles.AccordionRoot}
      type="single"
      defaultValue={projects.length ? "item-0" : undefined}
      collapsible
    >
      {projects.map((project, i) => {
        const value = `item-${i}`;
        return (
          <Accordion.Item className={resumeStyles.AccordionItem} value={value} key={value}>
            <Accordion.Header className={resumeStyles.AccordionHeader}>
              <Accordion.Trigger
                className={classNames(resumeStyles.AccordionTrigger, styles.triggerRightReverse)}
                aria-controls={`content-${i}`}
              >
                <ChevronDownIcon className={resumeStyles.AccordionChevron} aria-hidden />
                <div className={classNames(resumeStyles.triggerInner, styles.triggerRight)}>
                  <div className={classNames(resumeStyles.title, styles.titleRight)} style={{ fontWeight: 600 }}>
                    {project.title}{project.subtitle ? ` — ${project.subtitle}` : ''}
                  </div>
                  {project.date && (
                    <div className={classNames(resumeStyles.meta, styles.metaRight)}>
                      {project.date}
                    </div>
                  )}
                </div>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content
              id={`content-${i}`}
              className={resumeStyles.AccordionContent}
            >
              <div className={classNames(resumeStyles.AccordionContentText, styles.contentRight)} style={{ whiteSpace: 'pre-line' }}>
                {project.details}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
