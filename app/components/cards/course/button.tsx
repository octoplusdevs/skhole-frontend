'use client';

import { IButton } from './interface';
import { clsx } from 'clsx';

const STATUS_TEXT: Record<IButton['status'], string> = {
  ACTIVE: 'Inscrever',
  DRAFT: 'Indisponível',
  ARCHIVED: 'Arquivado',
  ENROLLED: 'Inscrito',
  PENDING: 'Pendente',
};

const STATUS_STYLE: Record<IButton['status'], string> = {
  ACTIVE: 'bg-[#151f33] text-primary hover:bg-[#2c375196] ',
  DRAFT: 'bg-background cursor-not-allowed pointer-events-none opacity-46',
  ARCHIVED: 'bg-background cursor-not-allowed pointer-events-none opacity-46',
  ENROLLED: 'bg-primary text-black hover:opacity-70',
  PENDING: 'bg-[#f7a522a2] text-black cursor-not-allowed pointer-events-none',
};

const Button = ({
  Icon,
  className = '',
  onClick,
  status,
  content,
}: IButton) => {
  const isDisabled = ['DRAFT', 'ARCHIVED', 'PENDING'].includes(status);

  return (
    <button
      disabled={isDisabled}
      className={clsx(
        'duration-150 py-4 px-6 flex items-center justify-center uppercase text-[14px] lg:text-[16px] tracking-[10%] font-bold',
        STATUS_STYLE[status],
        className
      )}
      onClick={onClick}
    >
      {content ?? STATUS_TEXT[status]}
      {Icon && <span className="ml-2">{Icon}</span>}
    </button>
  );
};

export { Button };
