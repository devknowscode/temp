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
}

const VStack = Styled.View<IViewProps>`
    flex: 1,
    flexDirection: column,
    flexWrap: ${({flexWrap}) => flexWrap},
    justifyContent: ${({justifyContent}) => justifyContent},
    alignItems: ${({alignItems}) => alignItems},
`;

const Render = ({
  children,
  flexWrap = 'wrap',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
}: IViewProps) => {
  return (
    <VStack
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignItems={alignItems}>
      {children}
    </VStack>
  );
};

export default Render;
