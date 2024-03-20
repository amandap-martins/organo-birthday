import CardGuest from '../CardGuest';
import './Groups.css';

const Groups = (props) => {
  const background = {backgroundColor: props.secondaryColor, backgroundImage: 'url(/images/fundo.png)'}
  const borderColor = {borderColor: props.primaryColor}

  return (
    (props.guests.length > 0) ? <section className='groups' style={background}>
      <h3 style={borderColor}>{props.group}</h3>
      <div className='cards'>
        {props.guests.map(guest => <CardGuest 
          key={guest.name}
          name={guest.name} 
          age={guest.age} 
          id={guest.id}
          primaryColor={props.primaryColor}
          removeGuest={props.removeGuest}
        />)}
      </div>
    </section>
    : <></>
  )
}

export default Groups;