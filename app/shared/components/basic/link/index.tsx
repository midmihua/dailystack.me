import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import { getLinkVariantClass } from '@/app/utils/getLinkVariantClass';

type BasicLinkProps = {
  title: string;
  href: string;
  variant?: LinkVariants;
  classes?: string | [string];
};

const BasicLink = (props: BasicLinkProps) => {
  const { title, href, variant, classes } = props;
  const basicClasses = 'font-medium';

  const finalClasses = Array.isArray(classes)
    ? classNames(basicClasses, variant && getLinkVariantClass(variant), ...classes)
    : classNames(basicClasses, variant && getLinkVariantClass(variant), classes);

  return (
    <Link href={href} className={finalClasses}>
      {title}
    </Link>
  );
};

export default BasicLink;
