import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface TableItem {
  contentOne: string;
  contentTwo: string;
}

interface ResponseParamsProps {
  headerOne: string;
  headerTwo: string;
  rows: TableItem[];
}

const ResponseParams: React.FC<ResponseParamsProps> = ({ headerOne, headerTwo, rows }) => {
  return (
    <Table className='my-4'>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">{headerOne}</TableHead>
          <TableHead>{headerTwo}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{row.contentOne}</TableCell>
            <TableCell>{row.contentTwo}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ResponseParams;
