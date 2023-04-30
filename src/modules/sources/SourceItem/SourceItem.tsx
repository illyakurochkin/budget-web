import {differenceInDays, format} from 'date-fns';
import React, {useCallback} from 'react';
import {SourceFragment} from '../../../graphql/generated';
import {formatPrice} from '../../../libs/format';
import {CurrencyMode} from '../interface';
import {classes} from '../../../libs/classes';
import {SourceItemMenu} from './SourceItemMenu';
import {useDeleteSource} from './hooks/use-delete-source';
import {useEditSource} from './hooks/use-edit-source';
import {useSourceAction} from './hooks/use-source-action';
import {useRefreshSource} from './hooks/use-refresh-source';
import {useSelectedSource} from './hooks/use-selected-source';

interface SourceItemProps {
  source: SourceFragment,
  currencyMode: CurrencyMode,
}

const renderAmount = (source: SourceFragment, currencyMode: CurrencyMode) => {
  switch(currencyMode) {
    case CurrencyMode.Default:
      return formatPrice(source.amount, source.currency);
    case CurrencyMode.Dollar:
      return formatPrice(source.amountInUSD, 'USD');
    case CurrencyMode.Percent:
      return formatPrice(source.dominance, '%');
  }
}

const getDateColor = (date: Date): string => {
  const difference = differenceInDays(new Date(), date)
  console.log('difference', difference);
  if(difference <= 7) return 'green';
  if(difference <= 30) return 'gray';
  return 'red';
};

const SOURCE_ITEM_CLASSES = `
  group relative
  flex flex-row items-center justify-between
  p-2
  opacity-80
  hover:opacity-100
  border-2 rounded-xl 
  border-background-primary
  hover:border-text-primary
  hover:bg-[rgba(255,255,255,0.03)]
`;

const SOURCE_ITEM_SELECTED_CLASSES = `
  opacity-100
  border-4
  border-text-primary
  bg-[rgba(255,255,255,0.03)]
 
`

export const SourceItem = ({source, currencyMode}: SourceItemProps) => {
  const {action, resetAction} = useSourceAction();
  const {selectedSource} = useSelectedSource();
  const {startDeletion, confirmDeletion} = useDeleteSource();
  const {startEditing, confirmEditing} = useEditSource();
  const {startRefresh, confirmRefresh} = useRefreshSource();

  const isSelected = selectedSource?.id === source.id

  const date = new Date(new Date().getTime() - Math.random() * 10 * 24 * 60 * 60 * 60 * 100)//new Date(source.date);
  console.log('date', date);
  // console.log('source.date', source.date);


  const handleView = useCallback(() => {
    console.log('view source', source);
  }, [source]);


  return (
    <div className={classes(SOURCE_ITEM_CLASSES, isSelected && SOURCE_ITEM_SELECTED_CLASSES)} style={{fontWeight: 300}}>
      <div className={classes('font-light group-hover:font-semibold', isSelected && 'font-semibold')}>{source.name}</div>
      <div className='flex flex-row items-center cursor-default'>
        <div className='flex flex-col items-end'>
          <div className="font-bold mb-[-6px]">{renderAmount(source, currencyMode)}</div>
          <div className={classes(`text-[10px] opacity-80 group-hover:opacity-100 text-${getDateColor(date)}`, isSelected && 'opacity-100')}>
            {format(date, 'dd-MM-yyyy')}
          </div>
        </div>
        <SourceItemMenu
          source={source}
          onEdit={startEditing}
          onDelete={startDeletion}
          onRefresh={startRefresh}
          onView={handleView}
          onClose={resetAction}
        />
      </div>
    </div>
  );
};
