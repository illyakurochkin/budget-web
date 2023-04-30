import clsx from 'clsx';
import {overrideTailwindClasses} from 'tailwind-override';
import {flow} from 'fp-ts/function';

export const classes = flow(clsx, overrideTailwindClasses);
