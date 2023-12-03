export const getButtonVariantClass = (variant: ButtonVariants): string => {
  let style = '';

  if (variant === 'primary') {
    style = 'text-slate-100 bg-indigo-500 hover:bg-indigo-600';
  } else if (variant === 'secondary') {
    style = 'text-slate-100 bg-pink-500 hover:bg-pink-600';
  } else if (variant === 'primaryOutline') {
    style =
      'text-indigo-500 border-2 border-indigo-500 hover:border-indigo-600 hover:text-indigo-600';
  } else if (variant === 'secondaryOutline') {
    style =
      'text-pink-500 border-2 border-pink-500 hover:border-pink-600 hover:text-pink-600';
  }

  return style;
};
