import type {ElementType, ReactElement} from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  ErrorCauseBoundary,
  useThemeConfig,
} from '@docusaurus/theme-common';
import {splitNavbarItems} from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';

import {GitHubIcon, SearchIcon} from '@site/src/components/icons';

import styles from './styles.module.css';

type UnknownNavbarItem = Record<string, unknown>;

function useNavbarItems(): UnknownNavbarItem[] {
  return useThemeConfig().navbar.items;
}

function NavbarItems({items}: {items: UnknownNavbarItem[]}): ReactElement {
  return (
    <>
      {items.map((item, index) => (
        <ErrorCauseBoundary
          key={index}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function ActionIcon({label, destination}: {label?: string; destination?: string}): ReactElement {
  const lowerLabel = label?.toLowerCase() ?? '';
  if (lowerLabel.includes('github') || destination?.includes('github.com')) {
    return <GitHubIcon />;
  }
  if (label) {
    return <span className={styles.iconFallback}>{label.slice(0, 1)}</span>;
  }
  return <span className={styles.iconFallback}>↗</span>;
}

export default function NavbarContent(): ReactElement {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const secondaryItems = [...leftItems, ...rightItems.slice(1)];
  const primaryAction = (rightItems[0] ?? null) as UnknownNavbarItem | null;
  const {siteConfig} = useDocusaurusContext();
  const title = siteConfig.title ?? 'Documentation';
  const brandSubtitle = 'Documentation';

  const fallbackHref = 'https://github.com/takabrycheri';
  const actionTo =
    typeof primaryAction?.to === 'string' ? (primaryAction.to as string) : undefined;
  const actionHref =
    typeof primaryAction?.href === 'string'
      ? (primaryAction.href as string)
      : !actionTo
        ? fallbackHref
        : undefined;
  const actionLabel =
    (primaryAction?.ariaLabel as string | undefined) ??
    (primaryAction?.label as string | undefined) ??
    'External link';
  const actionTarget =
    (primaryAction?.target as string | undefined) ??
    (actionHref && !actionTo ? '_blank' : undefined);
  const actionRel =
    (primaryAction?.rel as string | undefined) ??
    (actionHref && !actionTo ? 'noreferrer' : undefined);
  const ActionComponent = (actionTo ? Link : 'a') as ElementType;

  const searchFieldId = 'navbar-search-input';

  return (
    <div className={clsx(styles.navWrapper, isMenuOpen && styles.menuOpen)}>
      <div className={clsx('container', styles.navShell, isMenuOpen && styles.navShellMenuOpen)}>
        <div className={styles.brandSection}>
          <button
            type="button"
            className={styles.mobileToggle}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(open => !open)}>
            <span className={styles.srOnly}>Toggle menu</span>
            <span className={styles.hamburger} aria-hidden />
          </button>
          <Link className={styles.brandLink} to="/">
            <span className={styles.brandBadge}>
              <img
                src="/img/taka.jpg"
                alt={`${title} logo`}
                className={styles.brandBadgeImage}
                loading="eager"
              />
            </span>
            <span className={clsx(styles.brandCopy, isSearchOpen && styles.brandCopyHidden)}>
              <span className={styles.brandTitle}>{title}</span>
              <span className={styles.brandSubtitle}>{brandSubtitle}</span>
            </span>
          </Link>
          {secondaryItems.length > 0 && (
            <nav className={styles.secondaryLinks} aria-label="Primary navigation">
              <NavbarItems items={secondaryItems} />
            </nav>
          )}
        </div>
        {isMenuOpen && (
          <div className={styles.mobileMenu} aria-label="Mobile navigation">
            <div className={styles.mobileMenuHeader}>
              <span>{title}</span>
              <button
                type="button"
                aria-label="Close menu"
                className={styles.mobileClose}
                onClick={() => setIsMenuOpen(false)}>
                ×
              </button>
            </div>
            <NavbarItems items={items} />
          </div>
        )}

        <label
          className={styles.searchField}
          htmlFor={searchFieldId}
          data-open={isSearchOpen ? 'true' : 'false'}>
          <span className={styles.srOnly}>Search</span>
          <SearchIcon />
          <input id={searchFieldId} type="text" placeholder="Search" className={styles.searchInput} />
          <button
            type="button"
            aria-label="Close search"
            className={styles.searchClose}
            onClick={() => setIsSearchOpen(false)}>
            ×
          </button>
        </label>

        <div className={styles.actionsSection}>
          {!isSearchOpen && (
            <button
              type="button"
              className={clsx(styles.iconButton, styles.searchToggle)}
              aria-controls={searchFieldId}
              aria-expanded={isSearchOpen}
              onClick={() => setIsSearchOpen(true)}>
              <span className={styles.srOnly}>Toggle search</span>
              <SearchIcon />
            </button>
          )}
          <ActionComponent
            className={styles.iconButton}
            {...(actionTo
              ? {to: actionTo}
              : {href: actionHref ?? fallbackHref, target: actionTarget, rel: actionRel})}>
            <span className={styles.srOnly}>{actionLabel}</span>
            <ActionIcon label={actionLabel} destination={actionHref ?? actionTo} />
          </ActionComponent>
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>
    </div>
  );
}
