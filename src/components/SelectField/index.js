import './SelectField.css';

const SelectField = (props) => {
  return (
    <div className='selectField'>
      <label>{props.label}</label>
      <select required={props.required} value={props.value} onChange={(event) => props.onChange(event.target.value)}>
        {props.itens.map(item => <option key={item.id} value={item.id}>{item.grupo}</option>)}
      </select>
    </div>
  )
}

export default SelectField;