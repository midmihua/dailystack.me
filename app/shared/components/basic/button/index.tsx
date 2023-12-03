import classNames from 'classnames';
import React from 'react';

import { getButtonVariantClass } from '@/app/utils/getButtonVariantClass';

type BasicButtonProps = {
  title: string;
  name?: string;
  id?: string;
  type?: ButtonActionTypes;
  variant?: ButtonVariants;
  classes?: string | [string];
  disabled?: boolean;
  icon?: React.JSX.Element;
  onClick?: () => void;
  onSubmit?: () => void;
};

const BasicButton = (props: BasicButtonProps) => {
  const {
    title,
    name,
    id,
    type,
    variant,
    classes,
    disabled,
    icon: Icon,
    onClick,
    onSubmit,
  } = props;

  const basicClasses =
    'flex justify-center items-center gap-2 text-lg font-medium px-6 py-2 rounded-md shadow-md';
  const finalClasses = Array.isArray(classes)
    ? classNames(basicClasses, variant && getButtonVariantClass(variant), ...classes)
    : classNames(basicClasses, variant && getButtonVariantClass(variant), classes);

  return (
    <div>
      <button
        className={finalClasses}
        name={name}
        id={id}
        type={type || 'button'}
        disabled={disabled}
        onClick={onClick}
        onSubmit={onSubmit}>
        {Icon}
        {title}
      </button>
    </div>
  );
};

export default BasicButton;
