// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { SmlsButton } from '..';

// describe('Button', () => {
//   test('renders button', async () => {
//     const defaultButton = 'Default Button';

//     expect(screen.queryByText(defaultButton)).toBeNull();

//     render(
//       <SmlsButton
//         color="primary"
//         isLoading={false}
//         loadingText="Carregando..."
//         text="Smiles"
//       >
//         {defaultButton}
//       </SmlsButton>,
//     );

//     render(
//       <SmlsButton
//         color="primary"
//         isLoading
//         loadingText="Carregando..."
//         text="Smiles"
//       />,
//     );

//     expect(screen.getByText(defaultButton)).toBeInTheDocument();
//   });
// });
