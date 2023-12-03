export const getLinkVariantClass = (variant: LinkVariants): string => {
  let style = '';

  if (variant === 'primary') {
    style = 'text-indigo-500 hover:text-indigo-600';
  } else if (variant === 'secondary') {
    style = 'text-pink-500 hover:text-pink-600';
  }

  return style;
};
