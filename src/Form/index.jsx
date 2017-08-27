import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form `
  display: flex;
  flex-direction: column;
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const Label = styled.label`
  font-size: 10px;
`;

const ErrorMsg = styled.label`
  font-size: 10px;
  color: ${props => (props.error ? '#ff003d' : '#fff')};
`;

const DataInputWrapper = styled.div`
  display: flex;
  width: 170px;
  flex-direction: column;
`;

const Name = styled.input `
  border: none;
  border-bottom: 1px solid #9b9b9b;
  outline: none;
  &:focus{
    border-bottom-color: #006cf6;
  }
`;

const Email = styled.input `
  outline: none;
  border: none;
  border-bottom: 1px solid;
  border-bottom-color:  ${props => (props.error ? '#ff003d' : '#9b9b9b')};
      box-shadow: none;
  &:focus{
    border-bottom-color: #006cf6;
  }
`;

const Age = styled.input `
  outline: none;
  border: none;
  border-bottom: 1px solid;
  border-bottom-color:  ${props => (props.error ? '#ff003d' : '#9b9b9b')};
      box-shadow: none;
  &:focus{
    border-bottom-color: #006cf6;
  }
`;

const Massage = styled.input`
  border: none;
  border-bottom: 1px solid #9b9b9b;
  box-shadow: none;
  &:focus{
    outline: none;
    border-bottom-color: #006cf6;
  }
`;

const Buttons = styled.div `
  display: flex;
  justify-content: space-around;
  padding: 50px
`;

const Clear = styled.input `
  width: 200px;
  height: 50px;
  background-color: #dfdfdf;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const Submit = styled.input `
  width: 200px;
  height: 50px;
  background-color: #006cf6;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      massage: '',
      ageError: false,
      emailError: false,
      errors: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.validAge = this.validAge.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  validAge(age) {
    const arr = age.split('.');
    const d = new Date(`${arr[2]}/${arr[1]}/${arr[0]} `);
    if (+arr[2] === d.getFullYear() && +arr[1] === (d.getMonth() + 1) && +arr[0] === d.getDate()) {
      this.setState({ ageError: false });
    } else this.setState({ ageError: true });
  }

  validEmail(email) {
    // eslint-disable-next-line
    const r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if (!r.test(email)) this.setState({ emailError: true });
    else this.setState({ emailError: false });
  }

  handleInput(e) {
    const name = e.target.id;
    const value = e.target.value;
    if (name === 'age') this.validAge(value);
    if (name === 'email') this.validEmail(value);
    this.setState({ [name]: value });
  }

  handleClear() {
    this.setState({
      name: '',
      email: '',
      age: '',
      massage: '',
    });
  }

  render() {
    return (
      <Form >
        <UserData>
          <DataInputWrapper>
            <Name
              id="name"
              type="text"
              placeholder="Имя"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </DataInputWrapper>
          <DataInputWrapper>
            <Label htmlFor="email"> Email </Label>
            <Email
              id="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInput}
              error={this.state.emailError}
              required
            />
            <ErrorMsg htmlFor="email" error={this.state.emailError}> Неверный формат </ErrorMsg>
          </DataInputWrapper>
          <DataInputWrapper>
            <Label htmlFor="age"> Дата рождения</Label>
            <Age
              id="age"
              value={this.state.age}
              onChange={this.handleInput}
              error={this.state.ageError}
              required
            />
            <ErrorMsg htmlFor="age" error={this.state.ageError}> Неверный формат </ErrorMsg>
          </DataInputWrapper>
        </UserData>
        <Massage
          id="massage"
          type="text"
          placeholder="Сообщение"
          value={this.state.massage}
          onChange={this.handleInput}
          required
        />
        <Buttons>
          <Clear onClick={this.handleClear} type="reset" value="очистить" />
          <Submit type="submit" value="отправить" />
        </Buttons>
      </Form>
    );
  }
}
