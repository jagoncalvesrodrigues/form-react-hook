import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { useForm } from 'react-hook-form';
import {
	StyledBox,
	StyledBoxCB,
	StyledBoxCBmain,
	StyledBoxFieldQuery,
	StyledBoxFields,
	StyledBoxName,
	StyledBoxQueryType,
	StyledButton,
	StyledCheckBox,
	StyledErrorText,
	StyledTextArea,
	StyledTextInput,
	StyledTextQuery,
	StyledTitle
} from './constactUs.styles';
import { useState } from 'react';
import { FORM_VALIDATIONS } from '../constants/form-validations';

const ContactUs = () => {
	const [selectedOption, setSelectedOption] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	console.log(errors);

	return (
		<StyledBox>
			<StyledTitle $weight={FONTS.bold}>Contact Us</StyledTitle>
			<form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
				<StyledBoxName>
					<StyledBoxFields>
						<label htmlFor=''>First Name</label>
						<StyledTextInput
							{...register('firstname', FORM_VALIDATIONS.NAME)}
							$bordercolor={COLORS.grey500}
							$bordercolorselected={COLORS.green600}
							type='text'
						/>
						<StyledErrorText $color={COLORS.red}>
							{errors?.firstname?.message}
						</StyledErrorText>
					</StyledBoxFields>
					<StyledBoxFields>
						<label htmlFor=''>Last Name</label>
						<StyledTextInput
							{...register('lastname', {
								required: 'This field is required'
							})}
							$bordercolor={COLORS.grey500}
							$bordercolorselected={COLORS.green600}
							type='text'
						/>
						<StyledErrorText $color={COLORS.red}>
							{errors.lastname?.message}
						</StyledErrorText>
					</StyledBoxFields>
				</StyledBoxName>
				<StyledBoxFields>
					<label htmlFor=''>Email Address</label>
					<StyledTextInput
						{...register('email', {
							required: 'El correo electrónico es obligatorio',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Ingresa un correo electrónico válido'
							}
						})}
						$bordercolor={COLORS.grey500}
						$bordercolorselected={COLORS.green600}
						type='email'
					/>
					<StyledErrorText $color={COLORS.red}>
						{errors.email?.message}
					</StyledErrorText>
				</StyledBoxFields>
				<StyledBoxFields>
					<label htmlFor=''>Query Type</label>
					<StyledBoxQueryType>
						<StyledBoxFieldQuery
							isSelected={selectedOption === 'general-enquiry'}
							$bordercolor={COLORS.grey500}
						>
							<StyledCheckBox
								name='query'
								type='radio'
								onChange={() => setSelectedOption('general-enquiry')}
							/>
							<StyledTextQuery>General Enquiry</StyledTextQuery>
						</StyledBoxFieldQuery>
						<StyledBoxFieldQuery
							isSelected={selectedOption === 'support-request'}
							$bordercolor={COLORS.grey500}
						>
							<StyledCheckBox
								name='query'
								type='radio'
								onChange={() => setSelectedOption('support-request')}
							/>
							<StyledTextQuery>Support Request</StyledTextQuery>
						</StyledBoxFieldQuery>
					</StyledBoxQueryType>
				</StyledBoxFields>
				<StyledBoxFields>
					<label htmlFor=''>Message</label>
					<StyledTextArea
						{...register('textarea', {
							required: 'This field is required'
						})}
						$bordercolor={COLORS.grey500}
						$bordercolorselected={COLORS.green600}
						type='text'
					></StyledTextArea>
					<StyledErrorText $color={COLORS.red}>
						{errors.textarea?.message}
					</StyledErrorText>
				</StyledBoxFields>
				<StyledBoxCBmain>
					<StyledBoxCB>
						<input
							type='checkbox'
							{...register('consent', {
								required:
									'To submit this form, please consent to being contacted'
							})}
						/>
						<p>I consent to being contacted by the team *</p>
					</StyledBoxCB>
					<StyledErrorText $color={COLORS.red}>
						{errors.consent?.message}
					</StyledErrorText>
				</StyledBoxCBmain>
				<StyledButton type='submit' $bg={COLORS.green600} />
			</form>
		</StyledBox>
	);
};

const onSubmit = data => {
	console.log(data);
};

export default ContactUs;
