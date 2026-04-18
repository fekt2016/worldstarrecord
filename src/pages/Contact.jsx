import styled from 'styled-components';
import { Badge, Card, Container, Text } from '../ui/primitives';

function Contact() {
  return (
    <PageSection>
      <StyledContainer>
        <Header>
          <Badge $tone="primary">Contact</Badge>
          <Text as="h1" $size="3xl" $weight="black">
            Let&apos;s Plan Your Festival Experience
          </Text>
        </Header>

        <ContentGrid>
          <InfoCard $padding="lg">
            <Text as="h2" $size="xl" $weight="bold">
              World Star Records Ltd
            </Text>
            <InfoList>
              <InfoItem>
                <Label>Postal Address</Label>
                <Text $size="sm">P.O. Box AN 6676, Accra North, Ghana</Text>
              </InfoItem>
              <InfoItem>
                <Label>Call</Label>
                <Text as="a" href="tel:+233546009191" $size="sm">
                  +233 54 600 9191
                </Text>
              </InfoItem>
              <InfoItem>
                <Label>Email</Label>
                <EmailList>
                  <li>
                    <Text as="a" href="mailto:info@worldstargh.com" $size="sm">
                      info@worldstargh.com
                    </Text>
                  </li>
                  <li>
                    <Text as="a" href="mailto:worldstarrecords626@gmail.com" $size="sm">
                      worldstarrecords626@gmail.com
                    </Text>
                  </li>
                  <li>
                    <Text as="a" href="mailto:ernestdjan@worldstargh.com" $size="sm">
                      ernestdjan@worldstargh.com
                    </Text>
                  </li>
                </EmailList>
              </InfoItem>
            </InfoList>
          </InfoCard>

          <FormCard $padding="lg">
            <Text as="h2" $size="xl" $weight="bold">
              Send A Message
            </Text>
            <ContactForm onSubmit={(event) => event.preventDefault()}>
              <FieldGroup>
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" name="name" autoComplete="name" required />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="contact-message">Message</Label>
                <TextArea id="contact-message" name="message" rows={5} required />
              </FieldGroup>
              <SubmitButton type="submit">Submit Inquiry</SubmitButton>
            </ContactForm>
          </FormCard>
        </ContentGrid>
      </StyledContainer>
    </PageSection>
  );
}

const PageSection = styled.section`
  padding-block: ${({ theme }) => `${theme.space[12]} ${theme.space[24]}`};
`;

const StyledContainer = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.space[6]};
`;

const Header = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.space[3]};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[4]};

  @media ${({ theme }) => theme.mediaMax.md} {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(Card)`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.space[4]};
`;

const FormCard = styled(Card)`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.space[4]};
`;

const InfoList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[4]};
`;

const InfoItem = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[1]};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const EmailList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.space[1]};
`;

const ContactForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.space[3]};
`;

const FieldGroup = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[1]};
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.textStrong};
`;

const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.textStrong};
  resize: vertical;
`;

const SubmitButton = styled.button`
  min-height: 2.8rem;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.textStrong};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
`;

export default Contact;
