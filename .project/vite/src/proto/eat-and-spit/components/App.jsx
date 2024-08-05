import FriendsList from "./FriendsList";
import FormAddFriends from "./FormAddFriend";
import Button from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Francis of the Filth",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da841d408e9d61fdcfc37ea57c3c",
    balance: -7,
  },
  {
    id: 933372,
    name: "Ian Doop",
    image: "https://i1.sndcdn.com/artworks-000150066268-7y05l5-t500x500.jpg",
    balance: 20,
  },
  {
    id: 499476,
    name: "Maxime",
    image: "https://media.tenor.com/vy4uYFOEtxwAAAAM/maxmoefoe-max.gif",
    balance: 0,
  },
];

export default function App(){
  return (
    <div className="App">
      <h1>Hello world!</h1>

      <div className="sidebar">
        <FriendsList friends={initialFriends}/>
        <Button>Add Friend</Button>
        <FormAddFriends />
      </div>
    </div>
  );
}