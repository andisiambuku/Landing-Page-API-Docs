import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface TableItem {
  contentOne: string;
  contentTwo: string;
  contentThree: string;
}

interface ResponseParams2Props {
  headerOne: string;
  headerTwo: string;
  headerThree: string;
  rows: TableItem[];
}

const ResponseParams2: React.FC<ResponseParams2Props> = ({ headerOne, headerTwo, headerThree, rows }) => {
  return (
    <Table className='my-4'>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">{headerOne}</TableHead>
          <TableHead>{headerTwo}</TableHead>
          <TableHead>{headerThree}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell >{row.contentOne}</TableCell>
            <TableCell>{row.contentTwo}</TableCell>
            <TableCell>{row.contentThree}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ResponseParams2;
