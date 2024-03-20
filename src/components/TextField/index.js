import './TextField.css';

const TextField = (props) => {
  return (
    <div className='textField'>
      <label>{props.label}</label>
      <input required={props.required} placeholder={props.placeholder} value={props.value} onChange={(event) => props.onChange(event.target.value)}/>
    </div>
  )
}

export default TextField;