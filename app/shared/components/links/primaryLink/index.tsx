import React from 'react';

import BasicLink from '@/app/shared/components/basic/link';

type PrimaryLinkProps = {
  title: string;
  href: string;
  variant?: LinkVariants;
  classes?: string | [string];
};

const PrimaryLink = (props: PrimaryLinkProps) => {
  const { title, href, classes } = props;
  return <BasicLink variant={'primary'} title={title} href={href} classes={classes} />;
};

export default PrimaryLink;
