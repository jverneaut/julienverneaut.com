import React, { Component } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const ModalContainer = styled.div`
  background: ${props => props.theme.colors.light};
  border-radius: 4px;
  padding: 32px 24px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 64px;
`;

const Form = styled.form``;

const FormEmail = styled.input`
  width: calc(100% - 32px);
  font-size: 1em;
  border: 1px solid rgba(10, 29, 66, 0.06);
  border-radius: 4px;
  padding: 16px;
`;

const FormMessage = styled.textarea`
  margin-top: 16px;
  width: calc(100% - 32px);
  font-size: 1em;
  border: 1px solid rgba(10, 29, 66, 0.06);
  border-radius: 4px;
  padding: 16px;
`;

const FormSubmit = styled.button`
  text-decoration: none;
  background-color: white;
  border: 1px solid rgba(10, 29, 66, 0.06);
  color: ${props => props.theme.colors.primary};
  padding: 16px 24px;
  margin-right: 16px;
  display: inline-block;
  border-radius: 4px;
  margin-top: 16px;
  transition: 0.3s all;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ModalMessage = styled.div`
  margin-top: 32px;
  line-height: 1.5em;
`;

const Link = styled.a`
  color: ${props => props.theme.colors.primary};
`;

class ContactForm extends Component {
  state = { visible: false }

  showContactForm = () => { this.setState({ visible: true }) }

  hideContactForm = () => { this.setState({ visible: false }) }

  render() {
    if (this.state.visible) {
      return (
        <ModalBackground onClick={this.hideContactForm}>
          <ModalContainer onClick={e => e.stopPropagation()}>
            <Form action="https://formspree.io/jverneaut@gmail.com" method="POST">
              <FormEmail type="text" name="email" placeholder="Votre email" required />
              <FormMessage placeholder="Votre message" name="message" rows={4} />
              <FormSubmit>Envoyer</FormSubmit>
            </Form>
            <ModalMessage>Vous pouvez également me contacter <Link href="mailto:jverneaut@gmail.com">directement par mail</Link> ou via <Link href="https://fr.linkedin.com/in/julien-verneaut-6b56b8122">mon LinkedIn</Link>.</ModalMessage>
          </ModalContainer>
        </ModalBackground>
      )
    } else {
      return null;
    }
  }
}

export default ContactForm;

