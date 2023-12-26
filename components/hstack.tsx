import React from 'react';
import Styled from 'styled-components/native';

interface IViewProps {
  children: React.ReactNode;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | undefined;
  alignItems?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'
    | undefined;
  space?: number;
}

const HStack = Styled.View<IViewProps>`
    flex: 1,
    flexDirection: row,
    flexWrap: ${({flexWrap}) => flexWrap},
    justifyContent: ${({justifyContent}) => justifyContent},
    alignItems: ${({alignItems}) => alignItems},
    gap: ${({space}) => space},
`;

const Render = ({
  children,
  flexWrap = 'wrap',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  space = 0,
}: IViewProps) => {
  return (
    <HStack
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      space={space}>
      {children}
    </HStack>
  );
};

export default Render;
