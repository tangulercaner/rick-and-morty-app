import React from 'react';
import styled from 'styled-components/native';
import TableItem from './TableItem';
import {ITableContent, ITableItem} from '../../types/componentTypes';

interface IProps {
  content: ITableContent;
}

const Table = ({content}: IProps) => {
  return (
    <TableContainer>
      {content.map((item: ITableItem) => (
        <TableItem key={item.title} title={item.title} value={item.value} />
      ))}
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.View``;
