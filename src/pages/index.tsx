import type {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Footer from '@theme/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {DocsIcon, HourglassIcon, WaveIcon} from '@site/src/components/icons';

import styles from './index.module.css';

type ProjectCard = {
  title: string;
  description: string;
  url?: string;
  icon: ReactNode;
  external?: boolean;
  future?: boolean;
};

const projectCards: ProjectCard[] = [
  {
    title: 'RSI Audio Kit',
    description:
      'Schematics, setup notes, and integration tips for the RSI Audio Kit side-project.',
    url: '/rsi-audio-kit/getting-started',
    icon: <WaveIcon />,
  },
  {
    title: 'Future Builds',
    description:
      'A dedicated space for upcoming experiments. New documentation drops here first.',
    icon: <HourglassIcon />,
    future: true,
  },
];

export default function Home(): ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const title = siteConfig.title ?? 'Docusaurus Site';
  const tagline = siteConfig.tagline ?? 'Documentation that grows with your projects.';
  const copyright =
    siteConfig.themeConfig?.footer?.copyright ??
    `Copyright © ${new Date().getFullYear()} ${title}`;

  return (
    <Layout title={title} description={tagline} wrapperClassName="homepageLayout" noFooter>
      <div className={styles.pageRoot}>
        <div className={styles.surface}>
          <section className={styles.heroSection}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroTagline}>{tagline}</p>
          </section>

          <section className={styles.projectsSection}>
            <div className={styles.sectionHeading}>
              <h2 className={styles.sectionTitle}>Explore my projects</h2>
              <p className={styles.sectionDescription}>
                From experiments to long-term builds, every project has its own story, neatly documented.
              </p>
            </div>
            <div className={styles.cardsGrid}>
              {projectCards.map(card => (
                <article
                  key={card.title}
                  className={clsx(styles.card, card.future && styles.cardFuture)}>
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                  {card.url ? (
                    card.external ? (
                      <Link
                        className={styles.cardAction}
                        href={card.url}
                        target="_blank"
                        rel="noreferrer">
                        Visit project
                      </Link>
                    ) : (
                      <Link className={styles.cardAction} to={card.url}>
                        Open docs
                      </Link>
                    )
                  ) : (
                    <span className={styles.cardBadge}>Coming soon</span>
                  )}
                </article>
              ))}
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </Layout>
  );
}
