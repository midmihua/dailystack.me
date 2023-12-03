import React from 'react';

import BasicLink from '@/app/shared/components/basic/link';

type SecondaryLinkProps = {
  title: string;
  href: string;
  variant?: LinkVariants;
  classes?: string | [string];
};

const SecondaryLink = (props: SecondaryLinkProps) => {
  const { title, href, classes } = props;
  return <BasicLink variant={'secondary'} title={title} href={href} classes={classes} />;
};

export default SecondaryLink;
