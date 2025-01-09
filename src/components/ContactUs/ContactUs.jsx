import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { useForm } from 'react-hook-form';
import {
	StyledBox,
	StyledBoxCB,
	StyledBoxFieldQuery,
	StyledBoxFields,
	StyledBoxName,
	StyledBoxQuery,
	StyledBoxQueryType,
	StyledButton,
	StyledCheckBox,
	StyledTextArea,
	StyledTextInput,
	StyledTextQuery,
	StyledTitle
} from './constactUs.styles';

const ContactUs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	return (
		<StyledBox>
			<StyledTitle $weight={FONTS.bold}>Contact Us</StyledTitle>
			<form
				autoComplete='off'
				onSubmit={handleSubmit(data => {
					console.log(data);
				})}
			>
				<StyledBoxName>
					<StyledBoxFields>
						<label htmlFor=''>First Name</label>
						<StyledTextInput
							{...register('firstname', {
								required: 'requerido',
								message: 'AYUDA'
							})}
							$bordercolor={COLORS.grey500}
							type='text'
						/>
					</StyledBoxFields>
					<p>{errors.firstname?.message}</p>
					<StyledBoxFields>
						<label htmlFor=''>Last Name</label>
						<StyledTextInput
							{...register('lasttname')}
							$bordercolor={COLORS.grey500}
							type='text'
						/>
					</StyledBoxFields>
				</StyledBoxName>
				<StyledBoxFields>
					<label htmlFor=''>Email Address</label>
					<StyledTextInput $bordercolor={COLORS.grey500} type='text' />
				</StyledBoxFields>
				<StyledBoxFields>
					<label htmlFor=''>Query Type</label>
					<StyledBoxQueryType>
						<StyledBoxFieldQuery $bordercolor={COLORS.grey500}>
							<StyledCheckBox type='radiobutton' />
							<StyledTextQuery>General Enquiry</StyledTextQuery>
						</StyledBoxFieldQuery>
						<StyledBoxFieldQuery>
							<StyledCheckBox type='radiobutton' />
							<StyledTextQuery>Support Request</StyledTextQuery>
						</StyledBoxFieldQuery>
					</StyledBoxQueryType>
				</StyledBoxFields>
				<StyledBoxFields>
					<label htmlFor=''>Message</label>
					<StyledTextArea
						$bordercolor={COLORS.grey500}
						name=''
						id=''
					></StyledTextArea>
				</StyledBoxFields>
				<StyledBoxCB>
					<input type='checkbox' />
					<p>I consent to being contacted by the team *</p>
				</StyledBoxCB>
				<StyledButton type='submit' $bg={COLORS.green600} />
			</form>
		</StyledBox>
	);
};
export default ContactUs;
