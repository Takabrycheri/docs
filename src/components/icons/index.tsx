import type {ReactElement} from 'react';

export function DocsIcon(): ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="app-icon app-icon--docs"
      viewBox="0 0 24 24"
      role="img"
      focusable="false">
      <path
        d="M6 2h8l4 4v16H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V8h-4V4z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WaveIcon(): ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="app-icon app-icon--wave"
      viewBox="0 0 24 24"
      role="img"
      focusable="false">
      <path
        d="M3 15c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </svg>
  );
}

export function HourglassIcon(): ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="app-icon app-icon--hourglass"
      viewBox="0 0 24 24"
      role="img"
      focusable="false">
      <path
        d="M7 3h10a1 1 0 0 1 0 2c0 3.5-2.4 4.9-4.1 6A6.58 6.58 0 0 1 17 16.5c.6.7 1 .9 1 2.5a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2c0-1.6.4-1.8 1-2.5a6.58 6.58 0 0 1 4.1-5.5C9.4 9.9 7 8.5 7 5a1 1 0 0 1 0-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubIcon(): ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="app-icon app-icon--github"
      viewBox="0 0 24 24"
      role="img"
      focusable="false">
      <path
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
        fillRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export function SearchIcon(): ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="app-icon app-icon--search"
      viewBox="0 0 24 24"
      role="img"
      focusable="false">
      <path
        d="m20 20-4.35-4.35m-6.15 1.35a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
