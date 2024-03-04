import React from 'react';
import styled from 'styled-components/native';
import colors from '../../core/colors';

interface IProps {
  title: string;
  value: string;
}

const TableItem = ({title, value}: IProps) => {
  return (
    <RowContentContainer>
      <TableRow>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </TableRow>
    </RowContentContainer>
  );
};

export default TableItem;

const TableRow = styled.View`
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const RowContentContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.deepForestGreen};
`;

const Title = styled.Text`
  flex: 1;
  font-size: 12px;
  font-weight: normal;
  line-height: 15px;
  text-align: left;
  color: ${colors.deepForestGreen};
`;

const Value = styled.Text`
  flex: 0.7;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  text-align: left;
  color: ${colors.palmLeaf};
`;
