import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

  //-------------Pagination Section to go Next-or-Previous Page-------------\\

export default function FooterPagination({page,setPage}) {
  return (
    <div style={{marginLeft:"38%"}}> <br/><br/>
    <Stack spacing={2} >
      <Pagination count={10} color="primary" variant="outlined" shape="rounded" defaultPage={page} onChange={(event,value)=>setPage(value)}/>
    </Stack><br/><br/>
    </div>
  );
}