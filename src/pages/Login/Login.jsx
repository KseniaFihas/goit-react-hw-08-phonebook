// import { useDispatch } from "react-redux";
// import { loginization } from "redux/authorization/operations";
// import { Container } from "@chakra-ui/react";


// export default function Login() {
//     const [form] = FormWrap.useForm();
//     const dispatch = useDispatch;

//     const onFinish = values => {
//         dispatch(loginization(values));
//         form.resetFields();
//     };

//     return (
//         <section>
//             <Container
//             maxWidth={['sm', 'md', 'lg', 'xl', '2xl']}
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
//         }}>
//               <form
//           form={form}
//           name="login"
//           onFinish={onFinish}
         

//         >
//           <Heading marginLeft={'30%'} marginBottom={'15px'} color={'#2e2d2dbc'}>
//             Log in
//           </Heading>
//           <FormControl isRequired marginBottom={'12px'}>
//             <FormLabel htmlFor="email">Email</FormLabel>
//             <Input type="name" placeholder="Please input your name!" />
//             <FormHelperText>
//               "Please input your Email!"
//             </FormHelperText>
//           </FormControl>
//           <FormControl isRequired marginBottom={'12px'}>
//             <FormLabel htmlFor="email">password</FormLabel>
//             <Input type="email" placeholder="Please input your E-mail!" />
//                     </FormControl>
//                      <Button
//             type="submit"
//             width="100px"
//             height="40px"
//             marginLeft="30%"
//             display="block"
//             fontSize="18px"
//           >
//             Log in
//           </Button>
//         </form>  
//           </Container>
//         </section>
//     )
// };
import { LoginForm } from 'components';

import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.main}>
      <title>Login</title>
      <LoginForm />
    </div>
  );
};

export default Login;