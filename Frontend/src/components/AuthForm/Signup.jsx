import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1010';

const Signup = ({ onSuccess }) => {
	const toast = useToast();
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSignup = async () => {
		if (!inputs.username.trim() || !inputs.password.trim()) {
			toast({
				title: 'Missing details',
				description: 'Please enter username and password.',
				status: 'warning',
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		setIsLoading(true);
		try {
			const response = await fetch(`${API_BASE_URL}/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: inputs.username.trim(),
					password: inputs.password,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || 'Signup failed');
			}

			toast({
				title: 'Account created',
				description: 'You can now log in with your credentials.',
				status: 'success',
				duration: 2500,
				isClosable: true,
			});
			onSuccess?.();
		} catch (error) {
			toast({
				title: 'Signup failed',
				description: error.message || 'Could not register. Please try again.',
				status: 'error',
				duration: 3500,
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<VStack spacing={3} w={'full'}>
			<Input
				placeholder='Email'
				fontSize={14}
				type='email'
				size={"sm"}
				value={inputs.email}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
				bg={'blackAlpha.300'}
				borderColor={'whiteAlpha.200'}
			/>
			<Input
				placeholder='Username'
				fontSize={14}
				type='text'
				size={"sm"}
				value={inputs.username}
				onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
				bg={'blackAlpha.300'}
				borderColor={'whiteAlpha.200'}
			/>
			<Input
				placeholder='Full Name'
				fontSize={14}
				type='text'
				size={"sm"}
				value={inputs.fullName}
				onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
				bg={'blackAlpha.300'}
				borderColor={'whiteAlpha.200'}
			/>
			<InputGroup>
				<Input
					placeholder='Password'
					fontSize={14}
					type={showPassword ? "text" : "password"}
					value={inputs.password}
					size={"sm"}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
					bg={'blackAlpha.300'}
					borderColor={'whiteAlpha.200'}
				/>
				<InputRightElement h='full'>
					<Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>

			<Button
				w={"full"}
				colorScheme='orange'
				size={"sm"}
				fontSize={14}
				borderRadius={'xl'}
				onClick={handleSignup}
				isLoading={isLoading}
				loadingText='Creating account'
			>
				Sign Up
			</Button>
		</VStack>
	);
};

export default Signup;
