import React from 'react';
import { Container, Typography } from '@mui/material';

const PrivacyPolicyPage = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="body1" paragraph>
        At UsherIn, we respect your privacy. We only collect the data necessary to provide our services, such as your name, email, and LinkedIn public profile information during login.
      </Typography>

      <Typography variant="body1" paragraph>
        This information is not sold or shared with third parties. By using UsherIn, you consent to this privacy policy. We may update it as our platform evolves.
      </Typography>

      <Typography variant="body1" paragraph>
        If you have any questions, feel free to contact us at <strong>hello@usherin.dev</strong>.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicyPage;
