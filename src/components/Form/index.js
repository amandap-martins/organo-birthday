import { useState } from 'react';
import Button from '../Button';
import SelectField from '../SelectField';
import TextField from '../TextField';
import './Form.css';

const Form = (props) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [group, setGroup] = useState('');

  const saveCard = (event) => {
    event.preventDefault();
    props.onSaveGuest({
      name,
      age,
      group
    })
    setName("")
    setAge("")
    setGroup("")
  }

  return (
    <section className='form'>
      <form onSubmit={saveCard}>
        <h2>Preencha os dados para criar o card do convidado.</h2>
        <TextField label="Nome" required={true} placeholder="Digite o nome..." value={name} onChange={setName}/>
        <TextField label="Idade" required={true} placeholder="Digite a idade..." value={age} onChange={setAge}/>
        <SelectField label="Grupo" required={true} itens={props.groups} value={group} onChange={setGroup}/>
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form;