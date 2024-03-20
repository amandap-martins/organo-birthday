import './GuestQuantity.css';

const GuestQuantity = ({guests}) => {
  let Menor10 = () => {
    let count = 0;
    (guests.length > 0) && guests.forEach(guest => {
      if(guest.age <= 10 && guest.age > 3) {
        count += 1;
      }
    })

    return <p>{count === 0 ? "" : `Menores de 10 anos: ${count}`}</p>
  };

  let Menor3 = () => {
    let count = 0;
    (guests.length > 0) && guests.forEach(guest => {
      if(guest.age <= 3) {
        count += 1;
      }
    })

    return <p>{count === 0 ? "" : `Menores de 3 anos: ${count}`}</p>
  };

  let Maior10 = () => {
    let count = 0;
    (guests.length > 0) && guests.forEach(guest => {
      if(guest.age > 10) {
        count += 1;
      }
    })

    return <p>{count === 0 ? "" : `Maiores de 10 anos: ${count}`}</p>
  };

  return (
    (guests.length > 0) ? <section className='guestQuantity'>
      <h3>Quantidades</h3>
      <Maior10 />
      <Menor10 />
      <Menor3 />
      <p className='total'>{`Total de convidados: ${guests.length}`}</p>
    </section>
    : ""
  )
}

export default GuestQuantity;