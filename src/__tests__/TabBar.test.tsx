// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { SmlsTabBar } from '..';

// const mockList = [
//   {
//     id: 'teste1',
//     key: 'teste1',
//     label: 'Label 1',
//     href: '#',
//     active: true,
//     disabled: false,
//   },
//   {
//     id: 'teste2',
//     key: 'teste2',
//     label: 'Label 2',
//     href: '#',
//     active: false,
//     disabled: false,
//   },
//   {
//     id: 'teste3',
//     key: 'teste3',
//     label: 'Label 3',
//     href: '#',
//     active: false,
//     disabled: false,
//   },
// ];

// describe('TabBar', () => {
//   test('renders TabBar', async () => {
//     const initialValue = 'Initial value';

//     render(<SmlsTabBar list={mockList} />);

//     expect(screen.getByText('Label 3')).toBeInTheDocument();
//     expect(screen.getByText('Label 2')).toBeInTheDocument();
//     expect(screen.getByText('Label 1')).toBeInTheDocument();
//   });
// });
