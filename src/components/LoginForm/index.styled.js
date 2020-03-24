import { styled } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const InputText = styled(TextField)({
  marginBottom: '5px',
});

export default function StyledComponents() {
  return <InputText>StyledComponents</InputText>;
}
