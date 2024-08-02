import React, { Component } from 'react';
import Button from './Button';

class FriendsList extends Component {
    renderFriend(friend) {
        return (
            <li key={friend.id}>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>

                {friend.balance < 0 && (
                    <p className="red">
                        You owe {friend.name} ${Math.abs(friend.balance)}
                    </p>
                )}
                {friend.balance > 0 && (
                    <p className="green">
                        {friend.name} owes you ${Math.abs(friend.balance)}
                    </p>
                )}
                {friend.balance === 0 && (
                    <p>
                        You and {friend.name} are even
                    </p>
                )}
                <Button>Select</Button>
            </li>
        );
    }

    render() {
        const { friends } = this.props;
        return (
            <ul>
                {friends.map(friend => this.renderFriend(friend))}
            </ul>
        );
    }
}

export default FriendsList;
