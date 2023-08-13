import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';

const ViewerDocumentPage = ({ documents }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {documents.map((document, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{document.type} Document</Typography>
                <Typography variant="body2">Year: {document.year}</Typography>
                <Typography variant="body2">Session: {document.session}</Typography>
                {/* Add other document information */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ViewerDocumentPage;
