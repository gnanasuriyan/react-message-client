import { Box, Container, H6 } from '@gilbarbara/components';

function Footer() {
  return (
    <Box as="footer" border={{ size: 1, side: 'top', color: 'gray.200' }}>
      <Container py="lg">
        <Box flexBox justify="space-between">
          <H6>app footer</H6>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
