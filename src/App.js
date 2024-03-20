import { useEffect, useState } from "react";
import "./index.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Groups from "./components/Groups";
import Footer from "./components/Footer";
import GuestQuantity from "./components/GuestQuantity";
import Button from "./components/Button";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [guests, setGuests] = useState([]);
  const groups = [
    {id: 0, group: "Escolha um grupo..."},
    {id: 1, group: "Aniversariante", primaryColor: "#00C1D4", secondaryColor: "#CCF0F3"},
    {id: 2, group: "Família", primaryColor: "#DC6EBE", secondaryColor: "#F5D3EC"},
    {id: 3, group: "Amigos", primaryColor: "#A6D157", secondaryColor: "#E7F3D1"},
  ];

  useEffect(() => {
    let aux = localStorage.getItem('guests')
    let guests = JSON.parse(aux)
    if(aux === null) {
      setGuests([])
    } else {
      setGuests(guests)
    }
  },[])

  const onSaveGuest = (guest) => {
    let item = {id: uuidv4(), ...guest}
    let aux = [...guests, item]
    setGuests(aux)

    //salvar no localStorage
    localStorage.setItem('guests', JSON.stringify(aux))
  };

  const removeList = (event) => {
    event.preventDefault();
    setGuests([])
    localStorage.setItem('guests', JSON.stringify([]))
  };

  const removeGuest = (id) => {
    let aux = guests.filter(guest => guest.id !== id)
    setGuests(aux)

    localStorage.setItem('guests', JSON.stringify(aux))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        groups={groups.map(group => {
          return {id: group.id, grupo: group.group}
        })}
        onSaveGuest={onSaveGuest}
      />
      <GuestQuantity guests={guests}/>
      {guests.length > 0 ? 
        <div className="buttonRemove" onClick={removeList}>
          <Button>
            Apagar Lista
          </Button>
        </div>
        : ""
      }
      {groups.map(group => {
        if(group.id === 0) {
          return false
        } else {
          return <Groups 
            key={group.id} 
            group={group.group} 
            primaryColor={group.primaryColor} 
            secondaryColor={group.secondaryColor}
            guests={guests.filter(guest => parseInt(guest.group) === group.id)}
            removeGuest={removeGuest}
          />
        }
      }
      )}
      <Footer/>
    </div>
  );
}

export default App;
