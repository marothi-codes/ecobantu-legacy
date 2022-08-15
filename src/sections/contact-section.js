/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { Alert, Box, Button, Container, Grid, Input, Label, Spinner, Textarea } from 'theme-ui';
import theme from 'theme';
import { Controller, useForm } from 'react-hook-form';
import SectionHeader from 'components/section-header';
import axios from 'axios';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formMessageType, setFormMessageType] = useState('');

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/contact', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) reset();
      setLoading(false);
      console.log(response.data);
      const { message, type } = response.data;
      setFormMessage(message);
      setFormMessageType(type);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <section id="contact" sx={{ variant: 'section.contact' }}>
      <Container>
        <hr sx={theme.styles.hr} />

        <br />
        <SectionHeader slogan="LET US SOLVE YOUR PROBLEM" title="Contact ecoBantu" />
        <hr sx={theme.styles.hr} />
        <br />

        <Grid gap={2} columns={[1, 1, 2]}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Name */}
            <Label sx={styles.forms.label} htmlFor="name">
              Name:
            </Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, minLength: 5 }}
              render={({ field }) => <Input id="name" sx={styles.forms.input} mb={3} {...field} />}
            />
            {errors?.name?.type === 'required' && (
              <p sx={styles.forms.error}>Please enter your name.</p>
            )}
            {errors?.name?.type === 'minLength' && (
              <p sx={styles.forms.error}>Your name must at least consist of 5 characters.</p>
            )}
            {/* Email */}
            <Label sx={styles.forms.label} htmlFor="email">
              Email:
            </Label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                minLength: 7,
                pattern: /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/,
              }}
              render={({ field }) => (
                <Input id="email" type="email" sx={styles.forms.input} mb={3} {...field} />
              )}
            />
            {errors?.email?.type === 'required' && (
              <p sx={styles.forms.error}>Please enter your email.</p>
            )}
            {errors?.email?.type === 'minLength' && (
              <p sx={styles.forms.error}>Your email must at least consist of 7 characters.</p>
            )}
            {errors?.email?.type === 'pattern' && (
              <p sx={styles.forms.error}>Please enter a valid email address.</p>
            )}
            {/* Phone */}
            <Label sx={styles.forms.label} htmlFor="phone">
              Phone:
            </Label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: true, minLength: 5, pattern: /([\d])/ }}
              render={({ field }) => (
                <Input id="phone" type="tel" sx={styles.forms.input} mb={3} {...field} />
              )}
            />
            {errors?.phone?.type === 'required' && (
              <p sx={styles.forms.error}>Please enter your phone number.</p>
            )}
            {errors?.phone?.type === 'minLength' && (
              <p sx={styles.forms.error}>Your email must at least consist of 10 digits.</p>
            )}
            {errors?.phone?.type === 'pattern' && (
              <p sx={styles.forms.error}>The phone number must contain digits only.</p>
            )}
            {/* Subject */}
            <Label sx={styles.forms.label} htmlFor="subject">
              Subject:
            </Label>
            <Controller
              name="subject"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input id="subject" sx={styles.forms.input} mb={3} {...field} />
              )}
            />
            {errors?.subject?.type === 'required' && (
              <p sx={styles.forms.error}>Please fill in the subject.</p>
            )}
            {/* Message */}
            <Label sx={styles.forms.label} htmlFor="message">
              Message:
            </Label>
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea id="message" rows={6} mb={3} sx={styles.forms.textarea} {...field} />
              )}
            />
            {errors?.message?.type === 'required' && (
              <p sx={styles.forms.error}>Please fill in the message.</p>
            )}
            {/* Submit Button */}
            <hr sx={theme.styles.hr} />
            <Button type="submit">Send It</Button>
            {'  '}
            <Button type="reset" onClick={() => reset()} sx={ {variant: 'buttons.whiteButton'} }>
              Start Over
            </Button>

            <Box sx={{ margin: '1rem' }}>
              {loading ? (
                <>
                  <br />
                  <Spinner />
                </>
              ) : formMessageType !== '' ? (
                <>
                  <br />
                  <Alert variant={formMessageType}>{formMessage}</Alert>
                </>
              ) : (
                <></>
              )}
            </Box>
          </form>

          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57358.782697618284!2d27.90541814409626!3d-26.036045257100824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95760e279fb9db%3A0x91cedd4adefa9fa9!2s496%20Spionkop%20Ave%2C%20North%20Riding%20AH%2C%20Roodepoort%2C%202169!5e0!3m2!1sen!2sza!4v1660207913395!5m2!1sen!2sza"
              height="600"
              sx={styles.forms.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px primary`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
    map: {
      width: '100%',
      border: '0',
    },
    error: {
      color: '#ff0000',
    },
    icon: {
      color: '#fff',
    },
    alert: {
      marginTop: '1rem',
    },
  },
};
