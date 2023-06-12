// import {
//   Container,
//   FormControl,
//   FormLabel,
//   FormHelperText,
//   Heading,
//   Button,
// } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from 'redux/authorization/operations';

// export default function Register() {
//   const [form] = FormReg.useForm();
//   const dispatch = useDispatch();
//   const { isLoading, error } = useSelector(state => state.auth);

//   const onFinish = values => {
//     const { name, email, password, confirm } = values;

//     if (password === confirm) {
//       dispatch(register({ name, email, password }));
//       !isLoading && !error && form.resetFields();
//     }
//   };

//   return (
//     <section>
//       <Container
//         maxWidth={['sm', 'md', 'lg', 'xl', '2xl']}
//         position={'absolute'}
//         top={'50%'}
//         left={'50%'}
//         transform="translate(-50%, -50%)"
//         paddingTop={'40px'}
//         paddingBottom={'40px'}
//         sx={{
//           backgroundColor: 'hsla(0, 0%, 10%, 0.5)',
//           backdropFilter: 'blur(8px)',
//           border: '2px solid white',
//           borderRadius: '1rem',
//         }}
//       >
//         <form
//           form={form}
//           name="register"
//           onFinish={onFinish}
//           initialValues={{
//             residence: ['zhejiang', 'hangzhou', 'xihu'],
//             prefix: '86',
//           }}
//           scrollToFirstError
//         >
//           <Heading marginLeft={'30%'} marginBottom={'15px'} color={'#2e2d2dbc'}>
//             Register new user
//           </Heading>
//           <FormControl isRequired marginBottom={'12px'}>
//             <FormLabel htmlFor="name">Full name</FormLabel>
//             <Input type="name" placeholder="Please input your name!" />
//             <FormHelperText>
//               "What do you want others to call you?"
//             </FormHelperText>
//           </FormControl>
//           <FormControl isRequired marginBottom={'12px'}>
//             <FormLabel htmlFor="email">Email</FormLabel>
//             <Input type="email" placeholder="Please input your E-mail!" />
//           </FormControl>
//           <FormControl isRequired marginBottom={'12px'}>
//             <FormLabel htmlFor="password">
//               Please input your password!
//             </FormLabel>
//             <Input
//               type="password"
//               placeholder="Please confirm your password!"
//               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
//             />
//             <FormHelperText>
//               "Must contain at least one number and one uppercase and lowercase
//               letter, and at least 7 or more characters"
//             </FormHelperText>
//           </FormControl>

//           <Button
//             type="submit"
//             width="100px"
//             height="40px"
//             marginLeft="30%"
//             display="block"
//             fontSize="18px"
//           >
//             Register
//           </Button>
//         </form>
//       </Container>
//     </section>
//   );
// }

import { RegisterForm } from 'components';

import css  from './Register.module.css';

const Register = () => {
  return (
    <div className={css.main}>
      <RegisterForm />
    </div>
  );
};

export default Register;