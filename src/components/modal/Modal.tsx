import React, {ReactNode, useRef} from 'react';
import {createPortal} from 'react-dom';
import {ModalContainer, ModalSize} from './ModalContainer';
import {useOutsideClick} from '../../hooks/use-outside-click';
import {ReactComponent as Close} from '../../components/icons/close.svg';
import {usePreventBackgroundScroll} from '../../hooks/use-prevent-background-scroll';
import {classes} from '../../libs/classes';

interface ModalProps {
  children?: ReactNode;
  className?: string;
  onClose?: VoidFunction;
  scrollable?: boolean;
  size?: ModalSize;
}

const MODAL_CLASSES = `
  relative
  inline-block 
  transform 
  overflow-hidden 
  rounded-2xl 
  card-shadow 
  bg-white 
  text-left 
  align-bottom 
  transition-all 
  sm:my-8 
  sm:align-middle
  
  bg-background-primary
  text-text-primary 
  p-5 
  border-4 
  border-text-primary
`

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  onClose,
  scrollable,
  size = 'default'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useOutsideClick(onClose ? cardRef : null, onClose);
  usePreventBackgroundScroll();

  return createPortal(
    <ModalContainer size={size}>
      <div
        ref={cardRef}
        data-testid="modal"
        className={classes(
          MODAL_CLASSES,
          size === 'default' && 'w-full max-w-4xl',
          size === 'compact' && 'w-[400px]',
          size === 'large' && 'mx-6 max-w-7xl',
          size === 'full-page' && 'h-full rounded-none px-0 sm:h-auto sm:max-w-4xl sm:rounded-lg sm:px-6',
          className,
        )}>
        <div
          className={classes(
            'flex-1 z-[600]',
            scrollable && 'overflow-y-scroll md:overflow-y-hidden',
            size === 'full-page' && 'top-0 bottom-0 h-full sm:top-auto sm:bottom-auto sm:h-auto',
          )}>
          {children}
        </div>
        {onClose && (
          <button
            data-testid="close-modal-btn"
            className="absolute text-text-primary z-[100] p-3 top-0 right-0 block rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-main-blue focus:ring-offset-2"
            onClick={onClose}
            type="button">
            <Close className='w-[25px] h-[25px]' />
            {/*add close icon*/}
          </button>
        )}
      </div>
    </ModalContainer>,
    document.body,
  );
};

export default Modal;
